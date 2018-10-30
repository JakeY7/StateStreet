import React from 'react'
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boxes: props.initialState
        };
        this.actionType='SET_'+this.titleTransform( this.firstLetterToUpperCase(props.title),"_")
        this.actionType=this.actionType.toUpperCase()
        this.setFilters=props.setFilters

        console.log(' this.actionType', this.actionType.toUpperCase())

    }

    firstLetterToUpperCase(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    titleTransform(str,flag=" "){

        return str.match(/[A-Z][a-z]+|[0-9]+/g).join(flag)
    }

    boxesChanged = (newboxes) => {
        //console.log(props.setFilters)
        console.log('boxes',newboxes)
        this.setState({
            boxes: newboxes
        },()=>{
            this.setFilters(this.actionType,newboxes)

        });
    }
    render() {
        // the checkboxes can be arbitrarily deep. They will always be fetched and
        // attached the `name` attribute correctly. `value` is optional
        const {list,title}=this.props
        const CheckboxList=list.map((c,index)=>{

            return  <div key={index}>
                <Checkbox value={c} />
                {this.firstLetterToUpperCase(c)}</div>
        })
        return (

                <CheckboxGroup style={{marginBottom:'5px' }}
                    checkboxDepth={2} // This is needed to optimize the checkbox group
                    name="boxes"
                    value={this.state.boxes}
                    onChange={this.boxesChanged}>
                    <div style={{fontWeight:'800'}}>{this.titleTransform( this.firstLetterToUpperCase(title))}</div>
                    {CheckboxList}

                </CheckboxGroup>



        );
    }



};

export default Filter