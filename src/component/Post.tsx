import React, { useEffect, useState } from "react";
import { Task } from "../App";

export interface IPropsPost {
    taskToSave: Task,
    TaskSaved: (savedTask: Task) => void;
}

const emptyTask: Task = {"title": "", "completed": false, "id": 0};

export default function Post(props: IPropsPost) {
    const [hin, setHin] = useState<Task>(props.taskToSave ?? emptyTask);
    
    useEffect(() => setHin(props.taskToSave), [props]);

    function onInputChangeP(event : React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setHin({...hin, [name]:value});
    }

    function onFormSend(event : React.FormEvent<HTMLButtonElement>) {
        event.preventDefault();
        props.TaskSaved(hin);
    }

    return (
        <form>
            <label>
                <p className="dick">Neuer Auftrag:</p>
                <input type="text" placeholder="Titel" id="title" name="title" onChange={onInputChangeP} className="inpu" required/>
            </label>
            <label>
                <button type="submit" value="Hinzufügen" id="hinz" onClick={onFormSend} className="green">Hinzufügen</button>
            </label>
        </form>
    )
}