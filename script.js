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
        <h1>Chapter One 🤍</h1>

        <div class="memory-page">

          <div class="photo-frame">
            <img src="images/photo1.jpeg" alt="Photo 1">
          </div>

          <p class="caption">
            the cutest boy ever ♡
          </p>

          <div class="doodles">
            ✦ ♡ ↖
          </div>

        </div>

        <button id="nextBtn">Next →</button>
      `;

      cover.classList.remove("hide");

    }, 500);
  }
});
