/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var AWS = require('aws-sdk')
AWS.config.update({region: 'eu-central-1'});

var docClient = new AWS.DynamoDB.DocumentClient

// Create AWS Service Objects for Lambda User
const s3 = new AWS.S3({apiVersion: '2006-03-01'});
const sts = new AWS.STS();


// Create Hash of String for Primary Key
const crypto = require('crypto')


// DynamoDB Helper Function. Currently not used.
async function getAllDynamoDBItems(){
  let params = {
    TableName: 'Comments-ifdtxan4k5fglip5ynnopk6bky-dev',
   };

       console.log("Starting Function")
  try {
     var result = await docClient.scan(params).promise()
     console.log(JSON.stringify(result))
     console.log("Success")
  } catch (error) {
     console.log("FAILED")
     console.error(error);
  }
}

// DynamoDB Function to write all collected Data
 const writeAllDynamoDBItems = async (id,num,accountid,name,email,status) => {


  let params = {
    TableName: 'Account-ifdtxan4k5fglip5ynnopk6bky-dev',
    Item:{
      "id":id,
      "num":num,
      "accountid": accountid,
      "name": name,
      "email": email,
      "status": status
  }
   };

     console.log("Writing Account " + name)
  try {
    var result = await docClient.put(params).promise()
    console.log("Success")
  } catch (error) {
    console.log("Failed Writing Files:")
    console.error(error);
  }
}

// STS Function --> Get Current Identity
const getCallerIdentity =  (sts_identity) => {
  return  sts_identity.getCallerIdentity().promise();

};

// STS Function --> Assume Role from another AWS Account
const getCrossAccountCredentials = () => {
  return new Promise((resolve, reject) => {
    const timestamp = (new Date()).getTime();
    const params = {
      RoleArn: 'arn:aws:iam::298094174079:role/amplify-kumo-access-role',
      RoleSessionName: `New-Session-${timestamp}`
    };
    sts.assumeRole(params, (err, data) => {
      if (err) reject(err);
      else {
        resolve({
          accessKeyId: data.Credentials.AccessKeyId,
          secretAccessKey: data.Credentials.SecretAccessKey,
          sessionToken: data.Credentials.SessionToken,
        });
      }
    });
  });
}
// j helps to count all accounts
var j = 0;
var all_accounts = []

// Organizations Function --> List all Accounts
var data_all;
const listAllAccounts =  (identity,params) => {
  return new Promise((resolve, reject) => {

    identity.listAccounts(params, (err, data) => {
      const params = {
        //NextToken: 'abc'
     };
     if (err) reject(err); // an error occurred
      else {
        console.log("Saved all Accounts");

            for (var i=0, max=data.Accounts.length; i < max; i++) {
                //console.log("Count: " + j + " ID:" + data.Accounts[i].Id +" is: " +  data.Accounts[i].Name)
                j += 1;
                //all_accounts.push(data.Accounts[i].Name);
                let str1 = data.Accounts[i].Name;
                let str2 = data.Accounts[i].Id;
                let str3 = str1.concat(str2)

                let hash = crypto.createHash('md5').update(str3).digest("hex")

                all_accounts.push({id:hash, num:j, accountid:data.Accounts[i].Id, name:data.Accounts[i].Name ,email:data.Accounts[i].Email ,status:data.Accounts[i].Status});
        }

           if (data.NextToken != undefined) {
               console.log("There is more")

            params.NextToken = data.NextToken;
            // Both Resolve are needed here so that function can terminate successfull
            resolve( listAllAccounts(identity,params) )
        }
        else {
          console.log("ENDE ERREICHRT")
          //console.log(all_accounts)
          resolve (all_accounts);
      }

   }    // successful response
})
});
} ;

exports.handler = async (event) => {
try {
  // Get getCrossAccountCredentials and Call Service Objects from AWS
  var accessparams = await getCrossAccountCredentials();
  const cbc_master_sts =  new AWS.STS({
    credentials: accessparams
  });

  const cbc_master_orgs = new AWS.Organizations({
    credentials: accessparams,
    region: 'us-east-1'
  });


  //Check own and assumed Identity

  const msg_caller = await getCallerIdentity(sts)
  console.log("Username Current Identity: " + msg_caller.Arn)
  const msg_caller_org = await getCallerIdentity(cbc_master_sts)
  console.log("Username Assumed Identity: " + msg_caller_org.Arn)


  const all_acc = await listAllAccounts(cbc_master_orgs)
  const start = async () => {
    for (let element of all_acc) {
      await writeAllDynamoDBItems(element.id,element.num,element.accountid,element.name,element.email,element.status) ;
      //console.log(element);
    }
    console.log('Done');
  }

  await start();




}
catch(err){
  console.log("Error while Assuming Role from another Account. Message:  " + err)
}

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response
};
