import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Login } from "../App";
import { UserCon } from "./State/State";

const emptyLogin: Login = { "email": "", "password": "" };


export default function LoginF() {
    const { Auth, setAuth } = useContext(UserCon);

    function toLogin(login: Login) {
        axios.post("http://localhost:3001/auth/jwt/sign", login, {
            headers: {
                Authorization: `Bearer ${Auth}` //Mithilfe von L
            }
        })
            .then((res) => {
                setAuth(res.data.token)
            })
            .catch(err => {
                if (err.response.status == 400) {
                    alert(JSON.stringify(err.response.data))
                } else {
                    alert(err.message)
                }
            })
    }

    function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let data = Object.fromEntries(new FormData(document.getElementById('formLogin') as HTMLFormElement));
        toLogin(data as Login);
    }

    return (
        <form onSubmit={onFormSubmit} id="formLogin">
            {Auth ? 'Angemeldet' : 'Abgemeldet'}
            <p className="dick">Login</p>
            <label>
                Email:
                <input type="email" id="email" name="email" className="inpu" placeholder="E-Mail" required />
            </label>
            <label>
                Passwort:
                <input type="password" name="password" id="pasword" className="inpu" required placeholder="Passwort" />
            </label>
            <label>
                <button type="submit" value="Anmelden" className="green">Anmelden</button>
            </label>
        </form>
    );
}