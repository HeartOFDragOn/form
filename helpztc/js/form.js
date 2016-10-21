var form = (function() {
	function showDropDownMenu() {
		var $dropDownMenu = $('.drop-down-menu');
		$('.term').on('click', function() {
			$dropDownMenu.show();
		});
		$('.term-info').on('blur', function() {
			$dropDownMenu.hide();
		});
	}

	function getAChoice() {
		$('.term-info').on('click', 'li', function() {
			var choice = $(this).text();
			$('.term').val(choice);
			$('.drop-down-menu').hide();
		});
	}

	function _init() {
		showDropDownMenu();
		getAChoice();
	}

	return {
		init: _init
	};
})();

$(function() {
	form.init();
});