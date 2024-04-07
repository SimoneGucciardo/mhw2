function accesso() {
  let login = document.querySelector(".login");
  login.classList.add("visualizza");
}
function exit() {
  let login = document.querySelector(".login");
  login.classList.remove("visualizza");
}
let accedi = document.querySelector(".wrapper-header button");
accedi.addEventListener("click", accesso);
let uscita = document.querySelector("#esci");
uscita.addEventListener("click", exit);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}
