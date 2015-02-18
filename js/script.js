$(document).ready(function () {
	initCarousel();
})

function initCarousel() {
	var panes = $(".pane");
	var curPane = 0;
	var duration = 4000;
	var timer = setInterval(function(){autoAdvance()}, duration);

	$("#prev").click(function(){rewind()});
	$("#next").click(function(){advance()});

	panes.eq((curPane + 1) % panes.length).addClass("hidden");
	panes.eq((curPane + 2) % panes.length).addClass("hidden");

	function autoAdvance() {
		panes.eq((curPane + 0) % panes.length).addClass("hidden");
		panes.eq((curPane + 1) % panes.length).removeClass("hidden");
		curPane = (curPane + 1) % panes.length;
	}

	function advance() {
		clearInterval(timer);
		panes.eq((curPane + 0) % panes.length).addClass("hidden");
		panes.eq((curPane + 1) % panes.length).removeClass("hidden");
		curPane = (curPane + 1) % panes.length;
		timer = setInterval(function(){autoAdvance()}, duration);
	}

	function rewind() {
		clearInterval(timer);
		panes.eq((curPane + 0) % panes.length).addClass("hidden");
		panes.eq((curPane + 1) % panes.length).removeClass("hidden");
		curPane = (curPane + 1) % panes.length;
		timer = setInterval(function(){autoAdvance()}, duration);
	}
}

$(window).scroll(function() {
	var threshold = 300;
	var scrollpos = window.pageYOffset || document.documentElement.scrollTop;

	if (scrollpos >= threshold)
		$("header").addClass("shrunk");
	else
		$("header").removeClass("shrunk");
})

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 2000);
});