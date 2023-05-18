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
       const file = document.querySelector('#file');
file.addEventListener('change', (e) => {
  // Get the selected file
  const [file] = e.target.files;
  // Get the file name and size
  const { name: fileName, size } = file;
  // Convert size in bytes to kilo bytes
  const fileSize = (size / 1000).toFixed(2);
  // Set the text content
  const fileNameAndSize = `${fileName} - ${fileSize}KB`;
  document.querySelector('.file-name').textContent = fileNameAndSize;
});
});