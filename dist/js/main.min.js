/*

*/
var $trigger=$(".trigger"),$target=$(".target");$(function(){function a(){$target.animate({height:"200px",width:"200px"}).delay(3e3),b(),d(),$trigger.hide()}function b(){$target.css({backgroundColor:"blue"})}function c(){$trigger.show(),$target.css({backgroundColor:"red"})}function d(){$target.animate({height:"100px",width:"100px"},200,function(){c()})}$trigger.click(function(){a()})});
