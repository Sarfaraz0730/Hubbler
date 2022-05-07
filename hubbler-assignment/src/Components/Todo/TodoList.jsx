import { useDispatch, useSelector } from "react-redux"
import { addTodo, addTodoLoading, addTodoLoadingSuccess, getTodoLoading, getTodoLoadingSuccess } from "../../Redux/action"
import { useEffect, useState } from "react"
import axios from 'axios'
import './Todos.css'
import { FaToggleOn} from 'react-icons/fa';



const TodoList = ( {sarfaraz} ) => {
    const {loading, data, error} = useSelector((store) =>store.todos)
  return (
    <div>
       <div>
      
      {data.map((e)=>(<div key={e.id}  >
        {e.title} { e.status}  <FaToggleOn/>  </div>))}   </div>
 
    </div>
  )
}

export default TodoList








