// let icon = document.querySelector(".icon");
// let ul = document.querySelector("ul");

// icon.addEventListener("Click", ()=>{
    // ul.classList.toggle("showData");
    // console.log(ul);
// })
var navlinks = document.getElementById("navlinks");
function showMenu() {
    navlinks.style.left = "0"; 
    navlinks.style.display="block"
}
function hideMenu() {
    navlinks.style.left= "-250px";
}