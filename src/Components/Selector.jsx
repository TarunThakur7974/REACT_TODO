import React from 'react'
import { Link } from 'react-router-dom'

const Selector = () => {
    const select = (e) => {
        if (e.target.classList.contains('box')) {
            document.querySelectorAll('.box').forEach((elem) => {
                elem.style.textDecoration = 'none'
                // elem.style.backgroundColor = 'rgb(6, 6, 26)'
            })
            e.target.style.textDecoration = 'underline'
            // e.target.style.backgroundColor = 'rgb(27, 27, 95)'
        }
    }

    return (
        <>
            <div onClick={select} className="selector">
                <Link to="/"><div className="box" >All</div></Link>
                <Link to="/remain"><div className="box" >Remain</div></Link>
                <Link to="/completed"><div className="box" >Completed</div></Link>
            </div>
        </>
    )
}

export default Selector


    // < div className = "box" onClick = { boxOne } > All</ >
