const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log("App is listening on port 80");
});

app.post("/uploadMatch", (req, res) => {
  console.log(req.body);
  saveJsonToCsv(req.body, "test.csv", [
    "scoutName",
    "teamNumber",
    "matchNumber",
    "teamColour",
    "startingRobotPosition",
    "pickedUpNotes",
    "totalPickedUpNotes",
    "speakerPiece",
    "ampPiece",
    "ampSpeakerPiece",
    "failedPiece",
    "endgame",
    "trap",
    "spotlight",
    "harmony",
    "harmonyTeam",
  ]);
  res.sendStatus(200);
});

function saveJsonToCsv(jsonData, csvFilePath, headers) {
  // Check if the CSV file already exists
  let fileExists = fs.existsSync(csvFilePath);

  // Check if the CSV file has headers
  let hasHeaders = false;
  if (fileExists) {
    const content = fs.readFileSync(csvFilePath, "utf-8");
    hasHeaders = content.trim().split("\n")[0] !== "";
  }

  // Prepare CSV header
  const header =
    !fileExists || !hasHeaders
      ? headers.map((header) => `"${header}"`).join(",") + "\n"
      : "";

  // Prepare CSV data
  const data =
    headers
      .map(
        (key) => `"${jsonData[key] !== undefined ? jsonData[key].trim() : ""}"`
      )
      .join(",") + "\n";

  // Write to CSV file
  fs.writeFileSync(csvFilePath, fileExists ? data : header + data, {
    flag: "a",
  });

  console.log("Data saved to CSV successfully.");
}
