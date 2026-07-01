const music = document.getElementById("bgMusic");

music.volume = 0.5;

const savedTime = localStorage.getItem("musicTime");

if (savedTime) {
    music.currentTime = parseFloat(savedTime);
}

music.play().catch(() => {});

const candles = document.getElementById("candles");

for (let i = 0; i < 20; i++) {

    candles.innerHTML += `
        <div class="candle">
            <div class="flame"></div>
        </div>
    `;

}

document.getElementById("wishBtn").addEventListener("click", () => {

    document.querySelectorAll(".flame").forEach(flame => {

        flame.style.opacity = "0";
        flame.style.transform = "translateX(-50%) scale(0)";

    });

    createConfetti();

    document.getElementById("message").style.opacity = "1";

});

function createConfetti() {

    const colors = [
        "#ff5f6d",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#c77dff",
        "#ffffff",
        "#f28482"
    ];

    for (let i = 0; i < 180; i++) {

        const confetti = document.createElement("div");
        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDuration =
            3 + Math.random() * 3 + "s";

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 6000);

    }

}
