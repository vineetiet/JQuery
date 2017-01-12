$(document).ready(function(){

	$('#mapform').change(function(){

		

		var selectedContinet = $('#continent option:selected').val();

		if(selectedContinet == 'ALL'){

			$('a.dot').show(1000);
		}else{

			$('a.dot[continent*='+selectedContinet+']').show(1000);
			$('a.dot[continent!='+selectedContinet+']').hide(1000);
		}

	});

	$('a.dot').click(function(){

		var city = $(this).attr('city');
		$('a.dot').removeClass('selected');
		$(this).addClass('selected');

		var cityDetails = $('.city_detail#'+city).html();

		$('.detail_container .city_detail').fadeOut(500, function(){

			$('.detail_container .city_detail').html(cityDetails).fadeIn(500);
		});


	});
});