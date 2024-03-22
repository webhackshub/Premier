const scroll = new LocomotiveScroll({
  el: document.querySelector('main'),
  smooth: true
});

const cardEffect = document.querySelectorAll(".card")

cardEffect.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    card.childNodes[5].style.display = "block"
  })
  card.addEventListener("mouseleave", function () {
    card.childNodes[5].style.display = "none"
  })
})