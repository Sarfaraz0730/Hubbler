
import './App.css';
import Header from './Components/Header/Header';
import LeftSideBar from './Components/LeftSideBar/LeftSideBar';
import RightBar from './Components/RightSideBar/RightBar'



function App() {
  return (
    <div className='App'>
    
    
     <Header/>

     <div className ="mainBox"> 
     <LeftSideBar/>
  <RightBar/>
     </div>
    </div>
  );
}

export default App;
