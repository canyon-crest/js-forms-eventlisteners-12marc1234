// ============================================
//  Unit 8.7 – Forms & Event Listeners
// ============================================
//  Complete each section below by following
//  the STEP comments.
//
//  IMPORTANT: Use addEventListener() to wire your
//  buttons — do NOT add onclick in the HTML.
// ============================================
document.getElementById("btnShout").addEventListener('click', function(){
    outShout.innerHTML = shoutText.value.toUpperCase();
})

// ============================================
//  WARM-UP: Shout It!
// ============================================
// When the user types text and clicks "Shout",
// display the text in ALL CAPS with "!" at the end.

// STEP 1: Get the "Shout" button by its ID ("btnShout")
//         using document.getElementById()

// STEP 2: Add a click event listener to the button.
//         Inside the listener function:
//         a) Get the text from the input with ID "shoutInput"
//            using .value
//         b) Convert the text to uppercase using .toUpperCase()
//         c) Add "!" to the end
//         d) Display the result in the element with ID "outShout"
//            using .innerHTML
//
//         Example: "hello" → "HELLO!"

const button = document.get('btnShout');
const shoutINput = document.getElementById('shoutText');
const outShout = document.getElementById("outShout");

button.addEventListener('click', function() {
    outShout.innerHTML = shoutINput.value.toUpperCase + "!";
})

// ============================================
//  MAIN: Pizza Builder
// ============================================
// Calculate the total price of a pizza based on:
//   - Size (radio buttons): Small $7.50, Medium $10.00,
//     Large $12.50, XL $15.00
//   - Toppings (checkboxes): $0.50 each
//   - Service (dropdown): Dine In $0, Take Out $1.50,
//     Delivery $3.00

// STEP 3: Get the "Calculate Total" button by ID ("btnCalc")
//         Add a click event listener.
//         Inside the listener:

//   a) Get the selected size price:
//      Use document.getElementsByName("rg") to get all
//      size radio buttons. Loop through them to find the
//      one that is .checked, and read its .value.
//      Convert to a number with parseFloat().

//   b) Count checked toppings:
//      Use document.getElementsByName("cb") to get all
//      topping checkboxes. Loop through and count how
//      many are .checked. Multiply count by 0.50.

//   c) Get the service fee:
//      Use document.getElementById("serviceSelect").value
//      to get the selected option value ("dinein", "takeout",
//      or "delivery").
//      Use if/else if/else to set the fee:
//        "dinein"   → 0
//        "takeout"  → 1.50
//        "delivery" → 3.00

//   d) Calculate total: size + toppings + service fee

//   e) Get the customer name from the input with ID "myInput"

//   f) Display the result in the element with ID "myPara":
//      "[name], your total is $[total]"
//      Use .toFixed(2) to format the total.
//      Example: "Alice, your total is $13.50"
//      If name is empty, use "Customer" as the default.
const calcButton = document.getElementById('btnCalc');

calcButton.addEventListener("click", function() {
    const sizes = document.getElementsByName("rg");
    let sizePrice;
    
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i].checked) {
            sizePrice = parseFloat(sizes[i].value);
        }
    }
})


const toppings = document.getElementsByName("cb");
let toppingCount = 0;

for (let i = 0; i < toppings.length; i++) {
    if (toppings[i].checked) {
        toppingCount += 1
    }
}

let toppingPrice = toppingCount * 0.50;

const service = document.getElementsById("serviceSelect").value;
let serviceFee;

if (service === "dinein") {
    serviceFee = 0;
} else if (service === "takeout") {
    serviceFee = 1.50;
} else {
    serviceFee = 3.00;
}

let total = sizePrice + toppingPrice + serviceFee

let enteredName = document.getElementsById("myInput").value;

if (enteredName === "") {
    enteredName = "Customer";
}

document.getElementsById("myPara").innerHTML =
    enteredName + ", your total is $" + total.toFixed(2);




// STEP 4: Get the "Clear" button by ID ("clearBtn")
//         Add a click event listener.
//         Inside the listener:
//         a) Set the name input value to ""
//         b) Set the Large radio (id "r3") to checked = true
//         c) Uncheck ALL topping checkboxes (loop through them)
//         d) Set the service dropdown value to "dinein"
//         e) Set the output paragraph innerHTML to ""
