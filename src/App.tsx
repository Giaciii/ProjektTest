import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Edit from './component/Edit';
import Get from './component/Get';
import GetAll from './component/GetAll';

const emptyTask: Task = {"title": "", "completed": false, "id":1}

export type Task = {
  id: number,
  title: string,
  completed: boolean;
}

function App() {
  const [task, setTask] = useState<Task[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<Task>(emptyTask);

  useEffect(() => {
      loadData();
  }, []);

  function loadData() {
      axios.get<Task[]>("http://localhost:3001/tasks").then((response) => {
          setTask(response.data);
      });
  }

  function deleteTask(taskToDelete: Task) {
      axios.delete("http://localhost:3001/task/"+taskToDelete.id).then(() => {
          loadData();
      });
  }

  function editTask(taskToEdit: Task) {
      axios.put("http://localhost:3001/task/"+taskToEdit.id).then(() => {
          loadData();
      });
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Get />
        <GetAll tasks={task} deleteTask={deleteTask} editTask={editTask}/>
      </header>
    </div>
  );
}

export default App;