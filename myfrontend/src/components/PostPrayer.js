import React from "react";
const prayURL=`http://localhost:4000/`;

export class FamilyExpenses extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      nevent: '',
      date: 0,
      message: ''
    };

    this.handleNEvent = this.handleNEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  uploadPrayers= _=>{
    alert('Successfully submitted form!');
    var url=prayURL + `prayers/?date=${this.state.date}&nevent=${this.state.nevent}&message=${this.state.message}`;
    fetch(url,{
      method: 'POST'
    })
    .then(response => response.json())
    .catch(err => console.log(err))
  }

  handleSubmit(event) {
    this.uploadPrayers();
    window.location.reload(false);
    event.preventDefault();
  }

  render(){
    return(
      <div>
      <h2>PRAYER</h2>
      <form className="formSubmit" onSubmit={this.handleSubmit}>
        <label>When this event happened</label>
        <input type="date" name="date"  nevent={this.state.date} onChange={this.handleDate}/><br/><br/>
        <label>Event</label>
        <input type="text" name="nevent" nevent={this.state.nevent} onChange={this.handleNEvent}/><br/><br/>
        <label>Message</label>
        <input type="text"  name="message" nevent={this.state.message} onChange={this.handleMessage}/><br/><br/>
        <input type="submit" nevent="Submit" /><br/><br/>
      </form>
      </div>
    );
  }

  handleNEvent(event) {
    this.setState({nevent: event.target.value});
  }

  handleMessage(event) {
    this.setState({message: event.target.value});
  }

  handleDate(event){
    this.setState({date: event.target.value});
  }

}



export default FamilyExpenses;
