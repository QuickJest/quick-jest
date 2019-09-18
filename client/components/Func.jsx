import React, {useState} from 'react';

function Func(props) {
  const { funcArray, setFunc, setTest, inputTest } = props
  const handleDelete = ()=>{
    console.log('deleting shit')
  }
  const addTest = ()=>{
    let newFuncArr=[...props.functions]
    newFuncArr[props.index]["tests"].push(props.inputTest)
    props.setFunc(newFuncArr);
    props.setTest('')
  }
  let testArr = []
  props.tests.forEach((test, i)=>{
    testArr.push(<p key={i}>{test}</p>)
  })

  return(
   <div className ='Func dib br3 pa3 ma2 bw2 shadow-5'>
      <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" 
      type="text" aria-describedby="name-desc" onChange={(e)=>{  
       props.setTest(e.target.value);
      }}>
      </input>
      
      <button className='addTest bg-#fff ma2 grow bw2 shadow-5' onClick={addTest}>
        add test
      </button>
      <button className='deleteTest bg-#fff ma2 grow bw2 shadow-5' onClick={handleDelete}>
        delete test
      </button>
      <h3>
        {props.name}
      </h3>
      {testArr} 
        
    </div>
  )
}

export default Func