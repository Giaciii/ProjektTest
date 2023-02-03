# ReactApp aufsetzten

Als erstes im Backend **vor** dem Start, den Port im **server.ts** file auf **3001** setzten, dies wird benötigt, um mit dem Frontend zu komunizieren. Wenn der Serverport geändert wurde, das Backend nach der Instellation von den Node Modules mit **npm run start** starten. Danach in den Ordner **Projekttest** navigieren, danach mit einer IDE/Console z.B. VSCode (habe ich benützt) oder Intellij öffnen. In der IDE mit der Console **npm i**, **npm run start**, dazu **npm install axios** wie auch **npm install react-router-dom** ausführen.

# Überprüfung

Ich habe das Projekt noch mit ESLint überprüft und habe so alles verbessert. Ich musste wegen dem State ein Warning und ein Error dulden, da ich diese Funktion und Variable global nutzten müsste, würde ich den Anmeldeschritt implementieren.

# Weitere Infos

## Testfälle

Ich habe die einzelnen Inputs überprüft, um herauszufinden, ob sie alles zulassen oder nur das Gewollte. Die Testergebnisse haben ergeben, dass man z.B. etwas einfügen muss, sonst kann es nicht abgeschickt werden. Weiter wurde auch bei der E-Mail überprüft, ob es überhaupt eine E-Mail ist, dies hat auch wundervoll funktioniert. Das Passwort muss auch stimmen, um sich einzuloggen.

# Git log

Der Git log ist hier zu finden: [Git log](./git.log).
