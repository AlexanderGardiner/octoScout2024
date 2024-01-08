function previousPage() {
  window.location.href = "../pieceCollectionAuto";
}

function startTeleop() {
  window.location.href = "../pieceCollection";
}

function speakerPiece() {
  localStorage.setItem(
    "speakerPieceAuto",
    parseInt(localStorage.getItem("speakerPieceAuto")) + 1
  );
  piecePlacement();
}

function ampPiece() {
  localStorage.setItem(
    "ampPieceAuto",
    parseInt(localStorage.getItem("ampPieceAuto")) + 1
  );
  piecePlacement();
}

function failedPiece() {
  localStorage.setItem(
    "failedPieceAuto",
    parseInt(localStorage.getItem("failedPieceAuto")) + 1
  );
  piecePlacement();
}
function piecePlacement() {
  console.log(localStorage);
  window.location.href = "../pieceCollectionAuto";
}
