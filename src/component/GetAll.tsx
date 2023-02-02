import React, { useEffect, useState } from "react";
import { Aufgaben } from "./Aufgaben";
import axios from 'axios';

export default function GetAll() {
    const [task, setTask] = useState<Aufgaben[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        axios.get<Aufgaben[]>('http://localhost:3001/tasks').then((response) => {
            setTask(response.data);
        });
    }

    function deleteTask(taskToDelete: Aufgaben) {
        axios.delete("http://localhost:3001/task/"+taskToDelete.id).then(() => {
            
        });
    
    }

    return (
        <>
            <form method="get">
                <input type="submit" value="Holen" id="holen"/>
            </form>
            <ol id="alle">
                {task.map((todo: Aufgaben) => (
                    <li>{todo.title} <button onClick={() => deleteTask(todo)}>Delete</button></li>
                ))}
            </ol>
        </>
    )
}