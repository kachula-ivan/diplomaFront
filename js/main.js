  $(window).ready(()=>{
    const menu__btn = document.querySelector('.menu__btn');
	const video = document.querySelector('.video');
    menu__btn.addEventListener('click', function(){
        video.classList.toggle('opacity');
    })
});
$(function(){
    $('.popup').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	}); 
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 50) {
	  $('.header').slideUp(125);
	} else {
	  $('.header').slideDown(125);
	}
  });
