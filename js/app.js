$(document).ready(function() {
	$(".title").click(function() {
		$(".container").addClass("open");
	});

	$(".close").click(function() {
		$(".container").removeClass("open");
	});

	const FIVE_SECONDS_MS = 5000;
	let names = ["Mari", "Gorgeous", "Baby"],
		index = 0,
		to = $(".to");
	setInterval(function() {
		if (index >= names.length) {
			index = 0;
		}

		to.text(names[index]);
		index = (index + 1);
	}, FIVE_SECONDS_MS);
});
