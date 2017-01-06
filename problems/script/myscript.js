// $ -> calling the JQuery lib. And using the document keyword which indicate that we are 
// performing the operation on page itself.
// ready sets up event listner when the DOM is loaded. 
// diffrence between  window.load and ready method is, window.load method only operates when 
// DOM is fully loaded but it's not case with the ready method of JQuery.

$("document").ready(function(){ //passing the callback function to ready.
	//This call back function is an event handler that would fire when the ready event is triggered.


	//Performing an operation on element #content.
	$("#content").append('<p>The page just loaded');

});