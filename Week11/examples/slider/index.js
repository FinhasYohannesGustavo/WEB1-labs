let pre=document.querySelector('.pre');
let next=document.querySelector('.next');
let title=document.querySelector('.title');
let slider=document.querySelectorAll('.slider img');
let sliderImgs = document.querySelector('.slider img');
let imgs=
['images/1.jpg',
'images/2.jpg',
'images/3.jpg',
'images/4.jpg'];
slider[0].style.opacity=0.2;
var current=0;
title.style.backgroundImage=`url(${imgs[current]})`;
let imgLength=imgs.length -1;


sliderImgs.addEventListener('click',function(){
    var imgg=sliderImgs;
    // imgg.style.height='100vh'

    title.style.backgroundImage=`url(${sliderImgs[0]})`;
    console.log(sliderImgs)
})

pre.addEventListener('click',function(){
    current--
    current<0?current=imgLength:""
    console.log(current);
    title.style.backgroundImage=`url(${imgs[current]})`;
})

next.addEventListener('click',function(){
    current++
    current>imgLength?current=0:''
    title.style.backgroundImage=`url(${imgs[current]})`;
    console.log(current);
})