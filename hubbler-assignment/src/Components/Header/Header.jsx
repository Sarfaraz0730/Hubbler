import './Header.css'
import headerLogo from "../Images/headerLogo.png"
import  arrowfor from "../Images/arrowfor.png"
import { useState } from 'react'

const Header = () => {
    const [date, setDate] = useState('')
    const dateChange =()=>{

      const showDate = new  Date()
      const Month = showDate.getDate() + "/" + showDate.getMonth() +"/"+ showDate.getFullYear() + "  "+ showDate.getHours() + " : " + showDate.getMinutes() 
      console.log( "Month is here",Month)
      
      const newdate = date+Month
      setDate(newdate)
 
    
    }
  return (
   
       <>
       <div className="HelloHeader">
            
       <div className="HelloHeader1">
       <div>     <img className='img'  src={headerLogo} alt="" />   </div>
       
       <div> <h5>Demo Custom App</h5>
           <p className='appname'> APP NAME </p>
       </div>
        <div  >  <img  className='img1' src= {arrowfor } alt="" />  </div>

        <div> <h5>Assessment</h5>
           <p className='appname'> STAGE </p>
       </div>
        <div  >  <img  className='img1' src= {arrowfor } alt="" />  </div>
        <div> <h5>Create PO </h5>
           <h9 className='appname'> BUTTON </h9>
       </div>
        <div  >  <img  className='img1' src= {arrowfor} alt="" />  </div>

        <div>  <h4 className='textbtn' >Button Rules</h4></div>
       
     
       </div>



       {/* time  */}
       <div><p className='date'>App Saved on   {date}  </p> </div>
       <div>   <button  onClick={dateChange}    className='button'>DONE</button> 
 
        </div>
         </div>
 
       </>
  )
}

export default Header
