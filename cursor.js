let tricksCursor = document.querySelector('.cursor');
window.addEventListener('mousemove', cursor);

function cursor(e) {
	tricksCursor.style.top = e.pageY + 'px';
	tricksCursor.style.left = e.pageX + 'px';
}

//$("a").mouseenter(function () {
//	window.removeEventListener("mousemove", cursor);
//	var tricksWidth = $(this).outerWidth() / 2;
//	var tricksHeight = $(this).outerHeight() / 2;
//	var tricksTop = $(this).offset().top;
//	var tricksLeft = $(this).offset().left;
//	tricksCursor.style.top = (tricksTop + tricksHeight) + 'px';
//	tricksCursor.style.left = (tricksLeft + tricksWidth) + 'px';
//});

$("a").mouseleave(function () {
	window.addEventListener("mousemove", cursor);
});


// Add class on hover
$("a").mouseenter(function () {
	$('.cursor').addClass('cursor-hover');
});

$("a").mouseleave(function () {
	$('.cursor').removeClass('cursor-hover');
});


// Add class on mouse down
$("body").mousedown(function () {
	$('.cursor').addClass('cursor-pressed');
});

$("body").mouseup(function () {
	$('.cursor').removeClass('cursor-pressed');
});