
const navbar = document.querySelector(".navbar");

let prevScrollPos = window.pageYOffset;

// adding an eventlistner to trigger when scrolling
addEventListener("scroll", ()=> {
  let currentScrollPos = window.pageYOffset;

  //  scrolling down hide class will hide the navbar
 if (currentScrollPos > prevScrollPos) {
 	navbar.classList.add('hide');
 }

// when scrolling up hide class will be removed 
 if (currentScrollPos < prevScrollPos) {
 	navbar.classList.remove('hide');
 }

 prevScrollPos = currentScrollPos;
});