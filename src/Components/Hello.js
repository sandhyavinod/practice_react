import React from 'react';
class Hello extends React.Component {
    constructor(props) {
      super(props);

    }
    render() {
      return (
          <div><Welcome name="sandhya"/></div>
      );
    }
  };

  class Welcome extends React.Component {
    constructor(props) {
      super(props);

    }
    render() {
      return (
          <div style={{color: "blue", fontSize: 40}}>

            <p>Hello,<strong>{this.props.name}!</strong></p>

          </div>
      );
    }
  };
  export default Hello;