import { Task } from "../App";

const emptyTask: Task = {"title": "", "completed": false, "id": 0};

export interface IPropsGetAll {
    tasks: Task[];
    deleteTask: (task:Task) => void;
    editTask: (task:Task) => void;
}

export default function GetAll(props: IPropsGetAll) {
    return (
        <>  <ol id="alle">
                {props.tasks.map((todo: Task) => (
                    <li key={todo.id}>{todo.title}<button onClick={() => props.deleteTask(todo)}>Delete</button><button onClick={() => props.editTask(todo)}>Edit</button></li>
                ))}
            </ol>
        </>
    )
}