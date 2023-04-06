function foo() {
    let myNum = Math.ceil(Math.random() * 10);
    let text = document.getElementById("text");
    text.className = "styles";
    let inputField = document.getElementById("inputField");
    let fieldVal = parseInt(inputField.value);
    if (fieldVal > 0 && fieldVal <= 10) {
        if (myNum === fieldVal) {
            text.innerText = "Congrats! You win.";
        } else {
            text.innerText = "You lost.My Number is " + myNum;
        }
    } else if (fieldVal > 10 || fieldVal === 0) {
        text.innerText = "Kindly Enter between 1 to 10."
    } else if (inputField.value === "") {
        text.innerText = "Please! Enter."
    } else if (isNaN(fieldVal)) {
        text.innerText = "Sharafat ky Dairy me Enter karo."
    }
    inputField.value = "";
}