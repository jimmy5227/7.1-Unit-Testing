window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  amount = document.getElementById("loan-amount").value;
  years = document.getElementById("loan-years").value;
  rate = document.getElementById("loan-rate").value;

  calculateMonthlyPayment({ amount: amount, years: years, rate: rate })

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  amount = document.getElementById("loan-amount").value;
  years = document.getElementById("loan-years").value;
  rate = document.getElementById("loan-rate").value;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment. The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  P = amount;
  i = rate / 12;
  n = years * 12;
  return `${((P * i) / (1 - ((1 + i) ** (-n)))).toFixed(2)}`
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerHTML = `$${monthly}`;
}

document.addEventListener('submit', function (e) {
  e.preventDefault();
  let obj = getCurrentUIValues();
  update();
  let str = calculateMonthlyPayment(obj);
  updateMonthly(str);
})