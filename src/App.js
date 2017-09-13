import React, { Component } from 'react';
import Field from './components/Field';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Col, Button} from 'react-bootstrap';
     
class App extends Component {
  
  render() {
    return (
     <div>
       <form> 
       <Field name="Product Name" id= "product_name"/>
       <Field name="Product Type" id= "product_type"/> 
       <Field name="Product Quantity" id= "product_quantity"/>
       <center>
         <Button onClick={} bsSize="small" bsStyle="success">Add to List</Button>
       </center>
       </form> 
     </div>
    );
  }
}

export default App;
