let flag = 0;

let controller = (num) => {
  flag = flag + num;
  slideShow(flag);
};

let slideShow = (num) => {
  let slides = document.querySelectorAll(".slide");

  if (num === slides.length) {
    flag = 0;
    num = 0;
  }

  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }

  for (let x of slides) {
    x.style.display = "none";
  }

  slides[num].style.display = "block";
};

slideShow(flag);
