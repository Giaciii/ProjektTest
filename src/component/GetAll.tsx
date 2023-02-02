import { Task } from "../App";

const emptyTask: Task = {"title": "", "completed": false, "id": 0};

export interface IPropsGetAll {
    tasks: Task[];
    deleteTask: (task:Task) => void;
    editTask: (task:Task) => void;
}

export default function GetAll(props: IPropsGetAll) {
    return (
        <>  <table id="alle">
                {props.tasks.map((todo: Task) => (
                    <tr key={todo.id}><div className="divschoen">{todo.title}</div><button onClick={() => props.deleteTask(todo)} className="red">Delete</button><button onClick={() => props.editTask(todo)}>Edit</button></tr>
                ))}
            </table>
        </>
    )
}