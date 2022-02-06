sidebar = document.getElementById("sidebar");
wholepage = document.getElementById("wholepage");
arrow = document.getElementById("arrow");
closeSB = document.getElementById("closeSideBar");
futureAlert = document.getElementsByClassName("future");

// // Open SideBar
function openSB() {
  sidebar.style.width = "250px";
  wholepage.style.marginLeft = "250px";
  setTimeout(function () {
    arrow.style.opacity = "0";
  }, 100);

}
// Close SideBar
function closeSideB() {
  sidebar.style.width = "0px";
  wholepage.style.marginLeft = "0px";
  arrow.style.opacity = "1";
}


// Responsive Navbar 
var nav = document.getElementById("navbar");
var home = document.getElementById("home");

home.addEventListener('click', function () {
  if (nav.style.height === "100vh") {
    nav.style.height = "0vh";
  } else {
    nav.style.height = "100vh";
  }
})

// Coming Soon
Array.from(futureAlert).forEach((element) => {
  element.addEventListener("click", (e) =>{
    alert("Coming Soon...");
  })
})