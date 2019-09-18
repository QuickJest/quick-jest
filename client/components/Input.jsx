import React from 'react';
import Func from './Func.jsx'

export default function Input(props) {
  const { funcArray, setFunc, inputField, setInput } = props
  
   let newFuncList = funcArray.map((el,index) => {
    return <Func key={el.functionName + index} index={index} functions={funcArray} 
    setFunc={setFunc} name={el.functionName} tests={el.tests} id={index}
    />
  })

  return(
    <div className = 'input-area'>
      <div id = 'add-func'>
        <input value = {inputField} placeholder={'Your function name..'} type = 'text' id = 'input-func-area' onChange = {(e)=>setInput(e.target.value)}>
        </input>
        <button id = 'add-function-btn' onClick = {()=>{
          const copyOfFuncArray = [...funcArray];
          copyOfFuncArray.push({functionName: inputField, tests:[]})
          setFunc(copyOfFuncArray);
          setInput('')
        }}>
          add func
        </button>
      </div>
      <div id = 'func-wrapper'>
        {newFuncList}
      </div>
    
    </div>
  )
}