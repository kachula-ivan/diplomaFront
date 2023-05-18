$(window).resize(function () {
    const main_text = document.querySelector('.main_text');
    if($(window).width() <= 600){
      $(main_text).removeClass('col-7');
    };
    if($(window).width() >= 600){
        $(main_text).addClass('col-7');
      };
      const img_about = document.querySelector('.img_about');
    if($(window).width() <= 600){
      $(img_about).removeClass('col-5');
    };
    if($(window).width() >= 600){
        $(img_about).addClass('col-5');
      };
      const footer_logo_black = document.querySelector(".footer_logo_black")
      if($(window).width() <= 780){
        footer_logo_black.classList.add('hiden');
    };
    if($(window).width() >= 780){
        footer_logo_black.classList.remove('hiden');
    };
    const logo_four_k = document.querySelector(".logo_four_k")
    if($(window).width() >= 2000){
        logo_four_k.classList.remove('hiden');
    };
    if($(window).width() <= 2000){
        logo_four_k.classList.add('hiden');
    };
  })


