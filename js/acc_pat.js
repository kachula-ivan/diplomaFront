function clearAllFormInputs() {
  let form = document.getElementById('form');
  let inputs = form.getElementsByTagName('input');
  for (let input of inputs)
    input.value = '';
}

let button = document.getElementById('button');
button.addEventListener('click', clearAllFormInputs);

$(window).ready(()=>{
    function resetCalc() {
        document.getElementById('sel').value = 'none';
        document.getElementById('sele').value = 'none';
      }
       button.onclick = resetCalc;
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