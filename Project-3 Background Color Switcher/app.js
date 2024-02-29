let colorDiv = document.querySelector("#colorDiv");

let allSpans = colorDiv.children;

for (let i = 0; i < allSpans.length; i++) {
  let getIds = allSpans[i].getAttribute("id");

  document.querySelector(`#${getIds}`).style.backgroundColor = getIds;

  document.querySelector(`#${getIds}`).addEventListener("click", () => {
    document.body.style.backgroundColor = getIds;

    if (getIds === "black") {
      document.querySelector("h1").style.color = "white";

      allSpans[i].style.borderColor = "white";
    } else {
      document.querySelector("h1").style.color = "black";
      document.getElementById("black").style.borderColor = "black";
    }
  });
}
