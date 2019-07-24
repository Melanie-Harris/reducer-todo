import React from 'react'
import Todos from '../components/Todos'

export default function ListTodos(props) {
    console.log(props)
    return (
        <div>
            <ul>
                {props.task.map((item, i)=> {
                    return <Todos toggleItem={props.toggleItem} item={item} key={i}/>
                })}
            </ul>
            <button onClick={props.Clear} >Delete</button>
        </div>
    )
}

