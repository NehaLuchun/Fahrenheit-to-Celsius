"use strict";

// Event Listener
document.getElementById('converter').addEventListener('click', conversion);

// Event Function
function conversion() {
    // Input- Get Celsius
    let fahrenheit = Number(document.getElementById('fahrenheit').value);

    console.log('celsius');
    console.log(typeof('celsius'));

    // Process- Do the Conversion
    let total = (fahrenheit - 32)*5/9;

    console.log(total);
    total = total * 10;
    console.log(total);
    total = Math.round(total);
    console.log(total);
    total = total / 10;

    //Output- Results
    document.getElementById('result').innerHTML = total;
}