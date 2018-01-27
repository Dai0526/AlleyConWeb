	/* ---------------------------------------
			GALLERY FILTERABLE
	-------------------------------------- */
	var $container = jQuery('.tg-galleryfilterable2');
	var $optionSets = jQuery('.tg-optionset2');
	var $optionLinks = $optionSets.find('a');
	function doIsotopeFilter() {
		if (jQuery().isotope) {
			var isotopeFilter = '';
			$optionLinks.each(function () {
				var selector = jQuery(this).attr('data-filter2');
				var link = window.location.href;
				var firstIndex = link.indexOf('filter2=');
				if (firstIndex > 0) {
					var id = link.substring(firstIndex + 8, link.length);
					if ('.' + id == selector) {
						isotopeFilter = '.' + id;
					}
				}
			});
			jQuery(window).load(function () {
				$container.isotope({
					itemSelector: '.tg-masonrygrid2',
					filter: isotopeFilter
				});
			});
			$optionLinks.each(function () {
				var $this = jQuery(this);
				var selector = $this.attr('data-filter2');
				if (selector == isotopeFilter) {
					if (!$this.hasClass('tg-active')) {
						var $optionSet = $this.parents('.option-set');
						$optionSet.find('.tg-active').removeClass('tg-active');
						$this.addClass('tg-active');
					}
				}
			});
			$optionLinks.on('click', function () {
				var $this = jQuery(this);
				var selector = $this.attr('data-filter2');
				$container.isotope({itemSelector: '.tg-masonrygrid2', filter: selector});
				if (!$this.hasClass('tg-active')) {
					var $optionSet = $this.parents('.tg-optionset2');
					$optionSet.find('.tg-active').removeClass('tg-active');
					$this.addClass('tg-active');
				}
				return false;
			});
		}
	}
	var isotopeTimer = window.setTimeout(function () {
		window.clearTimeout(isotopeTimer);
		doIsotopeFilter();

				/* -------------------------------------
				MASONRY GALLERY
		-------------------------------------- */
		var _tg_masnorygallery = jQuery('#tg-masnorygallery2');
		_tg_masnorygallery.packery({
			itemSelector: '.tg-masonryitem2',
			columnWidth: 0,
		});
	}, 1000);