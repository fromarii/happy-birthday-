const candles = document.getElementById("candles");

for(let i = 0; i < 20; i++){

    candles.innerHTML += `
        <div class="candle">
            <div class="flame"></div>
        </div>
    `;

}

document.getElementById("wishBtn").addEventListener("click",()=>{

    document.querySelectorAll(".flame").forEach(flame=>{

        flame.style.opacity="0";
        flame.style.transform="translateX(-50%) scale(0)";

    });

    document.getElementById("message").style.opacity="1";

    // Optional: go to next page after 4 seconds
    // setTimeout(() => {
    //     window.location.href = "nextpage.html";
    // }, 4000);

});
