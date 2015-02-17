$(document).ready(function () {
	var panes = $("#panes").children(".pane");
	var cur = 0;

	// for (i = 0; i < panes.length; i++) {
	// 	panes.eq(i).css("opacity", "0");
	// };

	function autoAdvance() {
		clearInterval(timer);
		panes.eq(i % panes.length).fadeOut(1000);
		panes.eq((i + 1) % panes.length).fadeIn(1000);
	};

	function advance() {
		panes.eq(i % panes.length).fadeOut(1000);
		panes.eq((i + 1) % panes.length).fadeIn(1000);
	};

	function rewind() {
		panes.eq(i % panes.length).fadeOut(1000);
		panes.eq((i + panes.length - 1) % panes.length).fadeIn(1000);
	};

	$("#prev").click(rewind());
	$("#next").click(advance());

	var timer = setInterval(autoAdvance(), 5000);
});