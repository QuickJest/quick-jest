import React, {useState, useEffect} from 'react';
// import {UnControlled as CodeMirror} from 'react-codemirror2'
import CodeMirror from 'react-codemirror';

import 'codemirror/theme/mdn-like.css';
import 'codemirror/mode/javascript/javascript.js';

import formatString from '../stringFormat.js';

// const value = 'describe("addUser","a","bunch","of","useless","parameters", () => { it("should return an object", () => {console.log("Type your test cases here")}) }); function() { console.log("arrow syntax?")}; describe("addUser", () => { it("should return an object") }); function() { console.log("arrow syntax?")};describe("addUser", () => { it("should return an object") }); function() { console.log("arrow syntax?")};describe("addUser", () => { it("should return an object") }); function() { console.log("arrow syntax?")};describe("addUser", () => { it("should return an object") }); function() { console.log("arrow syntax?")};describe("addUser","a","bunch","of","useless","parameters", () => { it("should return an object", () => {console.log("Type your test cases here")}) });'

const mirror = (props) => {
  const [js, setJs] = useState('');
  const {funcArray } = props;
  // let date = new Date();
  // let formattedJs = '';
  useEffect(() => {

    let formattedJs = formatString(funcArray);
    setJs(formattedJs)
    // console.log('useEffect', Date.now());
    // console.log('printing out formatted js\n', js);
    // console.log(typeof js);
  })

  return (
    <div className='code'>
      <CodeMirror
        options={{
          value: js,
          mode: 'javascript',
          theme: 'mdn-like',
          lineNumbers: true,
          readOnly: true,
          tabsize: 2,
          lineWrapping: true,
          autoRefresh:true,
        }}
      />
      <div className = 'code'>
        <div className = 'code-bottom'>
          <button id = 'generate-btn'>Generate Jest Tests</button>
        </div>
      </div>
    </div>
  )
}

export default mirror;
