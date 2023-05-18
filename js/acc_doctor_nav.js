$('.slider-wrap a').on('click', function(e){
    e.preventDefault();
      $(this)
        .toggleClass('close')
        .siblings('div')
        .slideToggle();  
  });
  function goUrl1() {document.location.href ="/My_schedule.html";}
  function goUrl2() {document.location.href ="/patients.html";}
  function goUrl3() {document.location.href ="/search_patient.html";}
  function goUrl4() {document.location.href ="/recipe_doctor.html";}
  function goUrl5() {document.location.href ="/acc_doctor.html";}