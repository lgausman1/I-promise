$(document).ready(function () {

	var promise = $.getJSON('kitties.json');
	promise.done(function(results) {

		$.each(results, function (ind, obj) {
			console.log(obj.name);
			$('.container').append("<div class='col-md-4'>" 
				+ "<h3>" + obj.name + "</h3>"
				+ "<img src='" + obj.photo + "'</>"
				+ "<p>" + obj.description + "</p>"
				+ "</div>");
		});

	});
	promise.fail(function() {
		console.log("fail");
	});

});

