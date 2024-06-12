import React from "react";
import { useState, useEffect } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You Clicked ${count} Times`;
        console.log(`You Clicked ${count} Tinmes`);
    })
    return(
        <div>
            <p>You Clicked {count} Times</p>
            <h1>Count: {count}</h1>
            <button onClick = {() => setCount(count-1)}>-</button>
            <button onClick = {() => setCount(count + 1)}>+</button>
        </div>
    )
}