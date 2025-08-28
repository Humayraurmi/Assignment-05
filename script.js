// heart button
let count = 0;
const heartCount = document.getElementById("heart-count");
const hearts = document.getElementsByClassName("heart-btn");
for (let i = 0; i < hearts.length; i++) {
    hearts[i].onclick = function () {
        count = count + 1;
        heartCount.innerText = count;
    }
}

// call button
document.addEventListener("DOMContentLoaded", function() {
    let coins = 100;
    const coinSpan = document.querySelector("#coin-btn-count");
    const callButtons = document.querySelectorAll(".cll-btn");

    for (let i = 0; i < callButtons.length; i++) {
        callButtons[i].addEventListener("click", function() {
            coins -= 20;
            if (coins < 20) {
                alert("Not enough coint to make a call");
            }
            coinSpan.textContent = coins;
        });
    }
});


