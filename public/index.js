localStorage.clear();
localStorage.setItem("speakerPiece", 0);
localStorage.setItem("ampPiece", 0);
localStorage.setItem("ampSpeakerPiece", 0);
localStorage.setItem("failedPiece", 0);
function nextPage() {
  let scoutName = document.getElementById("scoutNameInput").value;
  let teamNumber = document.getElementById("teamNumberInput").value;
  let matchNumber = document.getElementById("matchNumberInput").value;
  let teamColour = document.getElementById("teamColourInput").value;
  localStorage.setItem("scoutName", scoutName);
  localStorage.setItem("teamNumber", teamNumber);
  localStorage.setItem("matchNumber", matchNumber);
  localStorage.setItem("teamColour", teamColour);
  console.log(localStorage);
  window.location.href = "/startingRobotSelection";
}
