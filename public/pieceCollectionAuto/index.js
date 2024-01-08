let blankData = [];
let tempNotes = [];
console.log(blankData);
if (JSON.parse(localStorage.getItem("pickedUpNotesAuto")) == null) {
  localStorage.setItem("pickedUpNotesAuto", JSON.stringify(blankData));
}

let totalNotesElement = document.getElementById("totalNotes");
console.log(JSON.parse(localStorage.getItem("pickedUpNotesAuto")));
totalNotesElement.innerHTML =
  "Total Notes Collected: " +
  JSON.parse(localStorage.getItem("pickedUpNotesAuto")).length;
function dragNote(event) {
  event.preventDefault();
  tempNotes.push(document.createElement("img"));
  tempNotes[tempNotes.length - 1].src = "./note.png";
  tempNotes[tempNotes.length - 1].style.position = "absolute";
  console.log("draggingNote");
  document.body.appendChild(tempNotes[tempNotes.length - 1]);
  tempNotes[tempNotes.length - 1].style.height = "10vh";
  document.addEventListener("pointermove", moveDraggedNote);
  document.addEventListener("pointerup", pickUpNote);
}

function removeEventListeners() {
  document.removeEventListener("pointermove", moveDraggedNote);
  document.removeEventListener("pointerup ", pickUpNote);
}

function moveDraggedNote(event) {
  event.preventDefault();
  tempNotes[tempNotes.length - 1].style.left =
    "calc(" + event.clientX + "px - 2.5vh)";
  tempNotes[tempNotes.length - 1].style.top =
    "calc(" + event.clientY + "px - 5vh)";
}

function pickUpNote(event) {
  event.preventDefault();
  console.log("note picked up");
  let pickedUpNotesJSON = JSON.parse(localStorage.getItem("pickedUpNotesAuto"));
  console.log(pickedUpNotesJSON);
  let fieldClientRect = document
    .getElementById("fieldImage")
    .getBoundingClientRect();
  pickedUpNotesJSON.push({
    left:
      (8.21 * (event.clientX - fieldClientRect.left)) / fieldClientRect.width,
    top:
      (16.6 * (event.clientY - fieldClientRect.top)) / fieldClientRect.height,
  });
  localStorage.setItem("pickedUpNotesAuto", JSON.stringify(pickedUpNotesJSON));
  localStorage.setItem("totalPickedUpNotesAuto", pickedUpNotesJSON.length);
  console.log(localStorage);
  totalNotesElement.innerHTML =
    "Total Notes Collected: " + pickedUpNotesJSON.length;

  removeEventListeners();
  nextPage();
}

function undoLastNotePickup() {
  let pickedUpNotesJSON = JSON.parse(localStorage.getItem("pickedUpNotesAuto"));
  pickedUpNotesJSON.pop();
  localStorage.setItem("pickedUpNotesAuto", JSON.stringify(pickedUpNotesJSON));
  totalNotesElement.innerHTML =
    "Total Notes Collected: " + pickedUpNotesJSON.length;
  tempNotes[tempNotes.length - 1].remove();
  tempNotes.pop();

  console.log(localStorage);
}

function nextPage() {
  window.location.href = "../piecePlacementAuto";
}

function startTeleop() {
  window.location.href = "../pieceCollection";
}

function previousPage() {
  window.location.href = "../mobilityAuto";
}
