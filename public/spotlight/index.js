function previousPage() {
  window.location.href = "../trap";
}

function failedSpotlight() {
  localStorage.setItem("spotlight", "failedSpotlight");
  nextPage();
}

function successfulSpotlight() {
  localStorage.setItem("spotlight", "successfulSpotlight");
  nextPage();
}

function noAttempt() {
  localStorage.setItem("spotlight", "noAttempt");
  nextPage();
}

function nextPage() {
  window.location.href = "../harmony";
}
