
$(document).ready(function(){

	inject_markup();
});


function inject_markup(){

	$('.exapnding_panel').each(function(){ //fetching all the div's with the class name of .exapnding_panel and looping throigh.

		var text = $(this).attr("data-link-text");
		var content = $(this).html(); //this will return the entire HTML element (all child elemenet excluded panel)
		$(this).html('<div class="exapnding_panel_content_container" style="height:0px;"><div class="exapnding_panel_content">'+content+'</div></div>')
		$(this).append('<div class="exapnding_panel_trigger">'+text+'</div>') //appening the div.

		// If the javascript properly load then we will hide the content

	});

	activatePanels();
}

function activatePanels(){

	$('.exapnding_panel_trigger').click(function(){



		

		$(this).parent().toggleClass('open'); // if the selected panel doesn not have class open this will added, if if it 
		// does not have class open then toggle class remove the open class.

		// $(this).css('overflow', visible');

		if($(this).parent().hasClass('open')){ //adding the open class to diffrentaite the content container.

			 newHeight = $(this).parent().find('.exapnding_panel_content').outerHeight(true) + "px";
			//putting true which will tell take into the account any margin properties in the panel content.


		}else{

			 newHeight = 0 +"px";
		}

		$(this).parent().find('.exapnding_panel_content_container').animate({'height': newHeight}, 1000, function(){

			if(newHeight != 0){

				$(this).parent().find('.exapnding_panel_content_container').removeAttr("style"); //removing attribute so that flexible container could be applied (height will be dynamically defined by the container rather use the previously defined height)
			}

		}); //1000ms.. this function will execute after the height is applied
	});

}