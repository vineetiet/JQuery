
var startingItem = 3;

$(document).ready(function(){

	$('.carousel_data .carousel_item').each(function(){

			$('#carousel').append($(this).find('.image').html());
	});

	createCarousel();
	createCustomButtons();
	showCaption();
});

function createCarousel(){


	$('#carousel').roundabout({

		startingChild: window.startingItem,

		childSelector: 'img',
		tilt: -4.5,
		minOpac: 1,
		minScale: .45,
		duration: 1200,
		clickToFocus: true,
		clickToFocusCallback:showCaption
	});
}

function createCustomButtons(){

	$('.nextItem').click(function(){

			hideCaption();

			$('#carousel').roundabout('animateToNextChild', showCaption);
			showCaption();
	});

	$('.preItem').click(function(){

			hideCaption();

			$('#carousel').roundabout('animateToPreviousChild', showCaption);

	});

	$('#carousel img').click(function(){

		hideCaption();
	});


}


function showCaption(){


	var childInFocus = $('#carousel').data('roundabout').childInFocus
	var setCaption = $('.caption:eq('+childInFocus+')').html();

	$('#captions').html(setCaption);

	var newHeight = $('#captions').height();
	$('.caption_container').animate({
		'height': newHeight
	}, 500, function(){

		$('#captions').animate({'opacity':1}, 250);

	});


}

function hideCaption(){

	$('#captions').animate({

		'opacity':0
	}, 1000)
}