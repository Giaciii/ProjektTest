import axios from "axios";
import { useState } from "react";
import { Aufgaben } from "./Aufgaben";
import loadData from "./GetAll";

const emptyTask: Aufgaben = {"title": "", "completed": false, "id": 0};

export default function Edit() {
    const [taskToEdit, setTaskToEdit] = useState<Aufgaben>(emptyTask);
    
    function editTask(taskToEdit: Aufgaben) {
        axios.put("http://localhost:3001/task/"+taskToEdit.id).then(() => {
            loadData();
            
        });
    }
    return(
        <>
            <div>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
        </>
    )
}