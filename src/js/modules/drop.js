const drop = () => {

   const fileInputs = document.querySelectorAll('[name="upload"]');

   ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
      fileInputs.forEach(input => {
         input.addEventListener(eventName, preventDefault, false);
      });
   });

   function preventDefault(e) {
      e.preventDefault();
      e.stopPropagation();
   }

   function highLight(item) {
      item.closest('.file_upload').style.border = '3px solid #e819d7';
      item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, 0.5)';
   }

   function unhighlight(item) {
      item.closest('.file_upload').style.border = 'none';
      item.closest('.file_upload').style.backgroundColor = '';
   }

   ['dragenter', 'dragover'].forEach(eventName => {
      fileInputs.forEach(input => {
         input.addEventListener(eventName, () => highLight(input), false);
      });
   });

   ['dragleave', 'drop'].forEach(eventName => {
      fileInputs.forEach(input => {
         input.addEventListener(eventName, () => unhighlight(input), false);
      });
   });

   fileInputs.forEach(input => {
      input.addEventListener('drop', (e) => {
         input.files = e.dataTransfer.files;
         let dots;
         const arr = input.files[0].name.split('.');

         arr[0].length > 6 ? dots = "..." : dots = '.';
         const name = arr[0].substring(0, 6) + dots + arr[1];
         input.previousElementSibling.textContent = name;
      });
   });

};

export default drop;