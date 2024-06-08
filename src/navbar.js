const header = document.querySelector(".header");

let prevScrollPos = window.pageYOffset;

// adding an eventlistner to trigger when scrolling
addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;

  //  scrolling down hide class will hide the navbar
  if (currentScrollPos > prevScrollPos) {
    header.classList.add("hide");
  }

  // when scrolling up hide class will be removed
  if (currentScrollPos < prevScrollPos) {
    header.classList.remove("hide");
  }

  prevScrollPos = currentScrollPos;
});
