import React from "react";

export class Bank extends React.Component{
  state = {
    statements: []
  }

  componentDidMount(){
    this.getBankStatements();
  }

  getBankStatements = _=>{
    fetch('http://localhost:4000/bankstatement')
      .then(response => response.json())
      .then(response => this.setState({ statements: response.data}))
      .catch(err => console.log(err))
  }

  renderTableData() {
      return this.state.statements.map((statement, index) => {
         const { bankname,bankaccount,creditlimit,availablecredit,accountbalance } = statement //destructuring
         return (
            <tr key={bankaccount}>
               <td>{bankname}</td>
               <td>{bankaccount}</td>
               <td>{creditlimit}</td>
               <td>{availablecredit}</td>
               <td>{accountbalance}</td>
            </tr>
         )
      })
   }

  render(){
    const {statements}= this.state;
    return(
      <div className="BankContent">
        <table>
        <tr>
          <th>Bank Name</th>
          <th>Bank account</th>
          <th>Credit limit</th>
          <th>Available credit</th>
          <th>Balance</th>
        </tr>
        <tbody>
          {this.renderTableData()}
        </tbody>
        </table>
      </div>
    );
  }
}

export default Bank;
