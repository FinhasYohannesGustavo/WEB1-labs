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


// $('#button').click(function(){
//   timer = setInterval(animateBallTriangle,2000);
// })

// $('#stop').click(function(){
//     $('#button').stop();
// })


$(document).ready(function() {
  var container = $('#container');
  container.css({'background-color':'black','position':'relative','height':'100vh','width':'100%'});
  var ball = $('#button');
  ball.css({'position':'relative'})

 
  $(document).keydown(function(e) {
    var ball = $(".box");
    var container = $("#container");
    var containerWidth = container.width();
    var containerHeight = container.height();
    var stepSize = 30;
  
    switch (e.which) {
      case 37: // Left arrow key
        var newLeft = parseInt(ball.css('left')) - stepSize;
        if (newLeft >= 0) {
          ball.finish().animate({
            left: newLeft
          });
        }
        break;
      case 38: // Up arrow key
        var newTop = parseInt(ball.css('top')) - stepSize;
        if (newTop >= 0) {
          ball.finish().animate({
            top: newTop
          });
        }
        break;
      case 39: // Right arrow key
        var newRight = parseInt(ball.css('left')) + stepSize;
        if (newRight <= containerWidth - ball.width()) {
          ball.finish().animate({
            left: newRight
          });
        }
        break;
      case 40: // Down arrow key
        var newBottom = parseInt(ball.css('top')) + stepSize;
        if (newBottom <= containerHeight - ball.height()) {
          ball.finish().animate({
            top: newBottom
          });
        }
        break;
    }
  });

  
  function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
  }

  function animateDiv(obj){
    
    var newq = makeNewPosition();
    var oldq = obj.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    obj.animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv(obj);        
    });
    
  };
  
  function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.4;
    
    var speed = Math.ceil(greatest/speedModifier);
    
    return speed;
    
  }
  
  
$(document).ready(function(){
    var player= $('.box');
    var eater1= $('.box2');
    var eater2= $('.box3');
    animateDiv($(eater1));
    animateDiv($(eater2));      
  });

  function collision(obj1, obj2) {
    var x1 = obj1.offset().left;
    var y1 = obj1.offset().top;
    var h1 = obj1.outerHeight(true);
    var w1 = obj1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = obj2.offset().left;
    var y2 = obj2.offset().top;
    var h2 = obj2.outerHeight(true);
    var w2 = obj2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
      
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }
  
  var player= $('.box');
  var eater1= $('.box2');
  var eater2= $('.box3');
  window.setInterval(function() {
   
    if(collision(player,eater1)||collision(player,eater2)){
        location.reload();
    }
  }, 20);
  
  // var timer;
  
  // $('#move').click(function(){
  //   timer = setInterval(animateBallTriangle, 2000);
  // });

  // $('#stop').click(function(){
  //   clearInterval(timer);
  //   $('#button').stop(true);
  // });
});

// function animateBallTriangle(){
//   var div = $('#button');
//   div.css({'background-color':'red','position':'relative'});
//   let w = window.innerWidth;
//   let h = window.innerHeight;

//   div.animate({left: 10, top: h/2}, 'slow');
//   div.animate({left: w/2, top: 10}, 'slow');
//   div.animate({left: w - 200, top: h - 200}, 'slow');
//   div.animate({left: 10, top: h - 200}, 'slow');
// }




