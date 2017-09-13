import React, { Component } from 'react';
import Justify from './Justify';
import LN from './LN';

export default class Field extends Component
{
constructor(props)
{
    super(props);
}

    render()
    {
       
        return (
        <div>
             <Justify>
                <LN num= {0} />
                    <strong>{this.props.name}</strong>
                    <LN num= {1} />
                 <input type = "text" value = "" id = {this.props.id} /> 
                <LN num= {1} />
            </Justify>
          
        </div>);
    }
}