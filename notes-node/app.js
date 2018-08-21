const util = require('./utilities.js');

const name = 'notesnode';
const notes = require('./notes.js');
const config = require('./config.js');
const titleOpt = {
  describe: "Title of note",
  demand: true,
  alias: 't'
};

//console.log(notes);
if (config.PLATFORM === "win32"){
  process.env.DEBUG="*"
  console.log('booting %o', name);
} else{
  process.env.DEBUG="*"
}
util.debug('booting %o', name);
console.log('process.argv=',process.argv);
var command = process.argv[2];
const argv = util.yargs
            .command('add','Add a new Note',{
            title:titleOpt,
            body:{
              describe: "Body of note",
              demand: true,
              alias: 'b'
            }
            })
            .command('list','List all notes')
            .command('read','Read a note',{
              title:titleOpt
            })
            .help()
            .argv;
console.log('yargs.argv=',argv);
if(command == 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
      console.log('Note created');
      console.log('---');
      console.log('Title: ', note.title);
      console.log('Body: ', note.body);
    } else {
      console.log('Duplicate Note');
    }
} else if (command === 'list'){
    notes.getAll();
} else if(command === 'read'){
    var returnedNote = notes.getNote(argv.title);
    if(returnedNote){
      console.log("note was found: title: ", returnedNote);
    } else{
      console.log("note was not found", returnedNote);
    }
} else if(command === 'remove'){
      var isRemoved = notes.removeNote(argv.title);
      if(isRemoved){
        console.log("note was removed: title: ", argv.title);
      } else{
        console.log("no note found: title: ", argv.title);
      }
} else{
  console.log('Command not recognized');
}
// console.log(typeof (user));
// console.log(_.isString('Rashpal'));
// //console.log(user);
// fs.appendFile('greetings.txt', `Hello ${user.username}!`,function(err){
//   if(err){
//     console.log('an error occurred');
//   }
// });
