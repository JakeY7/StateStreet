import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'
import Back from "./Back";
class  Transaction extends PureComponent{


    render(){

        const {title,list,detail}=this.props


        console.log('transaction-list',list)

        if(detail){
            return list.map((t,index) =>
                <div key={index} >

                    <div><label className="font-weight-bold">ACCOUNT NO.</label>:{t.account}</div>
                    <div ><label className="font-weight-bold">ACCOUNT NAME</label>:{t.accountName}</div>
                    <div><label className="font-weight-bold">CURRENCY</label>:{t.currencyCode}</div>
                    <div ><label className="font-weight-bold">AMOUNT</label>:{t.amount}</div>
                    <div ><label className="font-weight-bold">TRANSACTION TYPE</label>:{t.transactionType}</div>
                   <Back link="/"/>

                </div>
            )
        }
        if(title){
           return  <div  className='row font-weight-bold' style={{fontSize:'14px'}}>

                <div className='col-2'>ACCOUNT NO.</div>
                <div className='col-3'>ACCOUNT NAME</div>
                <div className='col-2'>CURRENCY</div>
                <div className='col-2'>AMOUNT</div>
                <div className='col-3'>TRANSACTION TYPE</div>


            </div>

        }else if(list)
        {

           return  list.map((t,index) =>
                <div key={index} className='row'>

                    <div className='col-2'><Link to={`/transaction/${t.account}` }>{t.account}</Link></div>
                    <div className='col-3'>{t.accountName}</div>
                    <div className='col-2'>{t.currencyCode}</div>
                    <div className='col-2'>{t.amount}</div>
                    <div className='col-2'>{t.transactionType}</div>


                </div>
            )



        }

    }
}



export default Transaction
