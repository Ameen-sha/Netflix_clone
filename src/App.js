import React from 'react'
import NavBar from './components/NavBar/NavBar'
import {Action,orginal} from './urls'
import"./App.css";
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';


function App() {
  return (
    <div className='App'>
      
     <NavBar/>
     <Banner/>
     <Rowpost url={orginal} title="Netfilx orgianle"/>
     <Rowpost url={Action}title="Action"isSmall/>
    </div>
  )
}

export default App
