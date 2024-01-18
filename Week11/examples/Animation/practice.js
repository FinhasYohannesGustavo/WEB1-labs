// $('.hide').click(function(){
//     var eater = $('.circle');
//     $('.circle').hide(2000)
// })

// $('.show').click(function(){
//     var eater = $('.circle');
//     $('.circle').show(2000)
// })

// $('.hide').click(function(){
//     var eater = $('.circle');
//     $('.circle').fadeOut(2000)
// })

// $('.show').click(function(){
//     var eater = $('.circle');
//     $('.circle').fadeIn(2000)
// })

$('.hide').click(function(){
    $('.circle').slideUp(1000);
})
$('.show').click(function(){
    $('.circle').slideDown(1000);
})

// $('.move').click(()=>{
//     var obj = $('.circle');
//     obj.css({'position':'relative', 'background-color':'red'});
//     obj.animate({left:100,top:100},'slow')
// })

$('.move').click(()=>{
    var obj = $('.circle');
    obj.css({'position':'relative', 'background-color':'red'});
    // setInterval(animateCircleRect(obj), 5000);
    setInterval(animateTriangle(obj), 5000);

})

function animateCircleRect(obj){
    w= window.innerWidth/2;
    h= window.innerHeight/2;
    obj.animate({left:10,top:10},'slow')
    obj.animate({left:w,top:10},'slow')
    obj.animate({left:w,top:h},'slow')
    obj.animate({left:10,top:h},'slow')
    obj.animate({left:10,top:10},'slow')

}

function animateTriangle(obj){
    w = window.innerWidth/2;
    h= window.innerHeight/2;
    obj.animate({left:w/2,top:10},'slow')
    obj.animate({left:w,top:h},'slow')
    obj.animate({left:10,top:h},'slow')
    obj.animate({left:w/2,top:10},'slow')    
}
