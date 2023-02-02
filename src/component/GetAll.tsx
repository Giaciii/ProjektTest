import React, { useEffect, useState } from "react";
import { Aufgaben } from "./Aufgaben";
import editTask from "./Edit";
import axios from 'axios';

const emptyTask: Aufgaben = {"title": "", "completed": false, "id": 0};

export default function GetAll() {
    const [task, setTask] = useState<Aufgaben[]>([]);

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

    return (
        <>
            <form method="get">
                <input type="submit" value="Holen" id="holen"/>
            </form>
            <ol id="alle">
                {task.map((todo: Aufgaben) => (
                    <li key={todo.id}>{todo.title}<button onClick={() => deleteTask(todo)}>Delete</button><button onClick={() => editTask}>Edit</button></li>
                ))}
            </ol>
        </>
    )
}