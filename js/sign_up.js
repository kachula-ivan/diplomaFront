$(function() {
    const radio_one = document.querySelector('.med_zaklad')
    $('input:radio[name="radios"]').change(function() {
        if ($(this).val() == 'Пацієнт') {
            radio_one.classList.add('hiden');
        } else {
            radio_one.classList.remove('hiden');
        }
    });
    const radio_second = document.querySelector('.job')
    $('input:radio[name="radios"]').change(function() {
        if ($(this).val() == 'Пацієнт') {
            radio_second.classList.add('hiden');
        } else {
            radio_second.classList.remove('hiden');
        }
    });
});
 $(document).ready(function(){
    var date_input=$('input[name="birthday"]');
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'dd/mm/yyyy',
        container: container,
        todayHighlight: true,
    })
})
document.addEventListener('DOMContentLoaded', function () {
    var pass1 = document.querySelector('.pass1'),
        pass2 = document.querySelector('#password-check')
    pass1.addEventListener('input', function () {
        this.value != pass2.value ? pass2.setCustomValidity('Password incorrect') : pass2.setCustomValidity('')
    })
    pass2.addEventListener('input', function (e) {
        this.value != pass1.value ? this.setCustomValidity('Password incorrect') : this.setCustomValidity('')
    })
})
var s_letters = "qwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре
var b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре
var digits = "0123456789"; // Цифры
var specials = "!@#$%^&*()_-+=\|/.,:;[]{}"; // Спецсимволы

var input_test = document.getElementById('input_test');//получаем поле
var block_check = document.getElementById('block_check');//получаем блок с индикатором
       
input_test.addEventListener('keyup', function(evt){
var input_test_val = input_test.value;//получаем значение из поля
        
var is_s = false; // Есть ли в пароле буквы в нижнем регистре
var is_b = false; // Есть ли в пароле буквы в верхнем регистре
var is_d = false; // Есть ли в пароле цифры
var is_sp = false; // Есть ли в пароле спецсимволы
var p;

for (var i = 0; i < input_test_val.length; i++) {
    /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
    if (!is_s && s_letters.indexOf(input_test_val[i]) != -1) {
         is_s = true
    }
    else if (!is_b && b_letters.indexOf(input_test_val[i]) != -1) {
          is_b = true
    }
    else if (!is_d && digits.indexOf(input_test_val[i]) != -1) {
           is_d = true
    }
    else if (!is_sp && specials.indexOf(input_test_val[i]) != -1) {
           is_sp = true
    }
}

var rating = 0;
if (is_s) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
if (is_b) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности
if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
/* Далее идёт анализ длины пароля и полученного рейтинга, и на основании этого готовится текстовое описание сложности пароля */
if (input_test_val.length < 6 && rating < 3) {
    block_check.style.width = "10%";
    block_check.style.backgroundColor = '#e7140d';
    p = document.getElementById('text_change');
    p.innerHTML = 'Слабкий пароль';
}
else if (input_test_val.length < 6 && rating >= 3) {
    block_check.style.width = "50%";
    block_check.style.backgroundColor = '#ffdb00';
    p = document.getElementById('text_change');
    p.innerHTML = 'Середній пароль';
}
else if (input_test_val.length >= 8 && rating < 3) {
    block_check.style.width = "50%";
    block_check.style.backgroundColor = '#ffdb00';
    p = document.getElementById('text_change');
    p.innerHTML = 'Середній пароль';
}
else if (input_test_val.length >= 8 && rating >= 3) {
    block_check.style.width = "100%";
    block_check.style.backgroundColor = '#61ac27';
    p = document.getElementById('text_change');
    p.innerHTML = 'Хороший пароль';
}
else if (input_test_val.length >= 6 && rating == 1) {
    block_check.style.width = "10%";
    block_check.style.backgroundColor = '#e7140d';
    p = document.getElementById('text_change');
    p.innerHTML = 'Слабкий пароль';
}
else if (input_test_val.length >= 6 && rating > 1 && rating < 4) {
    block_check.style.width = "50%";
    block_check.style.backgroundColor = '#ffdb00';
    p = document.getElementById('text_change');
    p.innerHTML = 'Середній пароль';
}
else if (input_test_val.length >= 6 && rating == 4) {
    block_check.style.width = "100%";
    block_check.style.backgroundColor = '#61ac27';
    p = document.getElementById('text_change');
    p.innerHTML = 'Хороший пароль';
};
});
