import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Edit from './component/Edit';
import Get from './component/Get';
import GetAll from './component/GetAll';
import Login from './component/Login';
import Post from './component/Post';

const emptyTask: Task = {"title": "", "completed": false, "id":1};
const emptyLogin: Login = {"email": "", "password": "", "token":""};

export type Task = {
  id: number,
  title: string,
  completed: boolean;
}

export type Login {
  email: string,
  password: string,
  token: string;
}

function App() {
  const [task, setTask] = useState<Task[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<Task>(emptyTask);
  const [toLogin, setToLogin] = useState<Login>;

  useEffect(() => {
      loadData();
  }, []);

  function loadData() {
      axios.get<Task[]>("http://localhost:3001/tasks").then((response) => {
          setTask(response.data);
      });
  }

  function getTask(taskToGet: Task) {
    axios.get("http://localhost:3001/task/"+taskToGet.id).then(() => {
        loadData();
    });
  }

  function deleteTask(taskToDelete: Task) {
      axios.delete("http://localhost:3001/task/"+taskToDelete.id).then(() => {
          loadData();
      });
  }

  function saveTask(taskToSave : Task) {
    axios.post("http://localhost:3001/tasks", taskToSave).then(() => {
      loadData();
      setTaskToEdit(taskToSave);
      setTaskToEdit(emptyTask);
    });
  }

  function editTask(taskToEdit: Task) {
      axios.put("http://localhost:3001/tasks", taskToEdit).then(() => {
          loadData();
          setTaskToEdit(emptyTask);
      });
  }
  
  function taskEdit(task : Task) {
      setTaskToEdit(task);
  }
// <Get taskToGet={taskToEdit} getTask={getTask}/> ins HTML (funktioniert nicht)
  return (
    <div className="App">
        <Post taskToSave={taskToEdit} TaskSaved={saveTask}/>
        <GetAll tasks={task} deleteTask={deleteTask} editTask={taskEdit}/>
        <Edit taskToEdit={taskToEdit} taskEdited={editTask}/>
        <Login ToLogin={}/>
    </div>
  );
}

export default App;