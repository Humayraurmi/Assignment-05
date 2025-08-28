// heart button
let count = 0;
const heartCount = document.getElementById("heart-count");
const hearts = document.getElementsByClassName("heart-btn"); 
for (let i = 0; i < hearts.length; i++) {
  hearts[i].onclick = function() {  
    count = count + 1;               
    heartCount.innerText = count; 
  }
}
