import React, { useEffect, useState } from "react";
import { Task } from "../App";

export interface IPropsPost {
    taskToSave: Task,
    TaskSaved: (savedTask: Task) => void;
}

export default function Post(props: IPropsPost) {
    const [hin, setHin] = useState<Task>(props.taskToSave);
    
    useEffect(() => setHin(props.taskToSave), [props]);

    function onFormSend(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.TaskSaved(hin);
    }
    return (
        <form onSubmit={onFormSend}>
            <input type="text" placeholder="Titel" id="inTitle"/>
            <input type="submit" value="Hinzufügen" id="hinz"/>
        </form>
    )
}