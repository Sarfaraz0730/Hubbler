import AnotherSection from '../AnotherSection/AnotherSection'
import './RightSide.css'

const RightBar = () => {
  return (
   
     <div className='rightsideDiv'> 
       <div className='d'> <h6>Default Rule</h6>
       
       <label >Button Name</label> <br />

       <input className='inputbox'  type="text" name="" id="" placeholder=' Create PO ' />

       <br /><br />
     <div className='flexselect'>
       <div>  <select name="" className='selectbox'>
         <option value="if All"> If All</option>
       </select> </div>
       <div className='condition'> <p>of the Condition are met : </p> </div>
       </div> 


       <br /><br />

       <div className='lotsOfButtonInaRow'>
          <div  className='condition' ><select  className='selectbox1' >
            <option value="Text"> Text </option>
          </select>
          </div>


          <div  className='condition' ><select  className='selectbox1' >
            <option value="Contains"> Contains </option>
          </select>
          </div>

          <div  className='urgentbtndiv'> <button className='urgentButton'>Urgent</button> </div>
          <div> <input   className='inputbox1'  type="text" name="" id=""  placeholder='type to search & add' />  </div>
          <div> <input   className='inputbox2'  type="text" name="" id=""  placeholder='add from List' />  </div>
          <div></div>
          <div></div>
       </div>

          <br />
    
     
      
          <div className='urgentbtndiv'> <button  className='urgentButton'>Add New Condition</button> </div>
       

         <br /><br />

         <AnotherSection/>

        </div>
     </div>
  
  )
}

export default RightBar
