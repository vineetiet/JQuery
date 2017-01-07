$(document).ready(function(){


	$(".faq_question").click(function(){

		//figure out whether the question is aleady opened or not.
		if($(this).parent().is('.open')){


			$(this).parent('.faq').find('.faq_answer_container').animate({'height':'0'}, 500); //animated property
			$(this).parent('.faq').find('.letter_a').fadeOut(500);
			$(this).parent('.faq').find('.letter_q').animate({'left':'25px'});
			$(this).parent('.faq').removeClass('open');

		}else{

			var newHeight = $(this).parent('.faq').find('.faq_answer').height() + "px";
			$(this).parent('.faq').find('.faq_answer_container').animate({'height':newHeight}, 500); //animated property
			$(this).parent('.faq').find('.letter_q').animate({'left':'10px'});
			 $(this).parent('.faq').find('.letter_a').fadeIn(500); // 500ms
			$(this).parent('.faq').addClass('open');
		}
	});


	$('.faq').each(function(){

		$(this).append('<div class="letter_q"></div><div class="letter_a"></div>');
	});

	findAnchorLink();

});

function findAnchorLink(){

	if(location.href.indexOf('#') != -1){  //http://localhost:3000/index.html#barchart.. this will check if the browser has # in url request

		var nameAnchor = window.location.hash; // get the hash content : #barchart will be returned
		var faqToFind = nameAnchor + ' '+ '.faq_question'; // appending #barchart to .faq_question and triggering click.
													       // click method will be called on .faq_question, we are on .faq_question element. 
		$(faqToFind).trigger('click');
	}
}