import React from 'react'

export default function Todos(props) {
    console.log(props)
    return (
        <div>
            <h2 onClick={() => props.toggleItem(props.item.id)}>{props.item.task}</h2>
            <h2>{props.item.id}</h2>
            <h2>{!props.item.completed ? "false" : "true"}</h2>
        </div>
    )
}

