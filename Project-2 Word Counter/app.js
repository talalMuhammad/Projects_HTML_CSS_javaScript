let textareaInput = document.querySelector("#textareaInput");

let showCharacterNumbers = document.querySelector("#showCharacterNumbers");

let showWordNumbers = document.querySelector("#showWordNumbers");

let countBtn = document.querySelector("#countBtn");

let feedBack = document.querySelector("#feedBack");

countBtn.addEventListener("click", () => {
  if (textareaInput.value === "") {
    showCharacterNumbers.innerHTML = 0;
    showWordNumbers.innerHTML = 0;
    textareaInput.setAttribute("placeholder", "⭕ Empty Field");
    feedBack.innerHTML = "Input Field is Empty";
  } else if (textareaInput.value.trim() === "") {
    showCharacterNumbers.innerHTML = textareaInput.value.length;
    showWordNumbers.innerHTML = 0;

    feedBack.innerHTML = "Only Spaces Found in this Content";
  } else {
    feedBack.innerHTML = "";
    showCharacterNumbers.innerHTML = textareaInput.value.length;

    let textareaValue = textareaInput.value
      .trim()
      .split(" ")
      .filter((element) => {
        return element != "";
      });

    showWordNumbers.innerHTML = textareaValue.length;
  }
});
