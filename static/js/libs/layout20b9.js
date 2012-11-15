(function($){
	var initLayout = function() {
		$('.colorSelector').ColorPicker({
			color: '#4ab1d3',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.button-colored, .caption-padding .button-colored, a.button-colored:hover, #contactform .button-colored:hover').css('borderColor', '#' + hex);
				$('.color-change, .post-details a, #jtwt a, body h1, .button-colored, .caption-padding .button-colored, h1 span, h2 span, h3 span, h4 span, h5 span, h6 span, h1 span a, h2 span a, h3 span a, h4 span a, h5 span a, h6 span a, .sf-menu li.current a, .sf-menu li.sfHover li.current a, .sf-menu li.sfHover li.sfHover li.current a, .sf-menu a:focus, .sf-menu a:active, .sf-menu li.sfHover li.sfHover li.sfHover li.current a, .sf-menu li.sfHover li.sfHover li.sfHover li.sfHover li.current a,.sf-menu li.sfHover a, .sf-menu li.sfHover li.sfHover a, .sf-menu li.sfHover li.sfHover li.sfHover li.sfHover a, .sf-menu li.sfHover li.sfHover li.sfHover a').css('color', '#' + hex);
				$('.colorSelector div, .button-colored, .caption-padding .button-colored, a.button-colored:hover, #contactform .button-colored:hover').css('backgroundColor', '#' + hex);
				$('h1 a, h2 a, h3 a, h4 a, h5 a, h6 a, .sf-menu li a').hover(
				        function() {
				            $(this).css('color', '#' + hex);
				        },
				        function() {
				            $(this).css('color', '');
				        }
				 );
				$('.sf-menu a.highlight').hover(
				        function() {
				            $(this).css('color', '#' + hex);
				        },
				        function() {
				            $(this).css('color', '#' + hex);
				        }
				 );
				$('.sf-menu a.highlight').hover(
				        function() {
				            $(this).css('color', '#' + hex);
				        },
				        function() {
				            $(this).css('color', '#d2d2d2');
				        }
				 );
				$('.sf-menu li.current a, li.sfHover li.current a, li.sfHover li a').hover(
				        function() {
				            $(this).css('color', '#' + hex);
				        },
				        function() {
				            $(this).css('color', '#' + hex);
				        }
				 );
				
				
				$('.sf-menu li.current li a').css('color', '#d2d2d2');
				$('.sf-menu li.current li a').hover(
				        function() {
				            $(this).css('color', '#' + hex);
				        },
				        function() {
				            $(this).css('color', '');
				        }
				 );
				
				$('.sf-menu li.current li.current a.highlight').hover(
				        function() {
				            $(this).css('color', '#' + hex);
				        },
				        function() {
				            $(this).css('color', '#d2d2d2');
				        }
				 );
				
			}
		});
		$('.colorSelector2').ColorPicker({
			color: '#996633',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#topannounce, .button, .caption-padding .button, #topannounce a').css('color', '#' + hex);
				$('.colorSelector2 div').css('backgroundColor', '#' + hex);
			}
		});
		$('.colorSelector3').ColorPicker({
			color: '#fec64c',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.colorSelector3 div, #topannounce, .button, .caption-padding .button, #topannounce a').css('backgroundColor', '#' + hex);
			}
		});
	};
	
	var showTab = function(e) {
		var tabIndex = $('ul.navigationTabs a')
							.removeClass('active')
							.index(this);
		$(this)
			.addClass('active')
			.blur();
		$('div.tab')
			.hide()
				.eq(tabIndex)
				.show();
	};
	
	EYE.register(initLayout, 'init');
})(jQuery)