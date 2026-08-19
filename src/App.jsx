
import Navbar from './components/Navbar'
import './components/style.css'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'

import Addnewdoctor from './components/Addnewdoctor'
import Home from './components/Home'
function App() {
  // let count=0;
  // let[count,setCount]=useState(0)
  return (
    <div> 
      {/* {count}
     <button onClick={()=>setCount(count+1)}>click</button> */}
      <Navbar/>
      <Section/>
      <div className='doctorcontainer'>
      <Doctorcard name='john' specialization='Hearts spectionalization' gender='male' />
      <Doctorcard name='madhu' specialization='neuro spectialist' gender='male'/>
      <Doctorcard name='shiva' specialization='bones spectialist' gender='female' />
      <Doctorcard name='mani' specialization='dental spectialist' gender='female'/>
  
      </div>
     
      <Addnewdoctor/>
     <Home/>
    </div>
  )
}

export default App