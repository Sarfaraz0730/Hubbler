import { useState } from 'react'
import Todos from '../Todo/Todos'
import './MainPage.css'

const MainPage = () => {
    const [count, setCount] = useState(0)

    const countIncrement =()=>{
        setCount((count) => count+1)
        console.log("count", count)
        if(count >=5){
        
            return alert("You can't Add more than 5 rule")
        
            
        }
    }
  return (
    <div className="mainPage">
      <p>Rules { count}</p>



    

     
      <Todos/>
    </div>
  )
}

export default MainPage
