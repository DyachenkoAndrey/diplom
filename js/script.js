$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header-mobile-menu').toggleClass('active');
		$('body').toggleClass('.lock');
	});
});


$(document).ready(function() {
	$('.header-mobile-menu__link').click(function(event) {
		$('.header-mobile-menu').toggleClass('active');
	});
});
