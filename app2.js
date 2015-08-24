$(document).ready(function () {
	
	// jQuery's get returns a promise!
	var promise = $.get('kitties.json');
	promise.done(function(results) {

		$.each(results, function (ind, obj) {
			// compile json objects and render to dom
			$('.col-md-12').append("<div class='col-md-3 well margin45'>" 
				+ "<h3>" + obj.name + "</h3>"
				+ "<img class='margin-bottom10' src='" + obj.photo + "'</>"
				+ "<p>" + obj.description + "</p>"
				+ "</div>");
		});

	});
	promise.fail(function() {
		console.log("fail");
	});

});

