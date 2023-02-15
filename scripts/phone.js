function updatePhoneNumber(isIncrease) {
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberString = phoneNumberField.value;
  const previousPhoneNumber = parseInt(phoneNumberString);

  let newPhoneNumber;
  if (isIncrease === true) {
    newPhoneNumber = previousPhoneNumber + 1;
  } else {
    newPhoneNumber = previousPhoneNumber - 1;
  }
  phoneNumberField.value = newPhoneNumber;
  return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
  const phoneTotalPrice = newPhoneNumber * 1219;
  const phoneTotalElement = document.getElementById("phone-total");
  phoneTotalElement.innerText = phoneTotalPrice;
}

document
  .getElementById("phone-btn-plus")
  .addEventListener("click", function () {
    // Function 1 call
    const newPhoneNumber = updatePhoneNumber(true);

    // Function 2 call
    updatePhoneTotalPrice(newPhoneNumber);

    // Function 4 call
    calculateSubTotal();
  });

document
  .getElementById("phone-btn-minus")
  .addEventListener("click", function () {
    // Function 1 call
    const newPhoneNumber = updatePhoneNumber(false);

    // Function 2 call
    updatePhoneTotalPrice(newPhoneNumber);

    // Function 4 call
    calculateSubTotal();
  });
