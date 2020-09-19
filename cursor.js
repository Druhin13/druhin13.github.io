$(document).ready(function () {

	if ($(window).width() <= 991) {

		$('.cursor-a').remove();

	}

});

$(document).on({

		mouseenter: function () {
			$('.text-cursor').css('display', 'none');
		},

		mouseleave: function () {
			$('.text-cursor').css('display', 'block');
		},

	},

	'.navbar'

);

$(document).on({

		mouseenter: function () {
			$('.text-cursor').css('display', 'none');
		},

		mouseleave: function () {
			$('.text-cursor').css('display', 'block');
		},

	},

	'.sticky-sidebar'

);





$(function () {

	//	$(".text-cursor").lettering();

});



if ($(window).width() >= 991) {



	$(document)

		.mousemove(function (e) {

			$('.cursor')

				.eq(0)

				.css({

					left: e.clientX,

					top: e.clientY

				});

			setTimeout(function () {

				$('.cursor')

					.eq(1)

					.css({

						left: e.clientX,

						top: e.clientY

					});

			}, 100);

		})



	$(document).on("mousemove", function (e) {

		mouseX = e.pageX;

		mouseY = e.pageY;

	});

	$('.hero-content').mousedown(() => {

		$('.cursor-v').css('transform', 'scale(0.7)');

		$('.text-cursor').fadeOut(300);

	});

	$('.hero-content').mouseup(() => {

		$('.cursor-v').css('transform', '');

		$('.text-cursor').fadeIn(300);

	});

	$("a").on("mouseenter", function () {

		$('.cursor-a').addClass("active");

		$('.cursor-v').addClass("active");

	});

	$("a").on("mouseleave", function () {

		$('.cursor-a').removeClass("active");

		$('.cursor-v').removeClass("active");

	});

}