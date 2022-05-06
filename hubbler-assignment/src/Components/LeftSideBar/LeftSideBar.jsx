import './LeftSidebar.css'
import arrow from '../Images/arrow.png'
import MainPage from '../MainBodyPage/MainPage'


const LeftSideBar = () => {
  return (
    <>
      <div className="LeftSidebar">
     <div className='container'>
         
      <div>  <img  className='arrow1' src={arrow} alt="" />  </div>
      <div className='backtoStage'> <p >Back to Stages</p> </div>  
     </div>
    <MainPage/>
    </div>
    </>
  )
}

export default LeftSideBar
