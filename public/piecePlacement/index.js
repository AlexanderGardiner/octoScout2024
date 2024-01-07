function previousPage() {
  window.location.href = "../pieceCollection";
}

function startEndgame() {
  window.location.href = "../endgame";
}

function speakerPiece() {
  localStorage.setItem(
    "speakerPiece",
    parseInt(localStorage.getItem("speakerPiece")) + 1
  );
  piecePlacement();
}

function ampPiece() {
  localStorage.setItem(
    "ampPiece",
    parseInt(localStorage.getItem("ampPiece")) + 1
  );
  piecePlacement();
}

function ampSpeakerPiece() {
  localStorage.setItem(
    "ampSpeakerPiece",
    parseInt(localStorage.getItem("ampSpeakerPiece")) + 1
  );
  piecePlacement();
}

function failedPiece() {
  localStorage.setItem(
    "failedPiece",
    parseInt(localStorage.getItem("failedPiece")) + 1
  );
  piecePlacement();
}
function piecePlacement() {
  console.log(localStorage);
  window.location.href = "../pieceCollection";
}
