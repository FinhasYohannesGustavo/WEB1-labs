let pre = document.querySelector('.pre');
let next = document.querySelector('.next');
let title = document.querySelector('.title');
let slider = document.querySelectorAll('.slider img');
let imgs = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg'
];
slider[0].style.opacity = 0.2;
let current = 0;
title.style.backgroundImage = `url(${imgs[current]})`;
let imgLength = imgs.length - 1;

// Event listener for slider images
slider.forEach((sliderImg, index) => {
  sliderImg.addEventListener('click', function() {
    current = index;
    title.style.backgroundImage = `url(${imgs[current]})`;
    console.log(current);
  });
});

pre.addEventListener('click', function() {
  current--;
  current < 0 ? (current = imgLength) : "";
  console.log(current);
  title.style.backgroundImage = `url(${imgs[current]})`;
});

next.addEventListener('click', function() {
  current++;
  current > imgLength ? (current = 0) : "";
  console.log(current);
  title.style.backgroundImage = `url(${imgs[current]})`;
});