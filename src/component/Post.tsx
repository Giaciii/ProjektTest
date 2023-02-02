import { useState } from "react"

export default function Post() {
    const [hin, setHin] = useState("");
    
    function hinzu(e: React.FormEvent) {
        e.preventDefault();
        let auf = document.getElementById('inTitle') as HTMLInputElement;
        let titleVal = auf.value;

        setHin(titleVal);

        let neuA = document.getElementById('neu') as HTMLElement;
        neuA.innerHTML = hin;
    }

    return (
        <>
            <form>
                <input type="text" placeholder="Titel" id="inTitle"/>
                <input type="submit" value="Hinzufügen" id="hinz" onClick={hinzu}/>
            </form>
            <div id="neu"></div>
        </>
    )
}