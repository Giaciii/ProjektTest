import axios from "axios";
import { useState } from "react";
import { Aufgaben } from "./Aufgaben";
import loadData from "./GetAll";

const emptyTask: Aufgaben = {"title": "", "completed": false, "id": 0};

export default function Edit() {
    const [taskToEdit, setTaskToEdit] = useState<Aufgaben>(emptyTask);

    function update() {
        axios.put("http://localhost:3001/task/"+taskToEdit.id).then(() => {
            loadData();
        });
    }
    return(
        <>
        <form>
            <label>
                Titel:
                <input type="text" placeholder="Titel"/>
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