import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AWSAccountListsMaterial from './AccountListMaterial'
import { Greeting } from './Greeting'
import * as serviceWorker from './serviceWorker';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";


Amplify.configure(awsExports);




// Main Render Function

ReactDOM.render(
  <React.StrictMode>


    {/* Greeting Component with Header and additional Information */}
    <Greeting name="Oktavius Wiesner" />

    {/* Main Component with Table Data */}
    < AWSAccountListsMaterial />




  </React.StrictMode>,

//<App /> in React.StrictMode reinpacken.

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
