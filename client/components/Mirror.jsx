import React, {useState, useEffect} from 'react';
// import {UnControlled as CodeMirror} from 'react-codemirror2'
import CodeMirror from 'react-codemirror';

// import 'codemirror-formatting';
import 'codemirror/lib/codemirror.css';
import 'codemirror/lib/codemirror.js';

import 'codemirror/mode/javascript/javascript.js';

let beautify = require('js-beautify').js;

const value = 'describe("addUser", () => { it("should return an object") }); function() { console.log("arrow syntax?")}; describe("addUser", () => { it("should return an object") }); function() { console.log("arrow syntax?")};describe("addUser", () => { it("should return an object") }); function() { console.log("arrow syntax?")};describe("addUser", () => { it("should return an object") }); function() { console.log("arrow syntax?")};describe("addUser", () => { it("should return an object") }); function() { console.log("arrow syntax?")};describe("addUser", () => { it("should return an object") }); function() { console.log("arrow syntax?")};'

const mirror = (props) => {
  const [js, setJs] = useState('');
  // let date = new Date();

  useEffect(() => {
    let formattedJs = beautify(value, {indent_size: 2});
    setJs(formattedJs);
    // console.log('useEffect', Date.now());
    console.log('printing out formatted js\n', js);
    console.log(typeof js);
  })

  return (
    <div id='mirror'>
      <CodeMirror
        options={{
          value: js,
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
          readOnly: true,
          tabsize: 2,
        }}
      />
    </div>
  )
}

export default mirror;