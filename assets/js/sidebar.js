// Set the width of the sidebar to 250px and the left margin of the page content to 250px
// function openNav() {
//   document.getElementById("mySidebar").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// } 

var areah = document.getElementById("areah");
if (areah !== null) {
  areah.addEventListener("click", function(event){
  event.preventDefault();
});
}


// Haal trunk hieronder weg als sidebar trunk moet overlappen ipv wegduwen.
function toggleNav() {
    var sidenav = document.getElementById("mySidebar"),
    trunk = document.getElementById("trunk");
    sidenav.style.width = sidenav.style.width === "250px" ? '0' : '250px';
    trunk.style.marginRight = trunk.style.marginRight === "250px" ? '0' :  '250px';
}

// Set the width of the sidebar to 0 and the left margin of the page content to 0 
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("trunk").style.marginRight = "0";
}
