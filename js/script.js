/**
 * Example of calling the plugin
 */

//Apply locksroll function to header menu
$(document).ready(function() {
	$('div#sidebar').lockScroll({
		'triggerElement' : $('div#footer'), //Use the first comment to trigger the scrolling
	});
});