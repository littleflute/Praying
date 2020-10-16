import React from "react";
const { URLSearchParams } = require('url');

export class FamilyExpenses extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      date: 0,
      amount: 0,
      method: ''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
  }

  loadBankStatements= _=>{
    alert('Successfully submitted form!');
    var url=`http://localhost:4000/bankstatement/alter/?date=${this.state.date}&item=${this.state.item}&amount=${this.state.amount}&method=${this.state.method}`;
    //api

    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({ statements: response.data}))
      .catch(err => console.log(err))
  }

  handleSubmit(event) {
    this.loadBankStatements();
    window.location.reload(false);
    event.preventDefault();
  }

  render(){
    return(//html
      <div>
      <h2>Family Expense Form</h2>
      <form className="formSubmit" onSubmit={this.handleSubmit}>
        <label>Purchase date</label>
        <input type="date" name="date"  item={this.state.date} onChange={this.handleDate}/><br/><br/>
        <label>Item</label>
        <input type="text" name="item" item={this.state.item} onChange={this.handleChange}/><br/><br/>
        <label>Amount ($)</label>
        <input type="number" name="amount" item={this.state.amount} onChange={this.handleAmount}/><br/><br/>
        <label>Method</label>
        <input type="text"  name="method" item={this.state.method} onChange={this.handleMethod}/><br/><br/>
        <input type="submit" item="Submit" />
      </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({item: event.target.value});
  }

  handleMethod(event) {
    this.setState({method: event.target.value});
  }

  handleAmount(event) {
    this.setState({amount: event.target.value});
  }

  handleDate(event){
    this.setState({date: event.target.value});
  }


}



export default FamilyExpenses;
