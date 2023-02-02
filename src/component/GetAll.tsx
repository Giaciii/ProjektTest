import React from "react";
import { Aufgaben } from "./Aufgaben";

export default function GetAll() {

    let all = '';
    
    function alle(e: React.FormEvent) {
        let alle = document.getElementById('alle') as HTMLElement;

        e.preventDefault();
        fetch('http://localhost:3001/tasks') // Alles Fetchen
        .then(function(response:any) {
            let data = response.json;
            console.log(data.id);
            return response.json(); // Json zurückbekommen
        })
        .then(function(AllDataJson:Aufgaben) {
            console.log(AllDataJson.id); // Ausgabe von allen
            //alle.innerHTML = all;
            alle.innerHTML = AllDataJson.title;
        });
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