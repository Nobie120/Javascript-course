
//Counter project

const decrease = document.getElementById("decrease-btn");
const reset = document.getElementById("reset-btn");
const increase = document.getElementById("increase-btn");
const countlable = document.getElementById("count");
let count = 0;

increase.onclick = () => {
    count++;
    countlable.textContent = count;
}

decrease.onclick = () => {
    count--;
    countlable.textContent = count;
}

reset.onclick = () => {
    countlable.textContent = 0;
} 