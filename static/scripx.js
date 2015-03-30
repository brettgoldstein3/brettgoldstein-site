$(document).ready(function(){
    
	//Tooltip Stuff: activates tool tips on hover over and when links above are hovered over

    $('[data-toggle="tooltip"]').tooltip();  

    $('a#ux-txt').hover(function(){
    	$('a#behance').tooltip('toggle');
    });
    $('a#mu-txt').hover(function(){
    	$('a#soundcloud').tooltip('toggle');
    });
    $('a#wr-txt').hover(function(){
    	$('a#medium').tooltip('toggle');
    });

});