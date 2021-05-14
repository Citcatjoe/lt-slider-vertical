jQuery(document).ready(function($) 
{
	h = $( window ).height();
    h = h*0.8;

    $( "body" ).scroll(function() {
        $('.brand-nav').toggleClass('scrolled', $(this).scrollTop() > h);
    });

    

});
