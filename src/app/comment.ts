import { User } from "./user";

export class Comment {
    commentId : Number;
    postId : Number;
    postDate : Date;
    content : string;
    user : User;
    
    constructor(values : Object = {}){
        Object.assign(this, values);
    }
}
