import React, { useEffect, useState } from "react";
import { Aufgaben } from "./Aufgaben";
import axios from 'axios';

export default function GetAll() {

    let all = '';
    
    function alle(e: React.FormEvent) {
        let alle = document.getElementById('alle') as HTMLElement;
        const [tasks, setTasks]=useState([]);

        e.preventDefault();
        /*
        fetch('http://localhost:3001/tasks') // Alles Fetchen
        .then(function(response) {
            return response.json(); // Json zurückbekommen
        })
        .then(function(AllDataJson:Aufgaben) {
            console.log(AllDataJson); // Ausgabe von allen
            //alle.innerHTML = all;
            alle.innerHTML = AllDataJson.title;
        });*/

        const fetchData = () => {
        return axios.get('localhost:3001/tasks').then((response) => setTasks(response.data));
        }
        useEffect(() => {
            fetchData();
        },[]);
    }
    return (
        <>
            <form method="get">
                <input type="submit" value="Holen" id="holen" onClick={alle}/>
            </form>
            <ol id="alle">
            </ol>
        </>
    )
}