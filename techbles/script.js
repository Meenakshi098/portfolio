function showSearch() {
    var searchicon  = document.getElementById("searchicon");
 if 
    (searchicon.style.display === "none")
{ searchicon.style.display = "block"; }
else{
    searchicon.style.display = "none"; 
}
}
var navlinks= document.getElementById("navlinks")
function showMenu() {
    navlinks.style.left = "0"; 
    navlinks.style.display="block"
}
function hideMenu(){
    navlinks.style.left= "-250px";
}
