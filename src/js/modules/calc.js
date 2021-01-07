const calc = (size, material, options, promocode, result) => {
   const sizeBlock = document.querySelector(size),
      materialBlock = document.querySelector(material),
      optionsBlock = document.querySelector(options),
      promocodeBlock = document.querySelector(promocode),
      resultBlock = document.querySelector(result);

   let sum = 0;

   const calcFunc = () => {
      sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

      if (sizeBlock.value == '' || materialBlock.value == '') {
         resultBlock.innerHTML = "Пожалуйста, выберите размер и материал картины";
      } else if (promocodeBlock.value == 'IWANTPOPART' || promocodeBlock.value == 'IWANTPOPART ') {
         resultBlock.innerHTML = Math.round(sum - (sum * 30 / 100)) + '<small> ₽</small>';
         resultBlock.style.fontSize = '18px';
      } else {
         resultBlock.innerHTML = sum + '<small> ₽</small>';
         resultBlock.style.fontSize = '18px';
      }
   };

   sizeBlock.addEventListener('change', calcFunc);
   materialBlock.addEventListener('change', calcFunc);
   optionsBlock.addEventListener('change', calcFunc);
   promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;