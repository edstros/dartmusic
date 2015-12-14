/*global $:false */

/*first we cache the vars for speed and conveneience*/
var $trigger = $('.trigger');
var $target = $('.target');


$(function () {
/*it starts with a click on the button, which calls grow()*/
  $trigger.click(function () {
    grow();
  });

/*grow () animates the circle*/
  function grow() {
    $target.animate({
      height: '200px',
      width: '200px'
    }).delay(3000);//waits three seconds
    goBlue();//turns blue
    revert(); //then calls the function to go back to the smaller size and turn red
    $trigger.hide();//i hid the button because i found that i could screw this code up when it was clicked multiple times
  }

/*this turns the div blue*/
  function goBlue() {
    $target.css({
      backgroundColor: 'blue'
    });
  }
/*this turns the div red*/
  function goRed() {
    $trigger.show();
    $target.css({
      backgroundColor: 'red'
    });
  }
/*this is the callback to grow(), reverting the div back to original state*/
  function revert() {
    $target
      .animate({
        height: '100px',
        width: '100px'
      }, 200, function () {
        goRed();
      });
  }
});
