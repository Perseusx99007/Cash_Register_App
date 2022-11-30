const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");

billAmount.addEventListener("click", () => console.log(billAmount.value));

checkButton.addEventListener("click", () => console.log(checkButton.value));