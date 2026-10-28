// WARM-UP: Shout It!
const shoutButton = document.getElementById("btnShout");

shoutButton.addEventListener("click", function () {
    const shoutText = document.getElementById("shoutInput").value;

    document.getElementById("outShout").innerHTML =
        shoutText.toUpperCase() + "!";
});


// MAIN: Pizza Builder
const calcButton = document.getElementById("btnCalc");

calcButton.addEventListener("click", function () {
    // Find selected size
    const sizes = document.getElementsByName("rg");
    let sizePrice = 0;

    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i].checked) {
            sizePrice = parseFloat(sizes[i].value);
        }
    }

    // Count selected toppings
    const toppings = document.getElementsByName("cb");
    let toppingCount = 0;

    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            toppingCount++;
        }
    }

    const toppingPrice = toppingCount * 0.50;

    // Determine service fee
    const service = document.getElementById("serviceSelect").value;
    let serviceFee = 0;

    if (service === "dinein") {
        serviceFee = 0;
    } else if (service === "takeout") {
        serviceFee = 1.50;
    } else {
        serviceFee = 3.00;
    }

    // Calculate and display total
    const total = sizePrice + toppingPrice + serviceFee;

    let enteredName = document.getElementById("myInput").value;

    if (enteredName === "") {
        enteredName = "Customer";
    }

    document.getElementById("myPara").innerHTML =
        enteredName + ", your total is $" + total.toFixed(2);
});


// Clear button
const clearButton = document.getElementById("clearBtn");

clearButton.addEventListener("click", function () {
    document.getElementById("myInput").value = "";
    document.getElementById("r3").checked = true;

    const toppings = document.getElementsByName("cb");

    for (let i = 0; i < toppings.length; i++) {
        toppings[i].checked = false;
    }

    document.getElementById("serviceSelect").value = "dinein";
    document.getElementById("myPara").innerHTML = "";
});