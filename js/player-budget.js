var totalPlayerCost = 0;
function budgetCalculation() {
  const playerNumber = numberFromList();
  if (playerNumber !== 0) {
    const perPlayerCost = document.getElementById("per-player-cost").value;
    if (perPlayerCost !== "") {
      totalPlayerCost = document.getElementById("total-player-cost").innerText =
        perPlayerCost * playerNumber;
    } else {
      alert("Please Enter Per Players Cost");
    }
  } else {
    alert("Please select Players from the list");
  }
}
