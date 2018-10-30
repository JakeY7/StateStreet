import { connect } from 'react-redux'
import TransactionList from '../components/TransactionList'



const getTransactions=(transactions,filters,id)=>{
    console.log('getTransactions',filters,id)
    //let filters={'accountName':['Savings Account','Checking Account'],'transactionType':['deposit']}
    let res=transactions

    if(id){

        return res.filter(r=>{

            return r.account===id
        })
    }

    for( let key in filters){
        if(filters[key].length===0)continue
        let subres=[]

        console.log(key,'-----',filters[key])
        for(var i=0;i<filters[key].length;i++){

            subres=[...subres,...res.filter(t=>{

                return t[key]===filters[key][i]
            })]


        }
        res=[...subres]

    }
    console.log('res',res)
    return res
}

const mapStateToProps = (state,ownProps)=> {
    console.log('transactions-state',state,ownProps)
    if(ownProps.id){

        return {transactions: getTransactions(state.transactions.transactions, null,ownProps.id),detail:true,visible:true}
    }else{

        return {transactions: getTransactions(state.transactions.transactions, state.filters)}
    }

}

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// })

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(TransactionList)
