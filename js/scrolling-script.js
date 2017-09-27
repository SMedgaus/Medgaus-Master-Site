var height = $('.navbar.fixed-top').innerHeight();

$('.flex-column .nav-link').click(function(){
	var target = $(this).attr('href');
	try{
		var scrollTop = $(target).offset().top - height;

		$("html, body").animate({ scrollTop: scrollTop}, 500);
	}catch(e){
		console.log(e);
	}

})