$(document).ready(function () {
	animateDiv(".bee-container");
});

function makeNewPosition($game) {
	// Get viewport dimensions (remove the dimension of the div)
	$game = $game || $(window);
	var h = $game.height() - 100;
	var w = $game.width() - 100;

	var nh = Math.floor(Math.random() * h);
	var nw = Math.floor(Math.random() * w);

	return [nh, nw];
}

function animateDiv(div) {
	var newPosition = makeNewPosition();
	$(div).animate({ top: newPosition[0], left: newPosition[1] }, 1000, function () {
		animateDiv(div);
	});
}
