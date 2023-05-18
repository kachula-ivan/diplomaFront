$(window).ready(()=>{
	const cnt_btn_med = document.querySelector('.button-3');
    cnt_btn_med.addEventListener('click', function(){
        $('#table_id').append('<tr><th>Лікарський засіб</th><th>Дата видачі</th><th>Дії</th><th>Пацієнт</th></tr><tr id="form">    <td><textarea name="" id="" cols="50" rows="3"></textarea></td>    <td><textarea name="" id="" cols="50" rows="3"></textarea></td>    <td><textarea name="" id="" cols="30" rows="3"></textarea></td>    <td><textarea name="" id="" cols="30" rows="3"></textarea></td></tr>');
    })
    const my_acc  = document.querySelector('.my_acc ');
    const dropdown  = document.querySelector('.dropdown-menu ');
    dropdown .addEventListener('mouseenter', function(){
        dropdown.classList.add('show');
    })
    my_acc .addEventListener('mouseenter', function(){
        dropdown.classList.add('show');
    })
    my_acc .addEventListener('mouseleave', function(){
        dropdown.classList.remove('show');
    })
    dropdown .addEventListener('mouseleave', function(){
        dropdown.classList.remove('show');
    })
});
