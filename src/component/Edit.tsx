import axios from "axios";
import React, { useEffect, useState } from "react";
import { Task } from "../App";

export interface IProps  {
    taskToEdit: Task;
    taskEdited: (editedTask: Task) => void;
}

const emptyTask: Task = {"title": "", "completed": false, "id": 0};

export default function Edit(props: IProps) {
    const [formData, setFormData] = useState<Task>(props.taskToEdit ?? emptyTask);

    useEffect(() => setFormData(props.taskToEdit), [props]);

    function onChange(event : React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    function onFormSubmit(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.taskEdited(formData);
    }

    const update = () => {
        axios
    }

    return(
        <>
        <form>
            <label>
                Titel:
                <input type="text" placeholder="Titel" id="titel"/>
            </label>
            <label>
                Fertig?
                <input type="checkbox" />
            </label>
            <label>
                <input type="submit" value="Speichern" onClick={update}/>
            </label>
        </form>
        </>
    )
}