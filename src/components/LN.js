import React, { Component } from 'react';

export default class LN extends Component
{
    constructor (props)
    {
        super(props)
    }
    render ()
    {
        const num=this.props.num;
        const breaks=[];
        for(var i=0;i<num;i++)
        {
        breaks.push(<br/>);
        }
        
        return (<div>
                {breaks}
                </div>);
    }
}