import { useEffect, useState } from "react";
import { Task } from "../App";

export interface IPropsLogin {
    ToLogin: Task,
    ToLogined: (LoginedTo: Task) => void;
}

export default function Login(props : IPropsLogin) {
    const [formData, setFormData] = useState<Task>();

    useEffect(() => setFormData(props.ToLogin), [props]);

    function onFormSubmit(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.ToLogined(formData);
    }

    return(
        <form onSubmit={onFormSubmit}>
            <p className="dick">Login</p>
            <label>
                Email:
                <input type="email" id="email" required className="inpu" placeholder="E-Mail" />
            </label>
            <label>
                Passwort:
                <input type="password" name="pas" id="pasword" className="inpu" required placeholder="Passwort"/>
            </label>
            <label>
                <input type="button" value="Abmelden" />
            </label>
        </form>
    );
}