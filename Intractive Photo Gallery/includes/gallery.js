$(document).ready(function(){ //make sure that all scripts and HTML and text are downloaded from the particular page but it does not do download images.
								//We can preload images, there are lots of plugin online We use farinsspace plugin which will preload the images.

	
	$('.gallery_thubnails a').click(function(e){

		e.preventDefault();


		//update thumbnails
		//$('.gallery_thubnails a').removeClass('selected');
		//$('.gallery_thubnails a').children().css('opacity', '1');

		//$(this).addClass('selected');
		//$(this).children().css('opacity', '.4');

		
		//set up vars from thumbnail
		var fullImage = $(this).attr('href');
		var previewImage = fullImage.replace('_fullsize.jpg','_preview.jpg');
		var caption = $(this).attr('title');


		$('.gallery_caption').slideUp(500);
		$('.gallery_preview').fadeOut(500, function(){


			//we want to make sure that images is preloaded before executing the next line.
			$('.gallery_preload_area').html('<img src="'+previewImage+'"</>');
			$('.gallery_preload_area img').imgpreload(function(){ //this function will run once the preload has happended.

				$('.gallery_preview').html('<a class="overlaylink" href="'+fullImage+'" title="'+caption+'" style="background-image:url('+previewImage+');"></a>');

				$('.gallery_caption').html('<p><a class="overlaylink zoom" href="'+fullImage+'" title="'+caption+'">View Larger</a></p><p>'+caption+'</p>');


				$('.gallery_preview').fadeIn(500);
				$('.gallery_caption').slideDown(500);

				setFancyBoxLinks();
				updateThumnails();

			});



			



		});
		

		
	});

	$('.gallery_thubnails a').first().trigger('click');
});

function setFancyBoxLinks(){

	$('a.overlaylink').fancybox({

		'titlePosition' : 'over',
		'overlayColor' : '#000',
		'overlayOpacity' : 0.8,
		'transitionOut': 'elastic',
		'transitionIn' : 'elastic',
		'autoscale': true
	});
}

function updateThumnails(){

	$('.gallery_thubnails a').each(function(){

		if($(this).attr('href') == $('.gallery_preview a').attr('href')){

			

		$(this).addClass('selected');
		$(this).children().fadeTo(250, .4);

		}else{

			$(this).removeClass('selected');
			$(this).children().css('opacity', '1');
		}
	});
}