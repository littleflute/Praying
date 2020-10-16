import React from "react";

export class Family extends React.Component{
  state = {
    statements: []
  }

  componentDidMount(){
    this.getFamilyStatements();
  }

  getFamilyStatements = _=>{
    fetch('http://localhost:4000/familystatements')
      .then(response => response.json())
      .then(response => this.setState({ statements: response.data}))
      .catch(err => console.log(err))
  }

  renderTableData() {
      return this.state.statements.map((statement, index) => {
         const { date,item,amount } = statement //destructuring
         return (
            <tr key={date}>
               <td>{date}</td>
               <td>{item}</td>
               <td>{amount}</td>
            </tr>
         )
      })
   }

  render(){
    const {statements}= this.state;
    return(
        <table>
        <tr>
          <th>Purchase date</th>
          <th>Item</th>
          <th>Amount ($)</th>
        </tr>
        <tbody>
          {this.renderTableData()}
        </tbody>
        </table>

    );
  }
}

export default Family;
