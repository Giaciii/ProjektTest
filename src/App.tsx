import './App.css';
import Edit from './component/Edit';
import Get from './component/Get';
import GetAll from './component/GetAll';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Get />
        <GetAll />
        <Edit />
      </header>
    </div>
  );
}

export default App;