const flash = document.querySelector(".flash");

var menuLinks = document.querySelectorAll("#menu a");

// get all the links in the menu
var menuLinks = document.querySelectorAll("#menu a");

// loop through all the links and add a click event listener to each one
for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function (event) {
    // prevent the default link behavior
    event.preventDefault();

    // get the href attribute of the link that was clicked
    var target = this.getAttribute("href");

    // find the section with the matching id
    var section = document.querySelector(target);

    // calculate the distance from the top of the page to the section
    var sectionTop = section.offsetTop;

    // smoothly scroll to the section with a transition effect
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  });
}

flash.addEventListener("mouseenter", function () {
  flash.classList.toggle("flash-black");
});

flash.addEventListener("mouseleave", function () {
  flash.classList.toggle("flash-black");
});
