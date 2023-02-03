import { TaskA } from "../../App";

export interface IPropsGetAll {
    tasksA: TaskA[];
    deleteTaskA: (task: TaskA) => void;
    editTaskA: (task: TaskA) => void;
}

export default function Home(props: IPropsGetAll) {
    return (
        <table id="alle">
            <p className="dick">Angemeldet</p>
            <tbody>
                {props.tasksA.map((todo: TaskA) => (
                    <tr key={todo.id}><td><div className="divschoen">{todo.title}</div></td><td><button onClick={() => props.deleteTaskA(todo)} className="red">Delete</button></td><td><button onClick={() => props.editTaskA(todo)}>Edit</button></td></tr>
                ))}
            </tbody>
        </table>
    )
}