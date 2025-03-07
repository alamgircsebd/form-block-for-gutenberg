(function ($) {

	FBFGForms = {

		init: function (attr, id) {

			$scope = $(id);
			$form = $scope.find('.fbfg-forms-main-form');

			$submitButtonWrap = $form.find('.fbfg-forms-main-submit-button-wrap');
			$submitButton = $form.find('.fbfg-forms-main-submit-button');

			$phoneinput = $form.find('.fbfg-forms-phone-input');
			$phoneinput.on('keypress', function (e) {

				var charCode = (e.which) ? e.which : e.keyCode
				if (charCode == 45) {
					return true
				}
				if (charCode > 31 && (charCode < 48 || charCode > 57)) {
					return false;
				}
				return true;
			});

			var toggleinput = $form.find('.fbfg-forms-toggle-input');

			toggleinput.on('change', function (e) {
				if (this.checked) {
					$(this).val($(this).attr("data-truestate"));
				} else {
					$(this).val($(this).attr("data-falsestate"));
				}
			});

			//validation for checkbox if required.
			var requiredCheckboxes = $('.fbfg-forms-checkbox-wrap :checkbox[required]');
			requiredCheckboxes.on('change', function (e) {
				var checkboxGroup = requiredCheckboxes.filter('[name="' + $(this).attr('name') + '"]');
				var isChecked = checkboxGroup.is(':checked');
				checkboxGroup.each(function () {
					this.setCustomValidity(''); //remove all custom validity messages
				});
				checkboxGroup.prop('required', !isChecked);
			});
			requiredCheckboxes.trigger('change');

			//append recaptcha js when enabled.
			if (attr['reCaptchaEnable'] == true && attr['reCaptchaType'] == "v2" && attr['reCaptchaSiteKeyV2']) {

				$('head').append(' <script src="https://www.google.com/recaptcha/api.js"></script>');

			} else if (attr['reCaptchaEnable'] == true && attr['reCaptchaType'] == "v3" && attr['reCaptchaSiteKeyV3']) {
				if (attr['hidereCaptchaBatch']) {
					if (document.getElementsByClassName("grecaptcha-badge")[0] === undefined) {
						return
					}
					var badge = document.getElementsByClassName("grecaptcha-badge")[0];
					badge.style.visibility = 'hidden';
				}
				var api = document.createElement("script");
				api.type = "text/javascript";
				api.src = "https://www.google.com/recaptcha/api.js?render=" + attr['reCaptchaSiteKeyV3'];
				$('head').append(api);
			}


			//Ready Classes.            
			var formscope = document.getElementsByClassName('fbfg-block-' + attr['block_id']);
			var formWrapper = formscope[0].children;
			var sibling = formWrapper[0].children;

			for (let index = 0; index < sibling.length; index++) {

				if (sibling[index].classList.contains("fbfg-col-2") && sibling[index + 1].classList.contains("fbfg-col-2")) {
					let div = document.createElement('div');
					div.className = 'fbfg-col-2-wrap fbfg-col-wrap-' + index;
					sibling[index + 1].after(div)
					let wrapper_div = formscope[0].getElementsByClassName('fbfg-col-wrap-' + index)
					wrapper_div[0].appendChild(sibling[index])
					wrapper_div[0].appendChild(sibling[index])
				}

				if ((sibling[index].classList.contains("fbfg-col-3")) && (sibling[index + 1].classList.contains("fbfg-col-3") && (sibling[index + 2].classList.contains("fbfg-col-3")))) {
					let div = document.createElement('div');
					div.className = 'fbfg-col-3-wrap fbfg-col-wrap-' + index;
					sibling[index + 2].after(div)
					let wrapper_div = formscope[0].getElementsByClassName('fbfg-col-wrap-' + index)
					wrapper_div[0].appendChild(sibling[index])
					wrapper_div[0].appendChild(sibling[index])
					wrapper_div[0].appendChild(sibling[index])

				}

				if ((sibling[index].classList.contains("fbfg-col-4")) && (sibling[index + 1].classList.contains("fbfg-col-4") && (sibling[index + 2].classList.contains("fbfg-col-4")) && (sibling[index + 3].classList.contains("fbfg-col-4")))) {
					let div = document.createElement('div');
					div.className = 'fbfg-col-4-wrap fbfg-col-wrap-' + index;
					sibling[index + 3].after(div)
					let wrapper_div = formscope[0].getElementsByClassName('fbfg-col-wrap-' + index)
					wrapper_div[0].appendChild(sibling[index])
					wrapper_div[0].appendChild(sibling[index])
					wrapper_div[0].appendChild(sibling[index])
					wrapper_div[0].appendChild(sibling[index])

				}
			}


			$form.on('submit', function (e) {
				e.preventDefault();
				var $this = $(this);
				if (attr['reCaptchaEnable'] == true && attr['reCaptchaType'] == "v3" && attr['reCaptchaSiteKeyV3']) {

					grecaptcha.ready(function () {
						grecaptcha.execute(attr['reCaptchaSiteKeyV3'], {
							action: 'submit'
						}).then(function (token) {
							if (token) {
								document.getElementById('g-recaptcha-response').value = token;
								FBFGForms._formSubmit(e, $this, attr);
							} 
						});
					});

				} else {
					FBFGForms._formSubmit(e, $this, attr);
				}

			});
		},

		_formSubmit: function (e, $form, attr) {

			e.preventDefault();

			var fbfg_captcha_keys, captcha_response;
			if (attr['reCaptchaEnable'] == true && attr['reCaptchaType'] == "v2" && attr['reCaptchaSiteKeyV2']) {

				captcha_response = $form[0].getElementsByClassName("fbfg-forms-recaptcha")[0].value;
				if (!captcha_response) {
					$('.fbfg-form-reacaptcha-error-' + attr['block_id']).html('<p style="color:red !important" class="error-captcha">' + attr['captchaMessage'] + '</p>');
					return false;
				} else {
					$('.fbfg-form-reacaptcha-error-' + attr['block_id']).html('');
					fbfg_captcha_keys = {
						'secret': attr['reCaptchaSecretKeyV2'],
						'sitekey': attr['reCaptchaSiteKeyV2']
					}
				}
			}
			if (attr['reCaptchaEnable'] == true && attr['reCaptchaType'] == "v3" && attr['reCaptchaSiteKeyV3']) {
				fbfg_captcha_keys = {
					'secret': attr['reCaptchaSecretKeyV3'],
					'sitekey': attr['reCaptchaSiteKeyV3']
				}
				captcha_response = document.getElementById('g-recaptcha-response').value;
			}

			var originalSerialized = $($form).serializeArray();
			var postData = {};
			for (var i = 0; i < originalSerialized.length; i++) {
				let inputname = originalSerialized[i].name;
				if (originalSerialized[i]['name'].endsWith('[]')) { //For checkbox element
					var name = originalSerialized[i]['name'];
					name = name.substring(0, name.length - 2);
					if (!(name in postData)) {
						postData[name] = [];
					}
					postData[name].push(originalSerialized[i]['value']);
				} else if (originalSerialized[i]['value'].startsWith('+')) { //For phone element. 

					var name = originalSerialized[i]['name'];
					name = name.substring(0, name.length - 2);
					if (!(name in postData)) {
						postData[name] = [];
					}
					postData[$("#" + name).html()].push(originalSerialized[i]['value']);
				} else {
					postData[$("#" + inputname).html()] = originalSerialized[i]['value'];
				}
			}

			var after_submit_data = {
				"to": attr['afterSubmitToEmail'],
				"cc": attr['afterSubmitCcEmail'],
				"bcc": attr['afterSubmitBccEmail'],
				"subject": attr['afterSubmitEmailSubject']
			};

			//add spiner to form button to show processing.
			$('<span class="components-spinner"></span>').appendTo($form.find(".fbfg-forms-main-submit-button-wrap"));

			$.ajax({
				type: 'POST',
				url: fbfg_forms_data.ajax_url,
				data: {
					action: 'fbfg_process_forms',
					nonce: fbfg_forms_data.fbfg_forms_ajax_nonce,
					form_data: postData,
					sendAfterSubmitEmail: attr['sendAfterSubmitEmail'],
					after_submit_data: after_submit_data,
					fbfg_captcha_keys: fbfg_captcha_keys,
					captcha_response: captcha_response,
				},

				success: function (response) {

					if (200 === response.data) {
						if ('message' === attr['confirmationType']) {
							$('[name="fbfg-form-' + attr['block_id'] + '"]').hide();
							$('.fbfg-forms-success-message-' + attr['block_id']).removeClass('fbfg-forms-submit-message-hide').addClass('fbfg-forms-success-message')
						}

						if ('url' === attr['confirmationType']) {
							window.location.replace(attr.confirmationUrl);
						}

					} else if (400 === response.data) {
						if ('message' === attr['confirmationType']) {
							$('[name="fbfg-form-' + attr['block_id'] + '"]').hide();
							$('.fbfg-forms-failed-message-' + attr['block_id']).removeClass('fbfg-forms-submit-message-hide').addClass('fbfg-forms-failed-message')
						}
					}

				}
			});

		},
	}
})(jQuery);
