function previousPage() {
  window.location.href = "../pieceCollection";
}

function failedPark() {
  localStorage.setItem("endgame", "failedPark");
  nextPage();
}
function successfulPark() {
  localStorage.setItem("endgame", "successfulPark");
  nextPage();
}
function failedOnstage() {
  localStorage.setItem("endgame", "failedOnstage");
  nextPage();
}
function successfulOnstage() {
  localStorage.setItem("endgame", "successfulOnstage");
  nextPage();
}

function noAttempt() {
  localStorage.setItem("endgame", "noAttempt");
  nextPage();
}

function nextPage() {
  window.location.href = "../trap";
}
