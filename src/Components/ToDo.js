import React from 'react';
const List = (props) => {

    return <p>{props.tasks.join(',')}</p>

  }
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>

          <List tasks={["workout","submit assignment,attempt module1 test"]}/>
          <h2>Tomorrow</h2>
          <List tasks={["workout,attempt module2 test","practice code challenge","project printouts to be taken"]}/>

        </div>
      );
    }
  }
  export default ToDo;


