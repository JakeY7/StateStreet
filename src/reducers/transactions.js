
import ts from '../data/data.json'
const initialState={

  transactions:ts.transactions,
    defaultFilters:{
        'accountName':['Savings Account','Checking Account','Auto Loan Account',
            'Credit Card Account','Investment Account','Personal Load Account',
            'Money Market Account','Home Loan Account'
        ],
        'transactionType':['deposit','withdrawal','invoice','payment']


    }
}
const transactions = (state = initialState, action) => {
  return state
}

export default transactions
