const button = document.getElementById("startBtn");

button.addEventListener("click", () => {

    document.getElementById("title").innerHTML =
    "Happy Birthday, Rafid ❤️";

    document.getElementById("message").innerHTML =
    "This little website was made especially for you.";

    button.innerHTML = "Continue ➜";

});
