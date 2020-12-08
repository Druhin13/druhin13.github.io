//var divs = document.getElementsByClassName('div-block-4');
//for (var i = 0; i < divs.length; i++)
//	divs[i].style.marginLeft = 5 + "vw";


document.addEventListener("mousemove", e => {
	gsap.to(".div-block-4", {
		x: e.clientX / 15,
		y: e.clientY / 10,
		stagger: -0.02
	});
});