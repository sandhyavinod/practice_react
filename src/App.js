
import './App.css';
import Calendar from './Components/Calendar';
import ToDo from './Components/ToDo';
import Hello from './Components/Hello';
import ClickMe from './Components/ClickMe';
import Counter from './Components/Counter';
import Controller from './Components/Controller';
import CheckUserAge from './Components/CheckUserAge';
import GameOfChance from './Components/GameOfChance';
import DontTypeTooMuch from './Components/DontTypeTooMuch';
import MyToDoList from './Components/MyToDoList';
import Frameworks from './Components/Frameworks';
import UserOnline from './Components/UserOnline';

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
     <DontTypeTooMuch/>
     <MyToDoList/>
     <Frameworks/>
     <UserOnline/>
    </div>
  );
}

export default App;
