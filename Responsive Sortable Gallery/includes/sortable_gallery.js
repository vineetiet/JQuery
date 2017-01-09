
var thumbnailSpacing = 15;

$(document).ready(function(){

	$('.gallery .sorting').css('margin-bottom', window.thumbnailSpacing+'px');
	$('.thumbnail_container a.thumbnail').addClass('showMe');


	$('a.sortLink').click(function(e){

		e.preventDefault();
		$('a.sortLink').removeClass('selected');
		$(this).addClass('selected');

		var keyword = $(this).attr('data-keyword');
		sortThumbnails(keyword);
		
	});


	positionThumbnails();
});

function sortThumbnails(keyword){

	$('.thumbnail_container a.thumbnail').each(function(){

		if(keyword == 'all'){

			$(this).addClass('showMe').removeClass('hideMe');

		}else{

			if($(this).attr('data-keywords').indexOf(keyword) != -1){

				$(this).addClass('showMe').removeClass('hideMe');
			}else{

				$(this).addClass('hideMe').removeClass('showMe');
			}
		}
	});

	positionThumbnails();

}


function positionThumbnails(){

	$('.debug-remainder').html();

	$('.thumbnail_container a.thumbnail.hideMe').animate({opacity:0}, 500, function(){

		$(this).css({

			'display':'none',
			'left': '0px',
			'top': '0px'
		});

	}) ///this function will run after the execution of the animation

	var thumbnailR = 0;
	var thumbnailC = 0;

	var containerWidth = $('.photos .thumbnail_container').width();
	var thumbnailWidth = $('a.thumbnail img:first-child').outerWidth() + thumbnailSpacing;
	var thumbnailHeight = $('a.thumbnail img').first().outerHeight() + thumbnailSpacing;
	var maxC = Math.floor(containerWidth / thumbnailWidth);

	$('.thumbnail_container a.thumbnail.showMe').each(function(index){

			var remainder = (index%maxC)/100;


			$('.debug-remainder').append(remainder+'-');

			if(remainder == 0){

				if(index != 0){

					thumbnailR = thumbnailR + thumbnailHeight

				}

				thumbnailC = 0
			}else{

					thumbnailC = thumbnailC + thumbnailWidth;
					//thumbnailR = thumbnailR + thumbnailHeight: No need to mention the height.

			}

			$(this).css('display', 'block').animate({

				'opacity': 1,
				'left': thumbnailC +'px',
				'top': thumbnailR + 'px'

			}, 500);
	});


	var containerWidth = maxC * thumbnailWidth;
	var containerHeight = thumbnailR + thumbnailHeight;

	$('.thumbnail_container').css({
		'width': containerWidth + 'px',
		'height': containerHeight + 'px'

	}
		)

}