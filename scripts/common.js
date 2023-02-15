//Function 3: calculate total price
function getTextElementValueById(elementId) {
  const totalElement = document.getElementById(elementId);
  const currentTotalString = totalElement.innerText;
  const currentTotal = parseInt(currentTotalString);
  return currentTotal;
}

// Function 5:  tax and final amount
function setTextElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

// Function 4:
function calculateSubTotal() {
  // Function 3 call
  const currentPhoneTotal = getTextElementValueById("phone-total");
  const currentCaseTotal = getTextElementValueById("case-total");

  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setTextElementValueById("sub-total", currentSubTotal);

  // calculate tax
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementValueById("tax-amount", taxAmount);

  // calculate final amount
  const finalTotal = currentSubTotal + taxAmount;
  setTextElementValueById("final-total", finalTotal);
}
