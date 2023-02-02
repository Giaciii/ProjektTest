import { Route, Routes } from 'react-router-dom';
import './App.css';
import Edit from './component/Edit';
import Get from './component/Get';
import GetAll from './component/GetAll';
import Post from './component/Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Get />
        <GetAll />
        <Post />
      </header>
    </div>
  );
}

export default App;