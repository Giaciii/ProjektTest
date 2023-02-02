import React, { useEffect, useState } from "react";
import { Task } from "../App";

export interface IProps  {
    taskToEdit: Task,
    taskEdited: (editedTask: Task) => void;
}

const emptyTask: Task = {"title": "", "completed": false, "id": 0};

export default function Edit(props: IProps) {
    const [formData, setFormData] = useState<Task>(props.taskToEdit ?? emptyTask);

    useEffect(() => setFormData(props.taskToEdit), [props]);

    function onInputChange(event : React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
    }

    function onFormSubmit(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.taskEdited(formData);
    }

    return(
        <>
        <form onSubmit={onFormSubmit}>
            <label>
                <p className="dick">Titel:</p>
                <p className="zurzeit">Zurzeit: "{props.taskToEdit.title}"</p>
                <input type="text" name="title" id="titel" placeholder="Auftrag auswählen" value={formData.title} onChange={onInputChange} className="inpu"/>
            </label>
            <label>
                <button className="green">Speichern</button>
            </label>
        </form>
        </>
    )
}