
import React, {useState} from 'react';
import Right from './Right.jsx'
import Func from './Func.jsx'
import Nav from './Nav.jsx';
import Main from './Main.jsx';
// import './codemirror.css'

import 'tachyons'
function App() {
  const [funcArray, setFunc] = useState([{functionName:'test', tests: ['should render an object']}])
  const [inputField, setInput] = useState('')
  const [inputTest, setTest] = useState('')

  const inputChange = (e)=>{
    setInput(e.target.value)
  }


  return(

    <div className = 'wrapper'>
      <Nav/>
      <Main funcArray = {funcArray} setFunc = {setFunc} setTest = {setTest} inputTest = {inputTest} setInput = {setInput} inputField = {inputField}/>
    </div>
      )
}

export default App
