import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import Items from './Items'
import Selector from './Selector';
import Remain from './SelectorComponent/Remain';
import Completed from './SelectorComponent/Completed';
import All from './SelectorComponent/All';
// import App from '../App';

const Todo = () => {

  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([])
  const [data, setData] = useState([]);
  const [remains, setRemains] = useState([])
  const [completed, setCompleted] = useState([])

  // useEffect(() => {
  //   let getData = localStorage.getItem('todo');
  //   if (getData === null) {
  //     let jsonString = JSON.stringify([]);
  //     localStorage.setItem('todo', jsonString)
  //   } else
  //     getData = JSON.parse(getData)
  //   setTodo(getData)
  //   let jsonString = JSON.stringify(todo);
  //   localStorage.setItem('todo', jsonString)

  // }, [data])


  const save = (e) => {
    e.preventDefault();
    let getData = localStorage.getItem('todo');
    getData = JSON.parse(getData)
    setTodo(getData)
    // console.log(todo)
    // let jsonString = JSON.stringify(todo);
    // localStorage.setItem('todo', jsonString)
    setTodo([...todo, { id: crypto.randomUUID(), text: value, bool: false }]);
    setValue('')
    setData(todo);
    console.log(data , "ima data")
  }


  let deleteTodo = (id) => {
    // todo.splice(i, 1)
    // setTodo([...todo])
    // remains.splice(i, 1)
    // setRemains([...remains])
    setTodo(
      todo.filter((todo) => {
        if (todo.id !== id) {
          return true;
        }
      })
    )
    setCompleted(
      completed.filter((completed) => {
        if (completed.id !== id) {
          return true;
        }
      })
    )
    setRemains(
      remains.filter((remains) => {
        if (remains.id !== id) {
          return true;
        }
      })
    )
  }

  useEffect(() => {
    setCompleted(todo.filter((item) => {
      if (item.bool) {
        return { ...item }
      } else {
        return
      }
    }))

    setRemains(todo.filter((item) => {
      if (!item.bool) {
        return { ...item }
      }
    }))

  }, [todo])

  let manageCheck = (e) => {
    setTodo(todo.map((item) => {
      if (e.id === item.id && e.bool === false) {
        return {
          ...item,
          bool: true
        }
      }
      else if (e.id === item.id && e.bool === true) {
        return {
          ...item,
          bool: false
        }
      }
      else {
        return item
      }
    }))
  }

  return (
    <>
      <div className="mainCountainer">
        <form className='form' onSubmit={(e) => save(e)} >
          <input
            type="text"
            value={value}
            placeholder='Enter here...'
            required
            onChange={(e) => {
              setValue(e.target.value);
            }} />
          <button type='submit'>Save</button>
        </form>
        <BrowserRouter>
          <Selector />
          <Routes>
            <Route path="/" element={<All todo={todo} manageCheck={manageCheck} deleteTodo={(i) => deleteTodo(i)} />} />
            <Route path="/remain" element={<Remain manageCheck={manageCheck} todo={remains} deleteTodo={(i) => deleteTodo(i)} />} />
            <Route path="/completed" element={<Completed todo={completed} manageCheck={manageCheck} deleteTodo={(i) => deleteTodo(i)} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}


export default Todo

