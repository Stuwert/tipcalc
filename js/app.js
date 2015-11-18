var myButton = document.getElementById("button");
console.log(myButton);
myButton.addEventListener("click", function(){
  var number = myButton.previousElementSibling.value;
  number = Number(number);
  var totalCalc = document.getElementById("tip-calc");
  var tip = .15 * number;
  tip = Number(tip);
  var totalAmt = document.getElementById("total-calc");
  totalCalc.textContent = "$ " + tip;
  totalAmt.textContent = "$ " + (tip + number);
});
