
(function() {
	'use strict';

	At.submit({
		query: '.contact-form',
		prepare: function (data) {
			delete data._format;
		},
		complete: function (error, success) {
			var response = document.querySelector('.contact-response');

			if (error) {
				console.log(error);
				response.style.color = 'red';
				response.innerText = 'Error Please See Console';
			} else {
				response.innerText = 'Contact Form Sent';
			}

		}
	});

}());