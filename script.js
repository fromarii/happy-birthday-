const messages = [
  "Hi birthday boy 🤍",
  "I couldn’t wrap this in paper, so I made it here instead.",
  "You mean a lot more than I ever say out loud.",
  "I hope you smile reading this.",
  "Happy Birthday ❤️"
];

let index = 0;

const text = document.getElementById("text");
const screen = document.getElementById("screen");
const hint = document.getElementById("hint");

function showMessage() {
  text.textContent = messages[index];
}

showMessage();

screen.addEventListener("click", () => {
  index++;

  if (index < messages.length) {
    showMessage();
  } else {
    text.textContent = "❤️";
    hint.style.display = "none";
  }
});
