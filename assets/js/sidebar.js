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


// Haal band hieronder weg als sidebar band moet overlappen ipv wegduwen.
function toggleNav() {
    var sidenav = document.getElementById("mySidebar"),
    band = document.getElementById("band");
    setTimeout(function() { 
      sidenav.style.width = sidenav.style.width === "fit-content" ? '0' : 'fit-content';
    }, 300 , "ease-out");
    // band.style.marginRight = band.style.marginRight === "250px" ? '0' :  '250px';
}

// Set the width of the sidebar to 0 and the left margin of the page content to 0 
function closeNav() {
  setTimeout(function() { 
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("band").style.marginRight = "0";
  }, 300 , "ease-out");
}
