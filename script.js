var newHead = document.createElement("h2");
var newPara = document.createElement("p");

document.getElementById("exe").appendChild(newHead);
document.getElementById("exe").appendChild(newPara);

newHead.innerHTML = "Working with Dom";
newPara.innerHTML = "Getting to know about Dom, and trying to create one! Have fun!";

var changeFormat = document.getElementById("exe");
changeFormat.setAttribute("align", "center");

var changeTitle = document.getElementsByTagName("HEADER")[0];
changeTitle.setAttribute("align", "center");