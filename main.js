jQuery(document).ready(function($) {
	
	//create a select and appened to menu

	var $select = $("<select></select>");
	$('.menu').append($select);

	//cycle over menu links
	$('.menu a').each(function() {

		var $anchor = $(this);

		//Create an option
		var $option = $("<option></option>");

		// options value is the href
		$option.val($anchor.attr('href'));
		//options text is the text of link

		var anchorText = $anchor.text();

		$option.text($anchor.text());

		//Append option to select
		$select.append($option);
	});

	// Create button
	var $button = $("<button> Go </button>");
	$(".menu").append($button);
	//Bind click to button
	$button.click(function(event) {
		event.preventDefault();

		$select.val();

	});
		//Go to select's location
	//modify css to hide links on small resolution and show button and select
	//Also hides select and button on larger resolutions
	// Deal with selected options depending on the page.

});