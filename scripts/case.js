/*
1. add event listener to the case plus button
2. get the value inside the case number field(input field)
3. convert the number to an integer 
4. calculate the new case number
5. set the value to the case number field

*/
/* Function 1
document.getElementById("case-btn-plus").addEventListener("click", function () {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);

  const newCaseNumber = previousCaseNumber + 1;
  caseNumberField.value = newCaseNumber;
});

document
  .getElementById("case-btn-minus")
  .addEventListener("click", function () {
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;
  });
*/
//--------------------------
// To ignore code repetition we can write it into one function
// Function 1
function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);

  // const newCaseNumber = previousCaseNumber - 1;
  /*instead of this we can write*/
  let newCaseNumber;
  if (isIncrease === true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }
  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
  //except returning we cannot access this outside the function.
}

/* Function 2
document.getElementById("case-btn-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);

  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
});

document
  .getElementById("case-btn-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-total");
    caseTotalElement.innerText = caseTotalPrice;
  });
  */

// To ignore code repetition we can write it into one function
// Function 2
function updateCaseTotalPrice(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById("case-btn-plus").addEventListener("click", function () {
  // Function 1 call
  const newCaseNumber = updateCaseNumber(true);

  // Function 2 call
  updateCaseTotalPrice(newCaseNumber);

  // Function 4 call
  calculateSubTotal();
});

document
  .getElementById("case-btn-minus")
  .addEventListener("click", function () {
    // Function 1 call
    const newCaseNumber = updateCaseNumber(false);

    // Function 2 call
    updateCaseTotalPrice(newCaseNumber);

    // Function 4 call
    calculateSubTotal();
  });
