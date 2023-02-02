export class Aufgaben {
    id:number;
    title:String;
    completed:boolean;

    constructor(id:number, title:String, completed:boolean) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}