import React from "react";
import "./componentscss.css";

class Products extends React.Component{
    state = {
      statements: []
    }

    componentDidMount(){
      this.getProductStatements();
    }

    getProductStatements = _=>{
      fetch('http://localhost:4000/productstatements')
        .then(response => response.json())
        .then(response => this.setState({ statements: response.data}))
        .catch(err => console.log(err))
    }

    renderTableData() {
        return this.state.statements.map((statement, index) => {
           const { id,purchasedate,seller,item,amount,method,unitcost,quantity,unitprice,profit,receivedate,deliverdate } = statement //destructuring
           return (
              <tr key={id}>
                <td>{id}</td>
                <td>{purchasedate}</td>
                <td>{seller}</td>
                <td>{item}</td>
                <td>{amount}</td>
                <td>{method}</td>
                <td>{unitcost}</td>
                <td>{quantity}</td>
                <td>{unitprice}</td>
                <td>{profit}</td>
                <td>{receivedate}</td>
                <td>{deliverdate}</td>
              </tr>
           )
        })
     }

    render(){

      return(
        <div>
        <table>
        <tr>
          <th>id</th>
          <th>Purchase Date</th>
          <th>Seller</th>
          <th class="headerSortDown">Item</th>
          <th class="headerSortUp">Amount ($)</th>
          <th>Method</th>
          <th>Unit Cost($)</th>
          <th>Quantity</th>
          <th>Unit Price($)</th>
          <th>Profit</th>
          <th>Receive Date</th>
          <th>Deliver Date</th>
        </tr>
        <tbody>
          {this.renderTableData()}
        </tbody>
        </table>

        </div>

      );
    }
}

export default Products;
