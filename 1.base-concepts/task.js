"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d == 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  for (let i = 0; i < arguments.length; i++) {
    if (isNaN(Number(arguments[i]))) {
      return false;
    }
  }
  if (percent < 0 || percent > 100) {
    return false;
  }
  percent = percent / 100 / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  let totalAmount = (monthlyPayment * countMonths);
  return Number(totalAmount.toFixed(2));
}

calculateTotalMortgage();