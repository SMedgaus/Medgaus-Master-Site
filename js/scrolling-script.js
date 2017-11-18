function scrollingFunc() {
	var height = $('.navbar.fixed-top').innerHeight();
	var target = $(this).attr('href');
	try{
		var scrollTop = $(target).offset().top - height;

		$("html, body").animate({ scrollTop: scrollTop}, 500);
	}catch(e){
		console.log(e);
	}

}

$('.flex-column .nav-link').click(scrollingFunc)
$('.reference').click(scrollingFunc)