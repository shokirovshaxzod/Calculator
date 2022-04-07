let firstNumber = document.getElementById("numberBox")
let secondNumber = document.getElementById("secondBox")
let result = document.getElementById("test")
let plusBtn = document.getElementById("btn")
let minusBtn = document.getElementById("btnmin")
let bolBtn = document.getElementById("btnbe")
let multiplyqBtn = document.getElementById("multiply")


multiplyqBtn.addEventListener("click", () => {
    let total = +firstNumber.value * +secondNumber.value;
    result.innerHTML = total;
    firstNumber.value = "";
    secondNumber.value = "";
    console.log(total);
})
bolBtn.addEventListener("click", () => {
    let total = +firstNumber.value / +secondNumber.value;
    result.innerHTML = total;
    firstNumber.value = "";
    secondNumber.value = "";
    console.log(total);
})
minusBtn.addEventListener("click", () => {
    let total = +firstNumber.value - +secondNumber.value;
    result.innerHTML = total;
    firstNumber.value = "";
    secondNumber.value = "";
    console.log(total);
})
plusBtn.addEventListener("click", () => {
    let total = +firstNumber.value + +secondNumber.value;
    result.innerHTML = total;
    firstNumber.value = "";
    secondNumber.value = "";
    console.log(total);
})