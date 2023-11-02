
import './App.css';
import Calendar from './Components/Calendar';
import ToDo from './Components/ToDo';
import Hello from './Components/Hello';
import ClickMe from './Components/ClickMe';
import Counter from './Components/Counter';
import Controller from './Components/Controller';
import CheckUserAge from './Components/CheckUserAge';
import GameOfChance from './Components/GameOfChance';

function App() {
  return (
    <div>
     <Hello/>
    <Calendar/>
    <ClickMe/>
    <Counter/>
      <ToDo/>
      <Controller/>
      <CheckUserAge/>
     <GameOfChance/>
    </div>
  );
}

export default App;
