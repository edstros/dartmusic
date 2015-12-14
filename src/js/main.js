/*global $:false */
var $trigger = $('.trigger');
var $target = $('.target');
$(function () {
  $trigger.click(function () {
    grow();
  });

  function grow() {
    $target.animate({
      height: '200px',
      width: '200px'
    }).delay(3000);
    goBlue();
    revert();
    $trigger.hide();
  }

  function goBlue() {
    $target.css({
      backgroundColor: 'blue'
    });
  }

  function goRed() {
    $trigger.show();
    $target.css({
      backgroundColor: 'red'
    });
  }

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
