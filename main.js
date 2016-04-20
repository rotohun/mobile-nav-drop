jQuery(document).ready(function($) {
	
	//create a select and appened to menu

	var $select = $("<select></select>");
	$('.menu').append($select);

	//cycle over menu links
	$('.menu a').each(function() {

		var $anchor = $(this);

		//Create an option
		var $option = $("<option></option>");

		if ($anchor.parent().hasClass('selected')) {

			$option.prop("selected", true)

		}


		// options value is the href
		$option.val($anchor.attr('href'));
		//options text is the text of link


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

		window.location = $select.val();

	});
		//Go to select's location

	// Deal with selected options depending on the page.

});