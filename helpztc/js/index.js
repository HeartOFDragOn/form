var index = (function() {

	var MAX_PAGE = 3;
	var interval;

	function showDropDownMenu() { 
		$('.function-item').on('mouseenter', 'span', function() {
			var $dropMenu = $(this).siblings('.drop-down-menu');
			if($dropMenu) {
				$dropMenu.fadeToggle();
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

	function _changeHeader(obj, offset) {
		clearInterval(interval);
		var $header = obj.closest('#Header');
		var page = $header.find('.img-menu:not(.hidden)').data('page-num');
		var toPage = page + offset;
		if(toPage <= 0) {
			toPage = MAX_PAGE;
		}
		if(toPage > MAX_PAGE) {
			toPage = 1;
		}
		var $currentPage = $header.find('.img-menu[data-page-num=' + page + ']');
		var $toPage = $header.find('.img-menu[data-page-num=' + toPage + ']');
		$currentPage.addClass('hidden');
		$toPage.removeClass('hidden');
		$header.find('.page-point[data-page-num=' + page + ']').removeClass('active');
		$header.find('.page-point[data-page-num=' + toPage + ']').addClass('active');
		autoChangeHeader();
	}

	function toggleHeader() {
		$('.change-header-btns').on('click', '.previous', function() {
			_changeHeader($(this), -1);
		});
		$('.change-header-btns').on('click', '.next', function() {
			_changeHeader($(this), 1);
		});
		$('.page-point').on('click', function() {
			var toPage = $(this).data('page-num');
			var currentPage = $('.active').data('page-num');
			_changeHeader($(this), (toPage - currentPage));
		});
	}

	function autoChangeHeader() {
		interval = setInterval(function() {
			$('.next').click();
		}, 4000);
	}

	function focusOnHeader() {
		$('#Header').on('mouseover', function() {
			clearInterval(interval);
		});
		$('#Header').on('mouseleave', function() {
			autoChangeHeader();
		});
	}

	function _init() {
		showDropDownMenu();
		hideDropDownMenu();
		toggleHeader();
		autoChangeHeader();
		focusOnHeader();
	}

	return {
		init: _init
	};
})();

$(function() {
	index.init();
});