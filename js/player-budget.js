var totalPlayerCost = 0;
function budgetCalculation() {
  const playerNumber = numberFromList(); //total player selected number return from selected.js
  if (playerNumber !== 0) {
    //check if no player is selected
    const perPlayerCost = document.getElementById("per-player-cost").value;
    if (perPlayerCost !== "") {
      //check if no cost value is given
      totalPlayerCost = document.getElementById("total-player-cost").innerText =
        perPlayerCost * playerNumber;
    } else {
      alert("Please Enter Per Players Cost");
    }
  } else {
    alert("Please select Players from the list");
  }
}

// total cost for all selected players
function totalPlayerCostValue() {
  return totalPlayerCost;
}
