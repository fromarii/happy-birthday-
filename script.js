document.getElementById("startBtn").addEventListener("click", function () {
  const cover = document.querySelector(".cover");

  cover.classList.add("hide");

  setTimeout(() => {
    cover.innerHTML = `
      <h1>Hi Birthday Boy. 🤍</h1>
      <p>I couldn't wrap this in paper... so I wrapped it in code.</p>
      <button id="nextBtn">Next →</button>
    `;

    cover.classList.remove("hide");
  }, 500);
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "nextBtn") {

    const cover = document.querySelector(".cover");

    cover.classList.add("hide");

    setTimeout(() => {

      cover.innerHTML = `
        <h1>Page 2 🤍</h1>
        <p>This is where the memories start...</p>
        <button id="nextBtn">Next →</button>
      `;

      cover.classList.remove("hide");

    }, 500);
  }
});
