$(document).ready(function(){function a(){clearInterval(e),d.eq(i%d.length).fadeOut(1e3),d.eq((i+1)%d.length).fadeIn(1e3)}function b(){d.eq(i%d.length).fadeOut(1e3),d.eq((i+1)%d.length).fadeIn(1e3)}function c(){d.eq(i%d.length).fadeOut(1e3),d.eq((i+d.length-1)%d.length).fadeIn(1e3)}var d=$("#panes").children(".pane");$("#prev").click(c()),$("#next").click(b());var e=setInterval(a(),5e3)});