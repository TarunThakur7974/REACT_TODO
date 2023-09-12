import React, { useState } from 'react'
import Items from '../Items'

const Completed = ({ todo, deleteTodo ,manageCheck }) => {
    // let [iTag, setiTag] = useState(<i className="fa-solid fa-check"></i>)
    let handleClick = (i) => {
        deleteTodo(i)
    }
    const senddata = (e) => {
        manageCheck(e);
    };
    return (
        <>
            <ul className="dataDiv">
                {todo.length === 0 ? <><h1 style={{marginTop:"50px"}}>There is no completed TODO</h1></> :
                todo.map((elemValue) => (
                    <Items iTag={elemValue.bool ? <i className="fa-solid fa-check"></i> : ""} key={elemValue.id} elemValue={elemValue.text} senddata={() => { senddata(elemValue) }} deleteTodo={() => handleClick(elemValue.id)} />
                ))}
            </ul>
        </>
    )
}

export default Completed