var $ = (selector) => document.querySelector(selector);
var a = document.querySelectorAll;

var carouselChildren = $(".carousel-inner").children;
carouselChildren = Array.from(carouselChildren);
var nextIndex = 0;

carouselChildren.forEach((item, index) => {
  var dotEl = document.createElement("span");
  dotEl.innerHTML = `<i class="fa-regular fa-circle"></i>`;
  $(".carousel-dots").appendChild(dotEl);
});
$(".carousel-dots")
  .querySelectorAll("span")
  [nextIndex].querySelector("i")
  .classList.add("changeColor");
const dots = $(".carousel-dots").querySelectorAll("span");
dots.forEach((dot, index) => {
  dot.querySelector("i").addEventListener("click", function () {
    // dots.forEach((d) => (d.style.color = ""));
    var checkColor = document.querySelector("i.changeColor");
    dot.querySelector("i").classList.add("changeColor");
    nextIndex = index;
    // Set clicked dot color to yellow
    if (checkColor) {
      checkColor.classList.remove("changeColor");
    }
    var checkImg = document.querySelector(".carousel-inner .item.active");
    carouselChildren[index].classList.add("active");
    if (checkImg) {
      checkImg.classList.remove("active");
    }
  });
});

function next(e) {
  // e.preventDefault();

  if (nextIndex + 1 === carouselChildren.length) {
    return;
  }
  x;
  carouselChildren[nextIndex].classList.remove("active");

  // carouselChildren[nextIndex].classList.remove("previous");
  nextIndex++;

  dots.forEach(function (dot, index) {
    if (index !== nextIndex) {
      var checkDots = dot.querySelector("i.changeColor");
      if (checkDots) {
        checkDots.classList.remove("changeColor");
      }
    } else {
      dot.querySelector("i").classList.add("changeColor");
    }
    console.log(index);
  });

  carouselChildren[nextIndex].classList.add("active");
}
$("#next").addEventListener("click", next);
function prev(e) {
  if (nextIndex + 1 === 1) {
    return;
  }
  carouselChildren[nextIndex].classList.remove("active");
  nextIndex--;
  dots.forEach(function (dot, index) {
    if (index !== nextIndex) {
      var checkDots = dot.querySelector("i.changeColor");
      if (checkDots) {
        checkDots.classList.remove("changeColor");
      }
    } else {
      dot.querySelector("i").classList.add("changeColor");
    }
  });
  carouselChildren[nextIndex].classList.add("active");
}
$("#prev").addEventListener("click", prev);
//tạo dot theo con
