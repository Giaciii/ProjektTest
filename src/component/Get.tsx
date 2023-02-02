import React from "react";

export default function Get() {

    let data = '';
    
    function holen(e: React.FormEvent) {
        let dataDiv:any = document.getElementById('dataDiv') as HTMLElement;
        e.preventDefault();
        let getID = document.getElementById('getD') as HTMLInputElement;
        let valuegetID = getID.value; // Value von getD holen

        /*fetch(`http://localhost:3001/task/${valuegetID}`) // Fetchen
        .then((response) => response.json())
        .then((DataJson) => {
            data=DataJson;
            console.log(data); // Ausgabe des Einzelnen
            dataDiv.innerHTML = data;
        });*/

        fetch(`http://localhost:3001/task/${valuegetID}`) // Fetchen
        .then(function(response) {
            return response.json();
        })
        .then(function(DataJson) {
            data=DataJson;
            let dataA = [data];
            console.log(data); // Ausgabe des Einzelnen
            let i = JSON.stringify(dataA);
            const li = document.createElement('li');
            const node = document.createTextNode(i);
            li.appendChild(node);
            dataDiv.appendChild(li);
        });

    }

    return (
        <>
            <form method="get">
                <input type="text" name="getD" id="getD"/>
                <input type="submit" value="Holen" id="holen" onClick={holen}/>
                <ol id="dataDiv"></ol>
            </form>
        </>
    )
}