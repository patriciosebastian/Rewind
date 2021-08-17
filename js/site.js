// Get the string from the input
// Controller function
function getValue() {
    // Make sure alert is invisible
    document.querySelector("#alert").classList.add("invisible");
   let userString = document.querySelector("#userString").value;
   // revString givess reverseString access to userString by passing it 
   let revString = reverseString(userString);
   displayString(revString);
}

// Reverse the string
// Logic function
function reverseString(userString) {
    let revString = [];
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];        
    }
    return revString;
}

// Display the reversed string to the user
// View function
function displayString(revString) {
    // Write msg to the page
    document.querySelector("#msg").innerHTML = `Your string reversed is: ${revString}`;
    // Show the alert box
    document.querySelector("#alert").classList.remove("invisible");
}