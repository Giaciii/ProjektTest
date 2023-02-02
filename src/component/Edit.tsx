import axios from "axios";
import { Aufgaben } from "./Aufgaben";
import loadData from "./GetAll";

export default function Edit() {
    function editTask(taskToEdit: Aufgaben) {
        axios.put("http://localhost:3001/task/"+taskToEdit.id).then(() => {
            loadData();
        });
    }
}