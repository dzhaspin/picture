const pictureSize = (imgSelector) => {
   const blocks = document.querySelectorAll(imgSelector);

   function showImg(block) {
      const img = block.querySelector('img');

      img.src = img.src.slice(0, -4) + '-1.png';
      img.classList.remove('animated', 'fadeIn');
      img.classList.add('animated', 'fadeIn');
      block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
         p.style.display = 'none';
      });
   }

   function hidewImg(block) {
      const img = block.querySelector('img');
      img.classList.remove('animated', 'fadeIn');
      img.src = img.src.slice(0, -6) + '.png';
      block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
         p.style.display = 'block';
      });
   }

   blocks.forEach(block => {
      block.addEventListener('mouseover', () => {
         showImg(block);
      });
      block.addEventListener('mouseout', () => {
         hidewImg(block);
      });
   });
};

export default pictureSize;