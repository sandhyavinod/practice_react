
import './App.css';
import Calendar from './Components/Calendar';
import ToDo from './Components/ToDo';
import Hello from './Components/Hello';
import ClickMe from './Components/ClickMe';
import Counter from './Components/Counter';

function App() {
  return (
    <div>
     <Hello/>
    <Calendar/>
    <ClickMe/>
    <Counter/>
      <ToDo/>
    </div>
  );
}

export default App;
