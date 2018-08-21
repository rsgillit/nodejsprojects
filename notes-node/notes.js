
const fs = require('fs');

var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  };
  // var duplicateNotes = notes.filter((note)=>{
  //   return note.title === title;
  // });
  var duplicateNotes = notes.filter((note)=> note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  var allNotes = fetchNotes();
  allNotes.forEach(function(note) {
    console.log(note.title);
  });
}

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

module.exports = {
  addNote: addNote,
  getAll: getAll,
  getNote: getNote,
  removeNote:removeNote
}
