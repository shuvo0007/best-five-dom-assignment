function totalBudgetCalculation() {
  var playerCostValue = totalPlayerCostValue();

  if (playerCostValue != 0) {
    var managerCost = document.getElementById("manager-cost").value;
    var coachCost = document.getElementById("coach-cost").value;
    if(managerCost!='' && coachCost!=''){
      document.getElementById("total-cost").innerText =
      playerCostValue + parseFloat(managerCost) + parseFloat(coachCost);
    }
    else{
      alert("Please enter manager and coach cost");
    }
  }
  else{
    alert("Please calculate the players cost first");
  }
}
