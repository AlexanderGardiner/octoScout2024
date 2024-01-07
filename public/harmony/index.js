function previousPage() {
  window.location.href = "../spotlight";
}

function failedHarmony() {
  localStorage.setItem("harmony", "failedHarmony");
  nextPage();
}

function successfulHarmony() {
  localStorage.setItem("harmony", "successfulHarmony");
  localStorage.setItem(
    "harmonyTeam",
    document.getElementById("harmonyTeamInput").value
  );
  nextPage();
}
function noAttempt() {
  localStorage.setItem("harmony", "noAttempt");
  nextPage();
}

function nextPage() {
  window.location.href = "../submit";
}

function previousPage() {
  window.location.href = "../spotlight";
}
