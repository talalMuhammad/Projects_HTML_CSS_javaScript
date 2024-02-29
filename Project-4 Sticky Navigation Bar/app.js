window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 230) {
    document.querySelector("#navDiv").setAttribute("class", "sticky");
  } else {
    document.querySelector("#navDiv").removeAttribute("class");
  }
});
