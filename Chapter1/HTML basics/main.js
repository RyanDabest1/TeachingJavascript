let count = document.querySelector("#count");
let incrementBtn = document.querySelector("#incrementBtn");
let resetBtn = document.querySelector("#resetBtn");
let decrementBtn = document.querySelector("#decrementBtn");
let number = 0;

incrementBtn.addEventListener("click", function (){
    number++;
    count.textContent = number;  
})
resetBtn.addEventListener("click", function(){
    number = 0;
    count.textContent = number;
})