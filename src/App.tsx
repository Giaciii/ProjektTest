import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Edit from './component/Edit';
import Get from './component/Get';
import GetAll from './component/GetAll';
import Post from './component/Post';

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

  function saveTask(taskToSave : Task) {
    axios.post("http://localhost:3001/task").then(() => {
      loadData();
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

  return (
    <div className="App">
      <header className="App-header">
        <Get />
        <Post tasksP={task} safeTaskP={taskToSave}/>
        <GetAll tasks={task} deleteTask={deleteTask} editTask={taskEdit}/>
        <Edit taskToEdit={taskToEdit} taskEdited={editTask}/>
      </header>
    </div>
  );
}

export default App;