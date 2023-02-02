import { useState } from "react"
import { Task } from "../App";

export interface IPropsPost {
    tasksP: Task[];
    saveTaskP: (task:Task) => void;
}

export default function Post() {
    const [hin, setHin] = useState("");
    
    function onFormSend() {

    }

    return (
        <form onSubmit={onFormSend}>
            <input type="text" placeholder="Titel" id="inTitle"/>
            <input type="submit" value="Hinzufügen" id="hinz"/>
        </form>
    )
}