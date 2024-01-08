function previousPage() {
  window.location.href = "../startingRobotSelection";
}

function failedMobility() {
  localStorage.setItem("mobility", "failedMobility");
  nextPage();
}

function successfulMobility() {
  localStorage.setItem("mobility", "successfulMobility");
  nextPage();
}

function noAttempt() {
  localStorage.setItem("mobility", "noAttempt");
  nextPage();
}

function nextPage() {
  window.location.href = "../pieceCollectionAuto";
}
