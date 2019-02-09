jQuery.fn.isInViewport = function(h) {
    var elH      = jQuery(this).outerHeight(),
        scrolled = jQuery(window).scrollTop(),
        viewed   = scrolled + jQuery(window).height(),
        elTop    = jQuery(this).offset().top,
        elBottom = elTop + elH,
        h        = (typeof(h) != 'undefined' && h.length) ? h : 0.4;

    return (elTop + elH * h) <= viewed && (elBottom - elH * h) >= scrolled;
};

jQuery.fn.randomDelay = function(children,maxDelay,minDelay) {
	jQuery(this).find(children).each(function(){

	    var item = jQuery(this);
	    var randomDelay = Math.round(( Math.random() * ( maxDelay - minDelay ) + minDelay ));

	    item.css('animation-delay',randomDelay+'ms');

	});
}

jQuery.fn.sequentialDelay = function(children,delayGap) {
	jQuery(this).find(children).each(function(index){

	    var item = jQuery(this);
	    var sequentialDelay = delayGap*index;

	    item.css('animation-delay',sequentialDelay+'ms');

	});
}

jQuery.fn.animateIfInViewport = function(children) {

	var element = jQuery(this);

	if (children) {
		element.find(children).each(function(){
	        var child = jQuery(this);
	        if(child.isInViewport()){
	            child
	            .addClass(child.data('animation'))
	            .addClass('animated');
	        }
	    });
	} else {
		if(element.isInViewport()){
	        element
	        .addClass(element.data('animation'))
	        .addClass('animated');
	    }
	}
}

;(function($){

	"use strict";

	/* #row-title
	-----------------*/

		$('#row-title')
		.animateIfInViewport('.col');

	/* .section-title
	-----------------*/

		$('.section-title').each(function(){
			$(this).animateIfInViewport();
		});

	/* #row-fadeInUp
	-----------------*/

		$('#row-fadeInUp')
		.sequentialDelay('.col',100);

		$('#row-fadeInUp')
		.animateIfInViewport('.col');

	/* #row-bounceIn
	-----------------*/

		$('#row-bounceIn')
		.randomDelay('.col',500,200);

		$('#row-bounceIn')
		.animateIfInViewport('.col');

	/* #row-fadeIn
	-----------------*/

		$('#row-fadeIn')
		.sequentialDelay('.col',50);

		$('#row-fadeIn')
		.animateIfInViewport('.col');

	/* #row-flipInY
	-----------------*/

		$('#row-flipInY')
		.randomDelay('.col',500,200);

		$('#row-flipInY')
		.animateIfInViewport('.col');

	/* #row-jackInTheBox
	-----------------*/

		$('#row-LeftRight')
		.animateIfInViewport('.col');

	/* scroll
	-----------------*/

		$(window).scroll(function(){

			$('#row-title').animateIfInViewport('.col');

			$('#row-fadeInUp').animateIfInViewport('.col');

			$('#row-bounceIn').animateIfInViewport('.col');

			$('#row-fadeIn').animateIfInViewport('.col');

			$('#row-flipInY').animateIfInViewport('.col');

			$('#row-LeftRight').animateIfInViewport('.col');

			$('.section-title').each(function(){
				$(this).animateIfInViewport();
			});
		});

})(jQuery);