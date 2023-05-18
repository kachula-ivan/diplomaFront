    $(window).ready(()=>{
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