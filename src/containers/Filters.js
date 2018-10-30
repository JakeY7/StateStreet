import React from 'react'

import connect from "react-redux/es/connect/connect";

import FilterList from "../components/FilterList";
import {setFilters} from '../actions'


// export default Filters
const mapStateToProps = state => ({
    defaultFilters:state.transactions.defaultFilters,
    filters: state.filters
})

const mapDispatchToProps = dispatch => ({
    setFilters: (type,filters) => dispatch(setFilters(type,filters))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterList)

