import React from 'react'

import Filter from "./Filter";
class FilterList extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        console.log('FilterList',this.props)
        // the checkboxes can be arbitrarily deep. They will always be fetched and
        // attached the `name` attribute correctly. `value` is optional
        const {defaultFilters,filters,setFilters}=this.props
        console.log('defaultFilters',defaultFilters)

       const  filterList =Object.keys(defaultFilters).map((k,index)=>{

            return <Filter key={index} setFilters={setFilters}initialState={filters[k]} list={defaultFilters[k]} title={k} />
        })


        return (<div className="col-3" style={{background:'rgb(237, 237, 237)'}} >
                <h5 style={{fontWeight:'800'}}>Filters</h5>
            {filterList}

            </div>

        )
    }



}

export default FilterList