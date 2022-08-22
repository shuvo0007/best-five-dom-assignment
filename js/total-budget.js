function totalBudgetCalculation() {
  var playerCostValue = totalPlayerCostValue(); //total players cost value return from player-budget.js

  if (playerCostValue != 0) {
    //check the per player cost is calculated or not
    var managerCost = document.getElementById("manager-cost").value;
    var coachCost = document.getElementById("coach-cost").value;
    if (managerCost != "" && coachCost != "") {
      // check if manager and coach cost is given or not
      document.getElementById("total-cost").innerText =
        playerCostValue + parseFloat(managerCost) + parseFloat(coachCost);
    } else {
      alert("Please enter manager and coach cost");
    }
  } else {
    alert("Please calculate the players cost first");
  }
}
