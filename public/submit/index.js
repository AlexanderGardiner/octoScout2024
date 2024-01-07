function previousPage() {
  window.location.href = "../harmony";
}

function submit() {
  fetch("../uploadMatch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(localStorage),
  }).then((response) => {
    if (response.status == 200) {
      console.log("Match Uploaded");
      alert("Match Uploaded");
    } else {
      alert("Upload Failed");
    }
  });
}
