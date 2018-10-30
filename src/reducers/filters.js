import { combineReducers } from 'redux'





const accountName = (state =['Savings Account'], action) => {
  switch (action.type) {

    case 'SET_ACCOUNT_NAME':

      return action.filters
    default:
      return state
  }
}

const transactionType = (state = ['deposit'], action) => {

    switch (action.type) {
        case 'SET_TRANSACTION_TYPE':
            return action.filters
        default:
            return state
    }
}

export default combineReducers({
    accountName,
    transactionType
})

