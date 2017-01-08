$(document).ready(function(){


	$('.tooltip').mouseover(function(e){

		//what type of the tooptip we are looking at.
		var tooltipType = $(this).attr('data-tip-type');

		if(tooltipType == 'text'){

			//display the toop tip.
			$('#tooltip_container').html($(this).attr('data-tip-source'));
		}

		if(tooltipType == 'html'){

			var tooTipId = '#' + ($(this).attr('data-tip-source'));
			var newHtml = $(tooTipId).html();
			//display the toop tip.
			$('#tooltip_container').html(newHtml);
		}

		$('#tooltip_container').css('display', 'block');
		$('#tooltip_container').css('opacity', 0);
		$('#tooltip_container').animate({opacity:1}, 250);

	}).mousemove(function(e){ //this will be the mouse move event.

		pageWidth = $('body').width()/2;

		width = $('#tooltip_container').outerWidth();
		height = $('#tooltip_container').outerHeight();

		if(pageWidth < e.pageX){ //position from x of the view port

		//now we need to moving the tooltip container to match with user mouse.
		$('#tooltip_container').css('left', (e.pageX-width +20) + 'px') ;//e.pageX will tell the mouse position.

		}else{

			$('#tooltip_container').css('left', (e.pageX-20) + 'px') ;

		}

		if(e.pageY > 100){

			$('#tooltip_container').css('top',(e.pageY-(height+20)) + "px");
		}else{

			$('#tooltip_container').css('top', (e.pageY+20) + 'px');

		}

		
		

	}).mouseout(function(e){

		
		$('#tooltip_container').animate({opacity:0},250, function(){ //this function will be executed when
			// the opacity becomes 0 with the anitmate and then it will call this function to make 
			// display to none.

			$('#tooltip_container').css('display', 'none').html(''); //wipe out the html content.
		
			 $('#tooltip_container').removeAttr('style');

		});
		

	});

});