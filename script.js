const body=document.getElementsByTagName("body")[0];
body.style="background-color:blue;";
const ism=prompt("ism kiriting");
const h1=document.createElement("h1");
h1.textContent=ism;
h1.style="text-align:center; color:yellow; font-size:60px margin-top:250px;"
body.appendChild(h1)