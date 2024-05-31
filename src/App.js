import './App.css';
import FuncComp from './components/FuncComp';
import ClassComp from './components/ClassComp';
function App() {
  return (
    <div className="App">
      <FuncComp 
      name = "Richie"
      professsion="student"
      age="21"/>
      <ClassComp/>
    </div>
  );
}

export default App;
