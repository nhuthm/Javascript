let passwordText = "password"
let userInput = ""

// == 
// ===

//while (userInput != passwordText) {
//    userInput = prompt("Please enter your password")
//}
//alert("Login successful!!!")


let factorial = 1
let number = 5
let original = number
do {
    factorial = factorial * number
    number--
} while (number > 0)

console.log(original + " factorial is: " + factorial)