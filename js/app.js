var awesome = document.getElementById("awesome");
var douche = document.getElementById("douche");
var dece = document.getElementById("dece");
var poor = document.getElementById("poor");

douche.addEventListener("click", function(){
  document.getElementById('header').innerHTML = "Really brah?";
  document.getElementById('main').setAttribute('class', 'red');
});

var calculate = function (price, percent){
  var priceArray =[];
  var tip = percent*price;
  var total = tip + price;
  priceArray[0] = tip.toFixed(2);
  priceArray[1] = total.toFixed(2);
  return priceArray;
}

function clickButton (buttonToClick, percent){
  buttonToClick.addEventListener("click", function(){
    var number = document.getElementById("mealcost").value;
    var totalCalc = document.getElementById("tip-calc");
    if (buttonToClick != douche){
      document.getElementById('main').removeAttribute("class", "red");
      document.getElementById('header').innerHTML = "Tip Calculator";
    }
    if (number.charAt(0)=== "$"){
      number = +number.slice(1,number.length);
    }
    number = +number;
    if (!Number(number)){
      document.getElementById("header").innerHTML = "Please enter numbers only";
    }else{
      document.getElementById("tip-calc").textContent = "$ " + calculate(number, percent)[0];
      document.getElementById("total-calc").textContent = "$ " +  calculate(number, percent)[1];
    }
  });
}

document.getElementById("mealcost").addEventListener("keypress", function (){
  // if (event.keyCode == 13){
    var number = document.getElementById("mealcost").value;
    var totalCalc = document.getElementById("tip-calc");
    if (number.charAt(0)=== "$"){
      number = +number.slice(1,number.length);
    }
    number = +number;
    if (!Number(number)){
      document.getElementById("header").innerHTML = "Please enter numbers only";
    }else{
      document.getElementById("tip-calc").textContent = "$ " + calculate(number, .2)[0];
      document.getElementById("total-calc").textContent = "$ " +  calculate(number, .2)[1];
    }
  // }
});

clickButton(awesome, .20);
clickButton(douche, 1);
clickButton(dece, .15);
clickButton(poor, .1);
