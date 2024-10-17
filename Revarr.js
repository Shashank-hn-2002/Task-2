function reverseArray() {
    const numbersInput = document.getElementById("numbers").value;
    const numbersArray = numbersInput.split(",").map(Number);

    numbersArray.reverse();

    document.getElementById("result").textContent = "Reversed array: " + numbersArray.join(", ");
}