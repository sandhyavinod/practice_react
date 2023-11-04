import React from 'react'
class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.handleChange=this.handleChange.bind(this);
       this.submitMessage=this.submitMessage.bind(this);
    }
    // Add handleChange() and submitMessage() methods here
  handleChange(e){
    this.setState({
    input:e.target.value,
    messages:this.state.messages
    });
  }
  submitMessage(){
  this.setState(state => ({
       input:'',
        messages: [...this.state.messages,this.state.input]
      }));
  }
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>

    <input type='text' value={this.state.input} onChange={this.handleChange}/>
  <button onClick={this.submitMessage}>Add message</button>
  <ul>{this.state.messages.map((x, i)=>{
              return <li key={i}>{x}</li>
            })}</ul>


        </div>
      );
    }
  };
  export default DisplayMessages;