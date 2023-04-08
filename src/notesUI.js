const addNote = (noteID) => {
  const note = notesInput.value;
  projectArray[noteID]["notes"].push(note);
  console.log(projectArray);

  noteRender(projectArray[noteID]["notes"]);
};

const cancelNote = () => {
  notesInput.remove();
  notesAddButton.remove();
  notesCancelButton.remove();

  notesButtonDiv.append(notesButton);
};

const noteRender = (notesArray) => {
  notesButtonDiv.innerHTML = "";

  for (let i = 0; i < notesArray.length; i++) {
    noteDiv = document.createElement("div");
    noteDiv.className = "note-div";
    noteDiv.setAttribute("id", `${i}`);

    const deleteNote = document.createElement("div");
    deleteNote.textContent = "×";
    deleteNote.addEventListener("click", () => {
      removeNote(noteDiv.id, notesArray);
    });

    noteName = document.createElement("div");
    noteName.textContent = notesArray[i];

    noteDiv.append(deleteNote, noteName);
    notesButtonDiv.append(noteDiv);
  }

  notesButtonDiv.append(notesButton);
};

const removeNote = (noteID, notesArray) => {
  notesArray.splice(noteID, 1);
  noteRender(notesArray);
  console.log(notesArray);
};

let noteName;
let noteDiv;

export default { addNote, cancelNote };
