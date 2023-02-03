import { useEffect, useState } from "react";
import { Login } from "../App";

const emptyLogin: Login = {"email": "", "password": "", "token":""};

export interface IPropsLogin {
    login: Login,
    ToLogined: (LoginedTo: Login) => void;
}

export default function LoginF(props : IPropsLogin) {
    const [formData, setFormData] = useState<Login>(props.login ?? emptyLogin);

    useEffect(() => setFormData(props.login), [props]);

    function onInputChange(event : React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
    }

    function onFormSubmit(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.ToLogined(formData);
    }

    return(
        <form onSubmit={onFormSubmit}>
            <p className="dick">Login</p>
            <label>
                Email:
                <input type="email" id="email" required className="inpu" placeholder="E-Mail" onChange={onInputChange}/>
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