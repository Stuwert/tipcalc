var awesome = document.getElementById("awesome");
var douche = document.getElementById("douche");
var dece = document.getElementById("dece");
var poor = document.getElementById("poor");

douche.addEventListener("click", function(){
  document.getElementById('header').innerHTML = "You're a Douche";
  document.getElementById('main').setAttribute('class', 'red');
});


function clickButton (buttonToClick, percent){
  buttonToClick.addEventListener("click", function(){
    var number = +document.getElementById("mealcost").value;
    var totalCalc = document.getElementById("tip-calc");
    var tip = +percent*number;
    var totalAmt = document.getElementById("total-calc");
    var total = tip + number;
    total = total.toFixed(2);
    tip = tip.toFixed(2);
    totalCalc.textContent = "$ " + tip;
    totalAmt.textContent = "$ " + total;
    if (buttonToClick != douche){
      document.getElementById('main').removeAttribute("class", "red");
      document.getElementById('header').innerHTML = "Tip Calculator";
    }
  });
}

clickButton(awesome, .20);
clickButton(douche, .05);
clickButton(dece, .15);
clickButton(poor, .1);
