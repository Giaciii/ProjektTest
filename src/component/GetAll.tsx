import React, { useEffect, useState } from "react";
import { Aufgaben } from "./Aufgaben";
import axios from 'axios';

const emptyTask: Aufgaben = {"title": "", "completed": false, "id": 0};

export type IProps = {
    editTask: Aufgaben;
}

export default function GetAll() {
    const [task, setTask] = useState<Aufgaben[]>([]);
    const [taskToEdit, setTaskToEdit] = useState<Aufgaben>(emptyTask);

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        axios.get<Aufgaben[]>("http://localhost:3001/tasks").then((response) => {
            setTask(response.data);
        });
    }

    function deleteTask(taskToDelete: Aufgaben) {
        axios.delete("http://localhost:3001/task/"+taskToDelete.id).then(() => {
            loadData();
        });
    }

    function editTask(taskToEdit: Aufgaben) {

    }

    return (
        <>  <ol id="alle">
                {task.map((todo: Aufgaben) => (
                    <li key={todo.id}>{todo.title}<button onClick={() => deleteTask(todo)}>Delete</button><button onClick={() => editTask}>Edit</button></li>
                ))}
            </ol>
        </>
    )
}