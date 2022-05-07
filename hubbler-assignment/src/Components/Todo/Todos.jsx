import { useDispatch, useSelector } from "react-redux"
import { addTodo, addTodoLoading, addTodoLoadingSuccess, getTodoLoading, getTodoLoadingSuccess } from "../../Redux/action"
import { useEffect, useState } from "react"
import axios from 'axios'
import './Todos.css'
import { FaToggleOn} from 'react-icons/fa';


const Todos = () => {


 
    const {loading, data, error} = useSelector((store) =>store.todos)

    const disptach = useDispatch()
    var todoss=0

    const [text, setText] = useState("")

     useEffect(()=>{
       getTodos()
     },[])

     const getTodos =()=>{
       disptach(getTodoLoading())
      axios.get("http://localhost:3001/todos")
      .then(({data})=>{
        disptach(getTodoLoadingSuccess(data))
      })
     }
 


    console.log("Re-Rendered Todos", todoss + 1)
    console.log("hey i am todos array" , data)
  return  loading ? "Loading...": (
    <div>
   <hr />
   
   <input onChange={ (e) => setText(e.target.value)}       type="text"  placeholder=" Default Rule"  required  className="inputbox"  />
   <br />
   <button  className="urgentButton"  onClick={() =>{
      //  disptach(addTodo({id:Date.now(),title:text, status:false}))
         disptach(addTodoLoading())
         

      axios.post("http://localhost:3001/todos", {
      
        title:text,
        status:false
      }).then((data)=>{
        disptach(addTodoLoadingSuccess(data))
        getTodos()
      }).catch((err)=>{
        console.log(err)
      });

       
   }} >Add New Rule</button>
   <br /><br />


    <div>
      
      {data.map((e)=>(<div key={e.id}  >
        {e.title} { e.status}  <FaToggleOn/>  </div>))}   </div>
    </div>
  )
}

export default Todos
