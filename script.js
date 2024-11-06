const menuIcon = document.querySelector("#menuIcon");
const closeIcon = document.querySelector("#closeIcon");
menuIcon.addEventListener("click", (e) => {
  menuIcon.classList.add("right-[-100px]");
  document.getElementById("navDiv").classList.remove("right-[-100%]");
  document.body.classList.add("overflow-y-hidden");
});
closeIcon.addEventListener("click", (e) => {
  document.getElementById("navDiv").classList.add("right-[-100%]");
  menuIcon.classList.remove("right-[-100px]");
  document.body.classList.remove("overflow-y-hidden");
});
