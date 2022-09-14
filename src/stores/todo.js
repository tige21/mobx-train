import { makeAutoObservable } from "mobx";

class Todo {
    
    items= [
        {
        id: 1,
        title: 'kek',
        body: "lol",
        complete: false
        },
        {
            id: 2,
            title: "Ivan",
            body: "kek",
            complete: false
        }
    ];
    constructor(){
        makeAutoObservable(this)
    }    

    itemsDel(id){
        this.items = this.items.filter(i => i.id !== id)

    }
    itemsCom(value){
        const v = value
        v =!v
        if (v){
            this.items.complete = 'complete'
        } else{
            this.items.complete = '';
        }

    }
    

}

export default new Todo();