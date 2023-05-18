$(window).ready(()=>{
    const info_pacient = document.querySelector('.info_pacient');
	const cnt_btn_med = document.querySelector('.cnt_btn_med');
    const info_doctor = document.querySelector('.info_doctor');
	const patient_login_form = document.querySelector('.patient_login_form');
    const doctor_login_form = document.querySelector('.doctor_login_form');
    const cnt_btn_pac = document.querySelector('.cnt_btn_pac');
    cnt_btn_med.addEventListener('mouseenter', function(){
        info_pacient.classList.toggle('hiden');
    })
    cnt_btn_med.addEventListener('mouseleave', function(){
        info_pacient.classList.toggle('hiden');
    })
    cnt_btn_med.addEventListener('mouseenter', function(){
        info_doctor.classList.toggle('hiden');
    })
    cnt_btn_med.addEventListener('mouseleave', function(){
        info_doctor.classList.toggle('hiden');
    })
    cnt_btn_pac.addEventListener('click', function(){
        patient_login_form.classList.toggle('hiden');
        doctor_login_form.classList.add('hiden');
    })
    cnt_btn_med.addEventListener('click', function(){
        doctor_login_form.classList.toggle('hiden');
        patient_login_form.classList.add('hiden');
    })
    
});
