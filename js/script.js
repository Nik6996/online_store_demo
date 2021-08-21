

let burgerBtn = document.querySelector('.header-nav__burger');
let burgerBtn1 = document.querySelector('.burger');
let burgerBtn2 = document.querySelector('.header-nav__menu');
let burgerBtnClose = document.querySelector('.burger__close');
let loginBtn = document.querySelector('.bar-header__person');
let loginBtn2 = document.querySelector('.login');
let closeLogin = document.querySelector('.login__close-button');
let closeLoginBtn = document.querySelector(".login");
let hiddenBody = document.querySelector("body");
//==============================================================БУРГЕР===========================================================

burgerBtn.addEventListener("click", function (e) {
	burgerBtn.classList.toggle('active');
	burgerBtn1.classList.toggle('active');
	burgerBtn2.classList.toggle('active');
	hiddenBody.classList.toggle('lock');
});

burgerBtnClose.addEventListener('click', function (e) {
	burgerBtn1.classList.remove('active');
	burgerBtn2.classList.remove('active');
	burgerBtn.classList.remove('active');
	hiddenBody.classList.remove('lock');
});

// $(document).ready(function () {
// 	$('.header-nav__burger').click(function () {
// 		$('.header-nav__burger, .burger, .header-nav__menu').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// });
//==============================================================LOGIN===================================================

loginBtn.addEventListener('click', function (e) {
	loginBtn.classList.toggle('active');
	loginBtn2.classList.toggle('active');
})


closeLogin.addEventListener('click', function (e) {
	closeLogin.classList.remove('active');
	closeLoginBtn.classList.remove('active');
	loginBtn.classList.remove('active');
	hiddenBody.classList.remove('lock');
})
// $(document).ready(function () {
// 	$('.bar-header__person').click(function () {
// 		$('.login , .bar-header__person').toggleClass('active');

// 	});
// });

// $(document).ready(function () {
// 	$('.login__close-button').click(function () {
// 		$('.login, .bar-header__person ').removeClass('active');

// 	});
// });
// let btn = document.getElementsByClassName('.icon-menu');
// btn[0].onclick = function () {
// 	btn[0].classList.add('.icon-menu__active');
// }











// new Swiper('.image-slider', {
// 	// СТРЕЛКИ
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev'
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	},
// 	// БЕСКОНЕЧНЫЙ СЛАЙДЕР
// 	loop: false,
// 	//  АВТОПРОКРУТКА
// 	autoplay: {
// 		delay: 2000,
// 		stopOnLastSlide: true,
// 		disableOnInteraction: false
// 	},


// 	speed: 800,

// 	//ЭФФЕКТЫ
// 	effect: 'fade',
// });





document.addEventListener('DOMContentLoaded', function () {
	new Swiper('.slider-extra', {
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev'
		},
		autoplay: {
			delay: 2000,
			// 	stopOnLastSlide: false,
			// 	disableOnInteraction: false
		},
		slidesPerView: 3,
		breakpoints: {
			1100: {
				slidesPerView: 3,
			},
			750: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 2,
			},

		}

	})
});

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	if (form) {
		form.addEventListener('submit', formSend);

		async function formSend(e) {
			e.preventDefault();

			let error = formValidate(form);


			let formData = new FormData(form);
			// formData.append();

			if (error === 0) {

				form.classList.add('_sending');
				// let response = await fetch('sendmail.php', {
				// 	method: 'POST',
				// 	body: formData
				// });
				// if (response.ok) {
				// 	let response = await response.json();
				// 	alert(result.message);
				// 	form.reset();
				// 	form.classList.remove('_sending');
				// } else {
				// 	alert('ошибка отправки формы')
				// 	form.classList.remove('_sending');
				// }

			} else {
				alert('заполните форму');
			}


		}
		function formValidate(form) {
			let error = 0;
			let formReq = document.querySelectorAll('._req');


			for (let index = 0; index < formReq.length; index++) {
				const input = formReq[index];
				formRemoveError(input);


				if (input.classList.contains('_email')) {
					if (emailTest(input)) {
						formAddError(input);
						error++;

					}


				} else if (input.classList.contains('_phone')) {
					if (phoneTest(input)) {
						formAddError(input);
						error++
					}
				} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
					formAddError(input);
					error++;
				} else {
					if (input.value === '') {
						formAddError(input);
						error++;
					}
				}
			}
			return error;
		}

		function formAddError(input) {
			input.parentElement.classList.add('_error');
			input.classList.add('_error');
		}
		function formRemoveError(input) {
			input.parentElement.classList.remove('_error');
			input.classList.remove('_error');
		}
	}
});
function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
function phoneTest(input) {
	return !/^(?:\(\d{3}\)|\d{3})(?: *- *)?\d{3}(?: *- *)?\d{4}$/.test(input.value);
}

//-----------------------------------валидация регистрации----------------------------------//

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('login');
	form.addEventListener('submit', formSend);

	let formData = new FormData(form);

	async function formSend(e) {
		e.preventDefault();
		let error = formValidate(form);
		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			// if (response.ok) {
			// 	let response = await response.json();
			// 	alert(result.message);
			// 	form.reset();
			// 	form.classList.remove('_sending');
			// } else {
			// 	alert('ошибка отправки формы')
			// 	form.classList.remove('_sending');
			// }
		}
	}
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._require');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_phone')) {
				if (phoneTest(input)) {
					formAddError(input);
					error++
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
});
function phoneTest(input) {
	return !/^(?:\(\d{3}\)|\d{3})(?: *- *)?\d{3}(?: *- *)?\d{4}$/.test(input.value);
}
document.addEventListener('DOMContentLoaded', function () {
	const slide = document.querySelectorAll('.image-slider__image img');
	if (slide.length > 0) {
		const swiperrContainer = document.querySelector('.swiperr-wrapper');
		let count = 0;
		let width;

		function init() {
			//	console.log('resize');
			width = document.querySelector('.slider').offsetWidth;
			swiperrContainer.style.width = width * slide.length + 'px';
			slide.forEach(item => {
				item.style.width = width + 'px';
				item.style.height = 'auto';
				rollSlider();
			})
			console.log();
		}
		window.addEventListener('resize', init);
		init();

		document.querySelector('.image-slider__prev').addEventListener('click', function () {
			count--;
			if (count < 0) {
				count = slide.length - 1;
			}
			rollSlider();
		});
		document.querySelector('.image-slider__next').addEventListener('click', function () {
			count++;
			if (count >= slide.length) {
				count = 0;
			}
			rollSlider();
		});

		function rollSlider() {
			swiperrContainer.style.transform = 'translate(-' + count * width + 'px) ';
		}
	}
});
document.addEventListener('DOMContentLoaded', function () {
	let calculate = document.getElementById("calculation");
	if (calculate) {
		let count = document.getElementById("buttonCountNumber");
		let calculation = document.getElementById("calculation").innerHTML;




		document.getElementById("buttonCountPlus").onclick = function () {
			let countPlus = count.innerHTML;
			if (+countPlus <= 9) {
				count.innerHTML++;
				let countPlus = count.innerHTML;
				calculate.innerHTML = calculations(countPlus);
			}
		}

		document.getElementById("buttonCountMinus").onclick = function () {
			let countMinus = count.innerHTML;
			if (+countMinus >= 2) {
				count.innerHTML--;
				let countMinus = count.innerHTML;
				calculate.innerHTML = calculations(countMinus);
			}
		}

		calculations = (count) => {
			return (+count) * (+calculation);
		}
	}
});



// const { use } = require("browser-sync");