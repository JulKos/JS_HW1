let n = Math.floor(Math.random() * 1000);
console.log('My number is:', n);
let i = 0
while (true) {
    i++;
    a = prompt("Guess a number between 0 and 999")
        if (isNaN(a)) {
            alert("Not a number!");
        } else if ((a < 1) || (a > 1000 - 1)) {
            alert("Your number does not fit!");
        } else if (a > n) {
            alert("Your number is greater than mine!");
        } else if (a < n) {
            alert("Your number is less than mine!");
        } else if (a == n) {
            alert("Correct!");
            break;
        }
    }