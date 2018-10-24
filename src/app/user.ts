export class User {
    userId : number;
    creationDate : Date;
    name : string;

    constructor(values : Object = {}){
        Object.assign(this, values);
    }
}
