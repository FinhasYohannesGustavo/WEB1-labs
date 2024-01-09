$(document).ready(function() {
    var ball = $('#ball');
    var stepSize = 10; // The distance the ball moves on each key press
    var container = $('#container');
  
    $(document).keydown(function(e) {
      var position = ball.position();
      var containerWidth = container.width();
      var containerHeight = container.height();
  
      switch (e.which) {
        case 37: // Left arrow key
          position.left -= stepSize;
          break;
        case 38: // Up arrow key
          position.top -= stepSize;
          break;
        case 39: // Right arrow key
          position.left += stepSize;
          break;
        case 40: // Down arrow key
          position.top += stepSize;
          break;
        default:
          return; // Exit the event handler for other key presses
      }
  
      // Restrict ball movement within the container
      position.left = Math.max(0, Math.min(position.left, containerWidth - ball.width()));
      position.top = Math.max(0, Math.min(position.top, containerHeight - ball.height()));
  
      ball.css({
        left: position.left,
        top: position.top
      });
  
      e.preventDefault(); // Prevent the default behavior of arrow keys scrolling the page
    });
  });