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

	function toggleActiveCard() {
		$('.card-item').on('mouseenter', function() {
			var cardItems = $('.card-item');
			var $this = $(this);
			cardItems.each(function(index, item){
				if($(item).hasClass('active')) {
					var $currentItem = $(item);
					$currentItem.removeClass('active');
					//change the tab
					var $greenTitle = $currentItem.find('.card-head-green');
					$greenTitle.removeClass('card-head-green');
					$greenTitle.addClass('card-head-grey');
					$this.addClass('active');
					var $cardTitle = $this.find('.card-title');
					$cardTitle.removeClass('card-head-grey');
					$cardTitle.addClass('card-head-green');
					//change the title and content in main1 and title1
					var $main1Active = $this.find('.card-main1');
					var $titleContentActive1 = $cardTitle.find('.head-content1');
					var $titleContent1 = $currentItem.find('.head-content1');
					var $main1 = $currentItem.find('.card-main1');

					$titleContent1.show();
					$main1.show();
					$titleContentActive1.hide();
					$main1Active.hide();
					//change the title and content in main2 and title2
					var $main2Active = $this.find('.card-main2');
					var $titleContentActive2 = $cardTitle.find('.head-content2');
					var $titleContent2 = $currentItem.find('.head-content2');
					var $main2 = $currentItem.find('.card-main2');
					$titleContent2.hide();
					$main2.hide();
					$titleContentActive2.show();
					$main2Active.show();
				}
			})
		})
	}

	function _init() {
		showDropDownMenu();
		hideDropDownMenu();
		toggleHeader();
		autoChangeHeader();
		focusOnHeader();
		toggleActiveCard();
	}

	return {
		init: _init
	};
})();

$(function() {
	index.init();
});