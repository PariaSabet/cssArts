$(document).ready(function () {
	// Get the container element
	const $container = $(".bee-container");
	animateDiv(".insect", $container);
});

function makeNewPosition($container) {
	// Use container dimensions instead of window
	var h = $container.height() - 150; // Subtract bee height
	var w = $container.width() - 100;  // Subtract bee width

	// Get container's offset position
	var containerOffset = $container.offset();
	
	// Calculate random position within container bounds
	var nh = Math.floor(Math.random() * h);
	var nw = Math.floor(Math.random() * w);

	return [nh, nw];
}

function animateDiv(div, $container) {
	var newPosition = makeNewPosition($container);
	
	// Ensure the element stays within the container
	$(div).css('position', 'absolute')  // Make sure position is absolute
		  .animate({ 
			  top: newPosition[0], 
			  left: newPosition[1] 
		  }, 1000, function() {
			  animateDiv(div, $container);
		  });
}

document.addEventListener('DOMContentLoaded', function() {
	const masonry = document.querySelector(".masonry");
	
	if (!masonry) {
		console.error("Masonry container not found");
		return;
	}

	function getRandomBrickColor() {
		const hue = Math.random() * 20 + 10;
		const saturation = Math.random() * 20 + 70;
		const lightness = Math.random() * 20 + 40;
		return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
	}

	function createMasonryBricks(count) {
		masonry.innerHTML = ''; // Clear existing bricks
		for (let i = 0; i < count; i++) {
			const brick = document.createElement("div");
			brick.classList.add("brick");

			if (Math.random() > 0.8) brick.classList.add("tall");
			if (Math.random() > 0.8) brick.classList.add("wide");

			brick.style.backgroundColor = getRandomBrickColor();
			masonry.appendChild(brick);
		}
	}

	createMasonryBricks(100);
});


