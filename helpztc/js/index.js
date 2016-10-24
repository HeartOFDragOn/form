var index = (function() {

	function showDropDownMenu() { 
		$('.function-item').on('mouseenter', 'span', function() {
			var $dropMenu = $(this).siblings('.drop-down-menu');
			if($dropMenu) {
				$dropMenu.show();
			}
		});
	}

	function hideDropDownMenu() {
		$('.function-item').on('mouseleave', function() {
			var $dropMenu = $(this).find('.drop-down-menu');
			if($dropMenu) {
				$dropMenu.hide();
			}
		});
	}

	function toggleHeader() {
		$('.change-header-btns').on('click', '.previous', function() {
			var $header = $(this).closest('#Header');
			var page = $header.find('.img-menu:not(.hidden)').data('page-num');
			var toPage = page - 1;
			if(toPage <= 0) {
				toPage = 3;
			}
			$header.find('.img-menu[data-page-num=' + page + ']').addClass('hidden');
			$header.find('.img-menu[data-page-num=' + toPage + ']').removeClass('hidden');
			$header.find('.page-point[data-page-num=' + page + ']').removeClass('active');
			$header.find('.page-point[data-page-num=' + toPage + ']').addClass('active');
		});
		$('.change-header-btns').on('click', '.next', function() {
			var $header = $(this).closest('#Header');
			var page = $header.find('.img-menu:not(.hidden)').data('page-num');
			var toPage = page + 1;
			if(toPage > 3) {
				toPage = 1;
			}
			$header.find('.img-menu[data-page-num=' + page + ']').addClass('hidden');
			$header.find('.img-menu[data-page-num=' + toPage + ']').removeClass('hidden');
			$header.find('.page-point[data-page-num=' + page + ']').removeClass('active');
			$header.find('.page-point[data-page-num=' + toPage + ']').addClass('active');
		});
	}

	function _init() {
		showDropDownMenu();
		hideDropDownMenu();
		toggleHeader();
	}

	return {
		init: _init
	};
})();

$(function() {
	index.init();
});