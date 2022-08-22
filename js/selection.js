var i = 0;
function updateSelectedList(playerName, btnPlayer) {
  if (i != 5) {
    //check if player list reached maximum limit
    i++;
    var li = document.createElement("LI");
    var name = document.createTextNode(playerName);
    li.appendChild(document.createTextNode(i));
    li.appendChild(name);
    document.getElementById("player-list").appendChild(li).style.color =
      "white";

    document.getElementById(btnPlayer).style.backgroundColor = "silver"; // disable button color change
    return true;
  } else {
    alert("Maximum number reached");
    return false;
  }
}

// ------------ this function is for counting total selected players from list -------------

function numberFromList() {
  return i;
}
