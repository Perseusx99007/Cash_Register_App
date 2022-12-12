const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const billButton = document.querySelector("#bill-button");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

// billButton.addEventListener("click", () => console.log("clicked", billAmount.value));

// checkButton.addEventListener("click", () => console.log("CLICKED", cashGiven.value));

showMessage = (message) =>
{
    // message.style.display = "block";
    message.innerText = message;
}

checkButton.addEventListener("click", validateBillAndCashAmount = () => 
{
    message.style.display = "none";
    if(billAmount.value > 0)
    {
        if(cashGiven.value >= billAmount.value)
        {

        }
        else
        {
            console.log("The Cash provided should atleast be equal to the Bill Amount.");
            message.style.display = "block";
            // message.innerText = "The Cash provided should atleast be equal to the Bill Amount.";
            // showMessage("The Cash provided should atleast be equal to the Bill Amount.");
        }
    }
    else
    {
        console.log("Invalid Amount.");
        message.style.display = "block";
        message.innerText = "Invalid Amount.";
        // showMessage("Invalid Amount.");
    }
});