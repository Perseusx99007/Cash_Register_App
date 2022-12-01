const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const billButton = document.querySelector("#bill-button");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

// billButton.addEventListener("click", () => console.log("clicked", billAmount.value));

// checkButton.addEventListener("click", () => console.log("CLICKED", cashGiven.value));

billButton.addEventListener("click", () => console.log("clicked", billAmount.value));

checkButton.addEventListener("click", validateBillAndCashAmount = () => 
{
    message.style.display = "none";
    if(billAmount.value > 0)
    {
        console.log("Valid AMount: ", billAmount.value);
    }
    else
    {
        console.log("Invalid Amount");
        message.innerText = "The Bill Amount should be greater than zero";
    }
});