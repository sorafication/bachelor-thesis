//import React, { useEffect, useState } from 'react'
import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import MaterialTable from 'material-table';

import Search from "@material-ui/icons/Search"
import ViewColumn from "@material-ui/icons/ViewColumn"
import SaveAlt from "@material-ui/icons/SaveAlt"
import ChevronLeft from "@material-ui/icons/ChevronLeft"
import ChevronRight from "@material-ui/icons/ChevronRight"
import FirstPage from "@material-ui/icons/FirstPage"
import LastPage from "@material-ui/icons/LastPage"
import Check from "@material-ui/icons/Check"
import FilterList from "@material-ui/icons/FilterList"
import Remove from "@material-ui/icons/Remove"
import Clear from '@material-ui/icons/Clear';

import { withAuthenticator, AmplifySignOut, AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";



// GraphQL Query to get all data
const listAllAccounts = `query listAllAccounts {
  listAccounts (limit: 300) {
    items{
      id
      accountid
      num
      name
      email
      status
    }
  }
}`;

//Main Component
  class AWSAccountListsMaterial extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        AccountList: []
      }
    }

    //componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
    //Initialization that requires DOM nodes should go here.
    //If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    componentDidMount() {
      this.queryAccounts();
    }

    // Function that fetches data and sets state
    queryAccounts = async() => {
      try {
        const result = await API.graphql(graphqlOperation(listAllAccounts))
        const result_json = Object.values(result)
        const result_optimized = result_json[0].listAccounts.items
        // this will re render the view with new data
        this.setState({

          AccountList:result_optimized,})

      } catch (err) {
        console.log(err);
      }
    }

    // render all the information that is set into the state
      render() {


      return (

        <div style={{ maxWidth: '90%' }} className="Accounts">

        <h2> Tabelle mit allen AWS Accounts  </h2>


        <MaterialTable
                 icons={{
                  ResetSearch: () => <Clear />,
                  Check: () => <Check />,
                  Export: () => <SaveAlt />,
                  Filter: () => <FilterList />,
                  FirstPage: () => <FirstPage />,
                  LastPage: () => <LastPage />,
                  NextPage: () => <ChevronRight />,
                  PreviousPage: () => <ChevronLeft />,
                  Search: () => <Search />,
                  ThirdStateCheck: () => <Remove />,
                  ViewColumn: () => <ViewColumn />,
                  DetailPanel: () => <ChevronRight />
                }}

          columns={[
            { title: 'Nummer', field: 'num', defaultSort: "asc", width: '6%' },
            { title: 'Name', field: 'name', width: '30%' },
            { title: 'Account ID', field: 'accountid' },
            { title: 'Email', field: 'email',width: '50%', align: "center" },
            { title: 'Status', field: 'status', sorting:false, width: '6%'}
          ]}
          //Provide data from State File
          data={this.state.AccountList}
          title="Account List"

          options= {{
              headerStyle: {
                backgroundColor: '#4b7d94',
                color: '#FFF'
              },
              rowStyle: {
                backgroundColor: '#EEE',
                fontSize: 14,
              },
              pageSize: 30,
              pageSizeOptions: [10,20,50],
              maxBodyHeight: '20%'
          }}
        />
<AmplifySignOut />
        </div>

      );
    }
  }
 export default withAuthenticator(AWSAccountListsMaterial, true)

