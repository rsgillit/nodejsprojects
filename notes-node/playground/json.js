// var obj = {
//   "name": "Rashpal"
// };
//
// var stringObj = JSON.stringify(obj);
// console.log( typeof stringObj);
// console.log( stringObj);
//
// var personString = '{"name": "Andrew", "age": 32}';
// var personObj = JSON.parse(personString);
// console.log(typeof personObj);
// console.log(personObj);
// process.exit(0);
const fs = require('fs');
var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);
var noteString = fs.readFileSync('notes.json');
var noteJson = JSON.parse(noteString);
console.log(typeof noteJson);
console.log(noteJson.title);
console.log(noteJson.body);
