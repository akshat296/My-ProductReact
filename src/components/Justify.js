import React, { Component } from 'react';


export default class Jusify extends Component
{
    constructor(props)
    {
        super(props);
        const Children = this.props.children
    }    

    render()
    {
        const children = React.Children.toArray(this.props.children);
        return ( 
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                  {children}
                </div>
                <div className="col-lg-8">
                  {children[7]}
                </div>
            </div>
          
        </div>);
    }

}