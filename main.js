// Form validation for the contact form
const errorNameElement = document.getElementById("error");

function formValid() {
  let nameInputValue = document.getElementById("userName").value;

  if (nameInputValue == "") {
    errorNameElement.innerHTML = "You didn't enter anything";
  } else {
    errorNameElement.innerHTML = "Thank you for filling this form!";
  }
}

// Form validation for buying products - Name
const errorNameElement2 = document.getElementById("error1");

function formValid2() {
  let nameInputValue = document.getElementById("userName2").value;

  if (isNaN(nameInputValue)) {
    errorNameElement2.innerHTML = "Data Accepted";
  } else if (nameInputValue == "") {
    errorNameElement2.innerHTML = "You didn't enter anything";
  } else {
    errorNameElement2.innerHTML = "Please enter your name NOT a number";
  }
}

// Form validation for buying products - Address
const errorNameElement3 = document.getElementById("error3");

function formValid3() {
  let nameInputValue = document.getElementById("userName3").value;

  if (nameInputValue == "") {
    errorNameElement3.innerHTML = "You didn't enter anything";
  } else {
    errorNameElement3.innerHTML = "Thank you for filling this form!";
  }
}

// Form validation for buying products - Date
const errorNameElement4 = document.getElementById("error4");

function formValid4() {
  let nameInputValue = document.getElementById("userName4").value;

  if (nameInputValue == "") {
    errorNameElement4.innerHTML = "Please enter a date";
  } else {
    errorNameElement4.innerHTML = "Your order will arrive on this date.";
  }
}

// Form validation for buying products - Email
const errorNameElement5 = document.getElementById("error5");

function formValid5() {
  let nameInputValue = document.getElementById("userName5").value;

  if (nameInputValue == "") {
    errorNameElement5.innerHTML = "You didn't enter anything";
  } else {
    errorNameElement5.innerHTML = "Thank you for filling this form!";
  }
}

// Form validation for buying products - Product Name
const errorNameElement6 = document.getElementById("error6");

function formValid6() {
  let nameInputValue = document.getElementById("userName6").value;

  if (isNaN(nameInputValue)) {
    errorNameElement6.innerHTML = "Data Accepted";
  } else if (nameInputValue == "") {
    errorNameElement6.innerHTML = "You didn't enter anything";
  } else {
    errorNameElement6.innerHTML =
      "There is no product name in our shop that contains a number.";
  }
}
