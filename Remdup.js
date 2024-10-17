function removeDuplicates() {
    const numbersInput = document.getElementById("numbers").value;
    const numbersArray = numbersInput.split(",").map(Number);

    let i = 0;
    for (let j = 1; j < numbersArray.length; j++) {
        if (numbersArray[j] !== numbersArray[i]) {
            i++;
            numbersArray[i] = numbersArray[j];
        }
    }

    const newLength = i + 1;
    document.getElementById("result").textContent = "Array with duplicates removed: " + numbersArray.slice(0, newLength).join(", ");
}