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
document.addEventListener("DOMContentLoaded", function () {
    let coins = 100;
    const coinSpan = document.querySelector("#coin-btn-count");
    const callButtons = document.querySelectorAll(".cll-btn");
    const callHistoryList = document.querySelector("#call-history");
    const clearBtn = document.querySelector("#clear-history");

    for (let i = 0; i < callButtons.length; i++) {
        callButtons[i].addEventListener("click", function (e) {
            if (coins < 20) {
                alert("Not enough coins to make a call");
                return;
            }

            coins -= 20;
            coinSpan.textContent = coins;

            const card = e.target.closest(".p-5");
            const serviceName = card.querySelector("h4").innerText;
            const serviceNumber = card.querySelector("h2").innerText;
            alert(`Calling ${serviceName} ${serviceNumber}`);
            const timeNow = new Date();
            const timeStr = timeNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const li = document.createElement("li");
            li.className = "flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg shadow-sm";
            li.innerHTML = `
                <div>
                    <p class="font-medium">${serviceName}</p>
                    <p class="text-xs text-gray-500">${serviceNumber}</p>
                </div>
                <span class="text-xs text-gray-400">${timeStr}</span>
            `;
            callHistoryList.prepend(li);
        })
    }
    clearBtn.addEventListener("click", function () {
        callHistoryList.innerHTML = "";
    })
})


// copy button
document.addEventListener("DOMContentLoaded", function () {
    let copyCount = 0;
    const copySpan = document.getElementById("copy-count");
    const copyButtons = document.querySelectorAll(".copy-btn"); // ✅ FIXED SELECTOR

    for (let i = 0; i < copyButtons.length; i++) {
        copyButtons[i].addEventListener("click", function (e) {
            const card = e.target.closest(".p-5"); // find the card
            const serviceNumber = card.querySelector("h2").innerText.trim(); // get number

            // ✅ Copy to clipboard
            navigator.clipboard.writeText(serviceNumber)
                .then(() => {
                    alert("Copied: " + serviceNumber); // show alert
                    copyCount++; // increase count
                    copySpan.innerText = copyCount; // update navbar
                })
                .catch(err => {
                    console.error("Copy failed", err);
                })
        })
    }
})




