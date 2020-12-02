import React from "react";
const prayURL=`http://localhost:4000/`;

export class Prayers extends React.Component{
  state = {
    prayers: []
  }

  componentDidMount(){
    this.getPrayers();
  }

  getPrayers = _=>{
    fetch(prayURL + 'prayers',{
      method: 'GET'
    })
    .then(response => response.json())
    .then(response => this.setState({ prayers: response.data}))
    .catch(err => console.log(err))
  }

  displayDate(receivedate){
    if(receivedate===null || receivedate==='' || receivedate.length<=4) return " ";
    else return receivedate.substring(0,10);
  }

  renderTableData() {
      return this.state.prayers.map((statement, index) => {
         const { id,date,nevent,message } = statement //destructuring
         return (
            <tr key={id}>
               <td><p>{this.displayDate(`${date}`)}</p></td>
               <td>{nevent}</td>
               <td>{message}</td>
            </tr>
         )
      })
   }

  render(){
    return(
      <div>
        <table>
        <tr>
          <th>Date</th>
          <th>Event</th>
          <th>Message</th>
        </tr>
        <tbody>
          {this.renderTableData()}
        </tbody>
        </table>
      </div>
    );
  }
}

export default Prayers;
