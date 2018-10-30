import {Component} from "react";
import React from "react";
import Header from "./Header";
import Transactions from "../containers/Transactions";

class TransactionDetail extends Component{

    render(){

        const {params}=this.props.match
        //return <div>{params.id}</div>
        return <React.Fragment>

            <Header  title={"Transaction "+params.id} />
            <div className='row'>


                <Transactions id={params.id}  />
            </div>
        </React.Fragment>
    }



}
export default TransactionDetail