import React, { useEffect, useState } from 'react'
const Items = ({ elemValue, deleteTodo, senddata, todo , iTag }) => {
  let mouseover = (event) => {
    event.target.classList.add('fa-bounce')
    event.target.style.color = 'red'
  }
  let mouseout = (event) => {
    event.target.classList.remove('fa-bounce')
    event.target.style.color = 'black'

  }


  let check = (e) => {
    senddata(e)
  }

  return (
    <>
      <li className='list'><div className='check' onClick={check}>{iTag}
      </div>
        <p>{elemValue}</p>
        <i className="fa-solid fa-trash " onMouseOver={mouseover} onMouseOut={mouseout} onClick={deleteTodo}></i>
      </li>
    </>
  )
}

export default Items
