function previousPage() {
  window.location.href = "../endgame";
}

function failedTrap() {
  localStorage.setItem("trap", "failedTrap");
  nextPage();
}

function successfulTrap() {
  localStorage.setItem("trap", "successfulTrap");
  nextPage();
}

function noAttempt() {
  localStorage.setItem("trap", "noAttempt");
  nextPage();
}

function nextPage() {
  window.location.href = "../spotlight";
}
