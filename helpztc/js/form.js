var form = (function() {
	function showDropDownMenu() {
		var $dropDownMenu;
		$('.term, .subject, .teacher').on('click', function() {
			$dropDownMenu = $(this).closest('.info').find('.drop-down-menu');
			$dropDownMenu.show();
		});
	}

	//because of the conflict between blur and click, I delayed the function of blur.
	function hideDropDownMenu() {
		var $dropDownMenu;
		$('.term, .subject, .teacher').on('blur', function() {
			var _this = $(this);
			setTimeout(function() {
				$dropDownMenu = _this.closest('.info').find('.drop-down-menu');
				$dropDownMenu.hide();
			}, 100);
		});
	}

	function getAChoice() {
		$('.term-info, .subject-info, .teacher-info').on('click', 'li', function() {
			var choice = $(this).text();
			$(this).closest('.info').find('.input-box').val(choice);
		});
	}

	function chooseFile() {
		$('.choose-file').on('change', function() {
			var filePath = $('.choose-file').val();
			$('.file-box').val(filePath);
		});
	}

	function submitForm() {
		$('.submit-btn').on('click', function() {
			var $form = $('.form');
			var isSubmit = true;
			var term = $('.term').val();
			var subject = $('.subject').val();
			var teacher = $('.teacher').val();
			var file = $('.choose-file').val();

			if(!term) {
				isSubmit = false;
				$('.term-error').show();
			}
			if(!subject) {
				isSubmit = false;
				$('.subject-error').show();
			}
			if(!teacher) {
				isSubmit = false;
				$('.teacher-error').show();
			}
			if(!file) {
				isSubmit = false;
				$('.file-error').show();
			}
			if(isSubmit) {
				$form.submit();
			}
		});
	}

	function hideError() {
		$('.input-box').on('click', function() {
			$(this).siblings('.error-img').hide();
		});
	}

	function _init() {
		showDropDownMenu();
		getAChoice();
		chooseFile();
		submitForm();
		hideError();
		hideDropDownMenu();
	}

	return {
		init: _init
	};
})();

$(function() {
	form.init();
});