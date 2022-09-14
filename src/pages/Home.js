import React from "react";
import todo from "../stores/todo";
import { observer } from "mobx-react-lite";
const Home = observer(() =>  {
    return(
        <div className="container">
            {
                todo.items.map(t => {
                    return (
                        <div className="item" key={t.id}>
                            <h1>{t.title}</h1>
                            <h1>{todo.items.length}</h1>
                            <button onClick={() => todo.itemsDel()}>-</button>
                            <input type="checkbox" checked={t.complete} onClick={(e) => todo.itemsCom(e.target.value)}></input>
                        </div> 

                    );

                })
            }           
        </div>
    );


})

export default Home;