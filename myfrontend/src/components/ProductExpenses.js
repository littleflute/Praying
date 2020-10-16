import React from "react";

export class ProductExpenses extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      purchasedate: 0,
      seller: '',
      item: '',
      amount: 0,
      method: '',
      unitcost: 0,
      quantity: 0,
      unitprice: 0,
      receivedate: 0,
      deliverdate: 0
  };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleItem = this.handleItem.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
    this.handleSeller = this.handleSeller.bind(this);
    this.handleUCost = this.handleUCost.bind(this);
    this.handleUPrice = this.handleUPrice.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  loadProductStatements= _=>{
    alert('Successfully submitted form!');
    var url1=`http://localhost:4000/products/alter/?date=${this.state.purchasedate}&seller=${this.state.seller}&item=${this.state.item}&amount=${this.state.amount}`;
    var url2=`&method=${this.state.method}&unitcost=${this.state.unitcost}&quantity=${this.state.quantity}&unitprice=${this.state.unitprice}`;
    fetch(url1+url2)
      .then(response => response.json())
      .then(response => this.setState({ statements: response.data}))
      .catch(err => console.log(err))
  }

  handleSubmit(event) {
    this.loadProductStatements();
    window.location.reload(false);
    event.preventDefault();
  }

  render(){
    const ColoredLine = ({ color }) => (
      <hr
          style={{
              color: color,
              backgroundColor: color,
              height: 1
          }}
      />
    );

    return(
      <div>
      <h2>Product Expense Form</h2>
      <form className="formSubmit" onSubmit={this.handleSubmit}>
        <label>Purchase date</label>
        <input type="date" item={this.state.purchasedate} onChange={this.handleDate}/><br/><br/>
        <label>Seller</label>
        <input type="text" item={this.state.seller} onChange={this.handleSeller}/><br/><br/>
        <label>Item</label>
        <input type="text" item={this.state.item} onChange={this.handleItem}/><br/><br/>
        <label>Amount ($)</label>
        <input type="number" item={this.state.amount} onChange={this.handleAmount}/><br/><br/>
        <label>Method</label>
        <input type="text" item={this.state.method} onChange={this.handleMethod}/><br/><br/>
        <ColoredLine color="black" />
        <label>Unit Cost ($)</label>
        <input type="number" item={this.state.unitcost} onChange={this.handleUCost}/><br/><br/>
        <label>Quantity</label>
        <input type="number" item={this.state.quantity} onChange={this.handleQuantity}/><br/><br/>
        <label>Unit Price ($)</label>
        <input type="number" item={this.state.unitprice} onChange={this.handleUPrice}/><br/><br/>
        <input type="submit" value="Submit" />
      </form>
      <h4>Profit ($): <text>0</text></h4>
      </div>
    );
  }

  handleDate(event){
    this.setState({purchasedate: event.target.value});
  }

  handleSeller(event){
    this.setState({seller: event.target.value});
  }

  handleItem(event){
    this.setState({item: event.target.value});
  }

  handleAmount(event){
    this.setState({amount: event.target.value});
  }

  handleMethod(event){
    this.setState({method: event.target.value});
  }

  handleUCost(event){
    this.setState({unitcost: event.target.value});
  }

  handleQuantity(event){
    this.setState({quantity: event.target.value});
  }

  handleUPrice(event){
    this.setState({unitprice: event.target.value});
  }
}

export default ProductExpenses;
