import React, {Component} from 'react'
import Transaction from "./Transaction";
import Back from "./Back";

class  TransactionList extends Component {

    render() {
        const {transactions,detail,visible} = this.props

        return transactions.length===0?<div>
            <div> No Record</div>
            {visible&& <Back link='/'/>}



        </div>:(detail?
                ( <div> <Transaction list={transactions} detail={detail}/></div>)
                :(<div className='col-9'>

                <Transaction title={true}/>
                <Transaction list={transactions}/>


            </div>
        )


        )


    }
}






export default TransactionList
