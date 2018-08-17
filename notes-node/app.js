console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
//console.log(notes);

var res = notes.addNote();
console.log(res);

var res1 = notes.add(4,5);
console.log(res1);
var user = os.userInfo();
// //console.log(user);
// fs.appendFile('greetings.txt', `Hello ${user.username}!`,function(err){
//   if(err){
//     console.log('an error occurred');
//   }
// });
