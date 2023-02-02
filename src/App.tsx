import './App.css';
import Edit from './component/Edit';
import Get from './component/Get';
import GetAll from './component/GetAll';

const emptyTask: Task = {"title": "", "completed": false, "id":1}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Get />
        <GetAll />
      </header>
    </div>
  );
}

export default App;