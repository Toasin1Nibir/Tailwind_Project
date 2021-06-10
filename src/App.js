
import './index.css';
import Navbar from './Components/Navbar'
import Dropdown from './Components/Dropdown';
import {useState} from 'react';
import Content from './Components/Content';
import Dishes from './Components/Dishes';
import Footer from './Components/Footer';

function App() {
    const [isOpen,setIsopen] = useState(false)
    const toggle =()=>{
      setIsopen(!isOpen)
    }
    return (
    <div className='bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 '>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Content></Content>
      <Dishes/>
      <Footer/>
     
    </div>
  );
}

export default App;
