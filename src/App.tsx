import axios from 'axios';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Edit from './components/Edit';
import GetAll from './components/GetAll';
import Login from './components/LoginF';
import Home from './components/page/Home';
import Post from './components/Post';
import Error from './components/page/Error';
import { UserCon } from './components/State/State';


const emptyTask: Task = { "title": "", "completed": false, "id": 1 };

export type Task = {
  id: number,
  title: string,
  completed: boolean;
}

export type TaskA = {
  id: number,
  title: string,
  completed: boolean;
}

export type Login = {
  email: string,
  password: string;
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

  /*
  function getTask(taskToGet: Task) {
    axios.get("http://localhost:3001/task/" + taskToGet.id).then(() => {
      loadData();
    });
  }*/

  function deleteTask(taskToDelete: Task) {
    axios.delete("http://localhost:3001/task/" + taskToDelete.id).then(() => {
      loadData();
    });
  }

  function saveTask(taskToSave: Task) {
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

  function taskEdit(task: Task) {
    setTaskToEdit(task);
  }

  //Angemeldet
  function deleteTaskA(taskToDeleteA: TaskA) {
    axios.delete("http://localhost:3001/auth/jwt/task/" + taskToDeleteA.id).then(() => {
      loadData();
    });
  }
/* Erweiterung für Anmeldung
  function editTaskA(taskToEditA: TaskA) {
    axios.put("http://localhost:3001/tasks", taskToEditA).then(() => {
      loadData();
      setTaskToEdit(emptyTask);
    });
  }

  function taskEditA(task: TaskA) {
    setTaskToEdit(task);
  }*/

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div><a href='/user'>Login</a>
        <Post taskToSave={taskToEdit} TaskSaved={saveTask} /> 
        <GetAll tasks={task} deleteTask={deleteTask} editTask={taskEdit} />
        <Edit taskToEdit={taskToEdit} taskEdited={editTask} />
      </div>,
      errorElement: <Error />
    },
    {
      path: "/user",
      element: <Login />,
      errorElement: <Error />
    },
    {
      path: "/home",
      element: <Home tasksA={task} deleteTaskA={deleteTaskA} editTaskA={taskEdit}/>,
      errorElement: <Error />
    }
  ]);

  const [Auth, setAuth] = useState<string | null>(null);
  const setAuthS = (Auth: string | null) => {
    setAuth(Auth);
  }
  // <Get taskToGet={taskToEdit} getTask={getTask}/> ins HTML (funktioniert nicht)
  return (
    <UserCon.Provider value={{ Auth: Auth, setAuth: setAuthS }}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </UserCon.Provider>
  );
}

export default App;