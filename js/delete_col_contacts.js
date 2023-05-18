$(window).resize(function () {
    const main_information1 = document.querySelector('.main_information1');
    if($(window).width() <= 600){
      $(main_information1).removeClass('col-6');
    };
    if($(window).width() >= 600){
        $(main_information1).addClass('col-6');
      };
      const main_information2 = document.querySelector('.main_information2');
    if($(window).width() <= 600){
      $(main_information2).removeClass('col-6');
    };
    if($(window).width() >= 600){
        $(main_information2).addClass('col-6');
      };
      const footer_logo_black = document.querySelector(".footer_logo_black")
      if($(window).width() <= 780){
        footer_logo_black.classList.add('hiden');
    };
    if($(window).width() >= 780){
        footer_logo_black.classList.remove('hiden');
    };
  })