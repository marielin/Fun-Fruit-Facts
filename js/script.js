$(document).ready(function () {
	initCarousel();
})

function initCarousel() {
	var panes = $(".panes").children();
	var numPanes = panes.length;
	var curPane = 0;
	var duration = 6000;
	var timer = setInterval(function(){autoAdvance()}, duration);

	// $("#prev").click(function(){rewind()});
	// $("#next").click(function(){advance()});

	function autoAdvance() {
		curPane = (curPane + 1) % numPanes;
		for(i = 0; i < numPanes; i++) {
			if (i == curPane) panes.eq(i).children("img").removeClass("hidden");
			else panes.eq(i).children("img").addClass("hidden");
		}
	}

	// function advance() {
	// 	clearInterval(timer);
	// 	curPane = (curPane + 1) % numPanes;
	// 	for(i = 0; i < numPanes; i++) {
	// 		if (i == curPane) panes.eq(i).children("img").removeClass("hidden");
	// 		else panes.eq(i).children("img").addClass("hidden");
	// 	}
	// 	timer = setInterval(function(){autoAdvance()}, duration);
	// }

	// function rewind() {
	// 	clearInterval(timer);
	// 	curPane = (curPane + 1) % numPanes;
	// 	for(i = 0; i < numPanes; i++) {
	// 		if (i == curPane) panes.eq(i).children("img").removeClass("hidden");
	// 		else panes.eq(i).children("img").addClass("hidden");
	// 	}
	// 	timer = setInterval(function(){autoAdvance()}, duration);
	// }
}

$(window).scroll(function() {
	var shrinkThreshold = 300;
	var scrollpos = window.pageYOffset || document.documentElement.scrollTop;

	if (scrollpos >= shrinkThreshold)
		$("header").addClass("shrunk");
	else
		$("header").removeClass("shrunk");

	var links = $("header nav").children("a");
	var sections = $("main").children("section").not("#summary");
	var numSections = sections.length;

	if (scrollpos >= $(document).height() - $(window).height()) {
		$("header nav a").removeClass("currentSection");
		links.eq(numSections - 1).addClass("currentSection");
	} else {
		for (i = 0; i < numSections - 1; i++) {
			if (scrollpos >= sections.eq(i).offset().top - 60) {
				$("header nav a").removeClass("currentSection");
				links.eq(i).addClass("currentSection");
			}
		}
	}

	if (scrollpos < sections.eq(0).offset().top - 60) {
		$("header nav a").removeClass("currentSection");
	}
})

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 2000);
});

$("header nav a").click(function(){
	$('html, body').animate({
		scrollTop: $("#" + $(this).text()).offset().top - 60
	}, 1000, 'easeInOutCubic');
})

$("header h1").click(function(){
	$('html, body').animate({
		scrollTop: 0
	}, 1000, 'easeInOutCubic');
})