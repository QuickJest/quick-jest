
import React, {useState} from 'react';
import Nav from './Nav.jsx';
import Main from './Main.jsx';
// import './codemirror.css'

import 'tachyons'
function App() {
  const [funcArray, setFunc] = useState([{functionName:'test', tests: ['should render an object']}])
  const [inputField, setInput] = useState('')

  const inputChange = (e)=>{
    setInput(e.target.value)
  }


  return(

    <div className = 'wrapper'>
      <Nav/>
      <Main funcArray = {funcArray} setFunc = {setFunc} setInput = {setInput} inputField = {inputField}/>
    </div>
      )
}

export default App
