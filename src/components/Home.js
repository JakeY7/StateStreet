import {Component} from "react";
import React from "react";
import Header from "./Header";
import Filters from "../containers/Filters";
import Transactions from "../containers/Transactions";

class Home extends Component{

    render(){
        console.log('Test-this.props',this.props)


        return    <React.Fragment>
            <Header  title="My Transactions" />
            <div className='row'>

                <Filters />
                <Transactions />
            </div>

        </React.Fragment>
    }




}

export default Home