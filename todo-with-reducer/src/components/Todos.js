import React from 'react'

export default function Todos(props) {
    console.log(props)
    return (
        <div>
            {/* <p>id: {props.item.id}</p> */}
            <div className={props.item.completed ? 'styling' : ''} onClick={() => props.toggleItem(props.item.id)}>{props.item.task}</div>
            <div >{!props.item.completed ? "(need to do)" : "(done!)"}</div>
            <br></br>
        </div>
    )
}

