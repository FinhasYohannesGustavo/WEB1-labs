// $('#move').click(function(){
//     // alert('click me')
//     $('#button').hide(2000)
// })

// $('#stop').click(function(){
//     // alert('click me')
//     $('#button').show(2000)
// })

// $('#move').click(function(){
//     $('#button').fadeOut(2000)
// })

// $('#stop').click(function(){
//     $('#button').fadeIn(2000)
// })

// $('#move').click(function(){
//     $('#button').slideDown(2000)
// })

// $('#move').click(function(){
//     let timer = setInterval(animateBall,2000);
// })

// $('#stop').click(function(){
//     var div = $('#button');
//     div.css({'position':'relative'})
//     div.animate({left:10,top:10},'slow')
// })

// function animateBall(){
//     var div = $('#button');

//     // .css is a method like click for JQuery
//     div.css({'background-color':'red','position':'relative'});
//     let w = window.innerWidth;
//     let h=  window.innerHeight;

//     div.animate({left:10,top:10},'slow')
//     div.animate({left:w/2,top:10},'slow')
//     div.animate({left:w/2,top:h/2},'slow')
//     div.animate({left:10,top:h/2},'slow')

// }

function animateBallTriangle(){
    var div = $('#button');

    // .css is a method like click for JQuery
    div.css({'background-color':'red','position':'relative'});
    let w = window.innerWidth;
    let h=  window.innerHeight;


    div.animate({left:10,top:h/2},'slow')
    div.animate({left:w/2,top:10},'slow')
  
    div.animate({left:w -200,top:h-200},'slow')
    div.animate({left:10,top:h-200},'slow')

}

let timer;
$('#move').click(function(){
     timer = setInterval(animateBallTriangle,2000);
})

// $('#stop').click(function(){
//     $('#button').stop();
// })



$('#stop').click(function(){
    // This stops the 
    clearInterval(timer)
    $('#button').stop(true);
})





