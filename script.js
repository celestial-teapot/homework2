$(document).ready(function() {
	 $(window).load(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth > 768) {
        $('#root').removeClass()
        		  .addClass('container-desktop');
    } else if (viewportWidth > 640) {
    	 $('#root').removeClass()
        		  .addClass('container-tablet');
    } else {
    	$('#root').removeClass()
        		  .addClass('container-mobile');
    }
 });
})

$(window).resize(function () {
    var viewportWidth = $(window).width();
     if (viewportWidth > 768) {
        $('#root').removeClass()
        		  .addClass('container-desktop');
    } else if (viewportWidth > 640) {
    	 $('#root').removeClass()
        		  .addClass('container-tablet');
    } else {
    	$('#root').removeClass()
        		  .addClass('container-mobile');
    }
});