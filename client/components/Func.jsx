import React, {useState} from 'react';

function Func(props) {
  const { funcArray, setFunc, setTest, inputTest } = props
  const handleDelete = ()=>{

  }
  const addTest = ()=>{
    let newFuncArr=[...props.functions]
    newFuncArr[props.index]["tests"].push(props.inputTest)
    props.setFunc(newFuncArr);
    props.setTest('')
  }
  let testArr = []
  props.tests.forEach((test, i)=>{
    testArr.push(
    <div className='testBox'>  
      <p className='tests bg-white hover-bg-light-blue black ma2' key={i}> {test}
      </p>
      <button className='deleteTest bg-red ma2 grow' onClick={()=>{
      //  testArr =testArr.slice(0,i).concat(str.slice(i+2,testArr.length))
      let newFuncArr=[...props.functions]
      delete newFuncArr[props.index]["tests"][i]
      props.setFunc(newFuncArr);
      props.setTest('')
      }}>
        d
      </button>
    </div>
  )})

  return(
   <div className ='Func dib br3 pa3 ma2 bw2 shadow-5'>
     <div className = 'input-and-add'>
      <input id="name" className="input-reset ba b--black-20 pa2 mb2 db" 
      type="text" aria-describedby="name-desc" value = {inputTest} onChange={(e)=>{  
       props.setTest(e.target.value);
      }}>
      </input>
      
      <button className='addTest bg-#fff ma2 grow bw2 shadow-5' onClick={addTest}>
        +
      </button>
     </div>
      <p className = 'func-name'>
        {props.name}
      </p>
      {testArr} 
    </div>
  )
}

export default Func