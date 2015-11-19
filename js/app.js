var textInput = document.getElementById("mealcost");
var highlight = document.getElementById("service");

var calculate = function (price, percent){
  var priceArray =[];
  var tip = percent * price;
  var total = tip + price;
  priceArray[0] = tip.toFixed(2);
  priceArray[1] = total.toFixed(2);
  return priceArray;
}

function addDouche(){
  document.getElementById('header').innerHTML = "Really brah?";
  document.getElementById('main').setAttribute('class', 'red');
}

function removeDouche(){
  document.getElementById('header').innerHTML = "Tip Calculator";
  document.getElementById('main').removeAttribute('class', 'red');
}

var printScreen = function (){
  var cost = +document.getElementById("mealcost").value;
  var tip = +document.getElementById("service").value;
  if (!Number(cost) && cost != ""){
        document.getElementById('header').textContent = "Please use only numbers";
  }else{
      document.getElementById('header').textContent = "Tip Calculator";
      document.getElementById("tip-calc").textContent = "$ " + calculate(cost, tip)[0];
      document.getElementById("total-calc").textContent = "$ " +  calculate(cost, tip)[1];
      if (tip === 1){
        addDouche();
      }else{
        removeDouche();
      }
    }
};

textInput.addEventListener("keyup", printScreen);
highlight.addEventListener("mouseout", printScreen);
