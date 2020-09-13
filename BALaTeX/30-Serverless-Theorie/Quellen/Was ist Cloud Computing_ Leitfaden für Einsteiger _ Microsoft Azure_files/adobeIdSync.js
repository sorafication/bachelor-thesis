// ID sync new code begins

//Declaring the table which stores the integration code,id's and authentication state
var id_data = new Array(4);
for (var i = 0; i < 4; i++) {
 id_data [i] = new Array(3);
}
//Extracting the ids in the cookies
function getCookie(cookie) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == cookie) {
            return unescape(y);
        }
    }
}

var cookie1 = getCookie("ANON");
var cookie2 = getCookie("MC1");
var cookie3 = getCookie("MSFPC");
var cookie4 = getCookie("_mkto_trk");
var i=0,j=0;

// checking if a id is not null, and populating the id_data table
//Extracting the ANON ID
if (cookie1) {
    var A = cookie1.split("=")[1].split("&")[0];
	id_data[j][0]="ANON";
	id_data[j][1]=A;
	id_data[j][2]=Visitor.AuthState.AUTHENTICATED;
	j++;
}
//Extracting the Marketing Cloud ID
if (cookie2)
{
    var GUID = cookie2.split("=")[1].split("&")[0];
	id_data[j][0]= "MC1";
	id_data[j][1]=GUID;
	id_data[j][2]=Visitor.AuthState.LOGGED_OUT;
	j++;
}
//Extracting the Salesforce ID
if (cookie3)
{
    var ID = cookie3.split("=")[1].split("&")[0];
	id_data[j][0]="MSFPC";
	id_data[j][1]=ID;
	id_data[j][2]=Visitor.AuthState.LOGGED_OUT;
	j++;
}
//Extracting the Marketo ID
if (cookie4)
{
    var MRKID = cookie4.split("&")[1].split(":")[1];
	id_data[j][0]="munchkin";
	id_data[j][1]=MRKID;
	id_data[j][2]=Visitor.AuthState.AUTHENTICATED;
	j++;
}

//New ID Sync Code Starts here
//Create the JSON parameter with the number of IDs available.
//Based on the count of Id's available, the json parameters for setCustomerIDs is set.
var json_ids={};
for(var i=0;i<j;i++)
{
	json_ids[id_data[i][0]]= {
            "id": id_data[i][1],
            "authState": id_data[i][2]
        };
}

window.visitor.setCustomerIDs(json_ids);

if (cookie2) {
	window.visitor.setCustomerIDs({
		"88170": {
			id: json_ids['MC1']['id'],
			authState: Visitor.AuthState.LOGGED_OUT
		}
	});
}

if (cookie3) {
	window.visitor.setCustomerIDs({
		"88171": {
			id: json_ids['MSFPC']['id'],
			authState: Visitor.AuthState.LOGGED_OUT
		}
	});
}

//New ID Sync Code Ends here
