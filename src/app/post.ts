import { User } from "./user";

export class Post {
    postId:number;
    content:string;
    postDate:Date;
    user : User;
    comments : Comment[];

    constructor(values: Object = {}){
        Object.assign(this,values);
    }
}
