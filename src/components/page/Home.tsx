import { Task } from "../../App";
import App from "../../App";

export interface IPropsGetAll {
    tasks: Task[];
    deleteTask: (task: Task) => void;
    editTask: (task: Task) => void;
}

export default function Home() {
    return (
        <>
            <div>Hallo</div>
            <App />
        </>
    )
}