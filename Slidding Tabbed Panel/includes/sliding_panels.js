var panelWidth = 0;

$(document).ready(function(){

	panelWidth = $('.sp').width(); //325px;

	$('.panel').each(function(index){

		$(this).css({

			'left': (index * panelWidth) + 'px',
			'width': panelWidth

		});


	 $('.panels').css({

	 	'width': (index+1)* (panelWidth)
	 });
	});


	$('.tabs span').click(function(){

		$('.tabs span').removeClass('selected');
		$(this).addClass('selected');

		changePanels($(this).index());


	});

	$('.tabs span:nth-child(2)').trigger('click');

});

function changePanels(newIndex){

	var newPannelPosition = (panelWidth * newIndex) * -1;
	var newPannelHeight = $('.panel:nth-child('+(newIndex+1)+')').find('.panel_content').height() + 15;

	$('.panels').animate({left: newPannelPosition}, 1000);

	$('.panel_container').animate({height: newPannelHeight}, 1000);

	$()
	
}