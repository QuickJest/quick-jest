let beautify = require('js-beautify').js;

const formatString = (funcArray) => {
  let str = '';
  funcArray.forEach(ob => {
    let desc = `describe("${ob.functionName}", () => { `;
    ob.tests.forEach(test => {
      // append to desc
      desc += `it("${test}", () => { \n \/\/tests go here\n }); `
    })
    // add closing tags and stuff of describe method
    desc += '}); '
    // append describe to final string
    str += desc
  })

  return beautify(str, {indent_size: 2});
}

export default formatString;
