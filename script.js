let counter = 0;

document.querySelector(".decrease").addEventListener("click", function() {
    counter--;
    document.getElementById("value").textContent = counter;
});

document.querySelector(".reset").addEventListener("click", function() {
    counter = 0;
    document.getElementById("value").textContent = counter;
});

document.querySelector(".increase").addEventListener("click", function() {
    counter++;
    document.getElementById("value").textContent = counter;
});