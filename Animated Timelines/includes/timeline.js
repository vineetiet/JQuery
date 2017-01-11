
var timelineWidth = 0;
var panelWidth = 0;
var firstRun = true;
var totalPanel = 0;
var currentPanel = 0;
var multiplier = 0;


$(document).ready(function(){

	panelWidth = $('.panel:first').width();
	timelineWidth = $('.timeline').width();

	totalPanels = $('.panel').length;
	adjustLayout();


});

function adjustLayout(){

	$('.panel').each(function(index){

		var newWidth = panelWidth * index;
		$(this).css('left',newWidth);

		var newLabel = $(this).find('.label').html();
		$('.timeline nav').append('<a href="#">'+newLabel+'</a>');

	});


	currentPanel = $('nav a:last-child').index();

	activateNavigation();
	

	

}

function activateNavigation(){

	$('nav a').on('click', function(){

		currentPanel = $(this).index();
		$('nav a').removeClass('selected');
		$(this).addClass('selected');


		var timelineOffset = (timelineWidth - panelWidth)/2;

		var newPosition = ((currentPanel*panelWidth)*-1) + timelineOffset;
		$('.panel_slider').animate({left: newPosition + 'px'}, 1000);

		var backgroundWidth = $('.background_slider img').width();
		var moveAmount = (backgroundWidth - timelineWidth) / totalPanels;

		if(currentPanel != 0){

			  multiplier = currentPanel + 1;


		}else{

			  multiplier = 0;
		}

		var newBackgroundPosition = (moveAmount * multiplier)*-1;

		$('.background_slider img.background').animate({left: newBackgroundPosition + 'px'}, 1000);


	});
}