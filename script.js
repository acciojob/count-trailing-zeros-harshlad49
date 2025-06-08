function trailingZeros(n) {
  function trailingZeros(n) {
    let count = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}

// Get user input and display result
let input = parseInt(prompt("Enter a non-negative integer:"));
let result = trailingZeros(input);
alert("Number of trailing zeros in " + input + "! is: " + result);

}

const input = prompt("Enter a number");
alert(trailingZeros(input));
