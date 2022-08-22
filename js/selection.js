var i = 0;
function updateSelectedList(playerName, btnPlayer) {
  if (i != 5) {
    i++;
    var li = document.createElement("LI");
    var name = document.createTextNode(playerName);
    li.appendChild(document.createTextNode(i));
    li.appendChild(name);
    document.getElementById("player-list").appendChild(li).style.color="white";
    
    document.getElementById(btnPlayer).style.backgroundColor="silver";
    return true;
  } else {
    alert("Maximum number reached");
    return false;
  }
}

function numberFromList(){
  return i;
}
// console.log("working");

