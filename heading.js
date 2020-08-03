// Wrap every letter in a span
			var textWrapper = document.querySelector('.ml7 .letters');
			textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

			anime.timeline({
					loop: false
				})
				.add({
					targets: '.ml7 .letter',
					translateY: ["1.1em", 0],
					translateX: ["0.55em", 0],
					translateZ: 0,
					rotateZ: [180, 0],
					duration: 500,
					easing: "easeOutExpo",
					delay: (el, i) => 50 * i
				});
			
			
			//********************************************//
			
			
			// Wrap every letter in a span
			var textWrapper = document.querySelector('.ml7 .letters2');
			textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

			anime.timeline({
					loop: false
				})
				.add({
					targets: '.ml7 .letter',
					translateY: ["1.1em", 0],
					translateX: ["0.55em", 0],
					translateZ: 0,
					rotateZ: [180, 0],
					duration: 600,
					easing: "easeOutExpo",
					delay: (el, i) => 50 * i
				});
			
			
			//********************************************//
			
			
			// Wrap every letter in a span
			var textWrapper = document.querySelector('.ml7 .letters3');
			textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

			anime.timeline({
					loop: false
				})
				.add({
					targets: '.ml7 .letter',
					translateY: ["1.1em", 0],
					translateX: ["0.55em", 0],
					translateZ: 0,
					rotateZ: [180, 0],
					duration: 700,
					easing: "easeOutExpo",
					delay: (el, i) => 50 * i
				});