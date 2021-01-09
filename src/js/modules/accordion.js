const accordion = (triggersSelector) => {
   // const accordion = (triggersSelector, itemSelector) => {

   const btns = document.querySelectorAll(triggersSelector);

   btns.forEach(element => {
      element.addEventListener('click', function () {
         this.classList.toggle('active-style');
         this.nextElementSibling.classList.toggle('active-content');

         if (this.classList.contains('active-style')) {
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';

         } else {
            this.nextElementSibling.style.maxHeight = '0px';
         }
      });
   });


   //const blocks = document.querySelectorAll(itemSelector);

   // blocks.forEach(element => {
   //    element.classList.add('animated', 'fadeInDown');
   // });

   // btns.forEach(element => {
   //    element.addEventListener('click', function () {
   //       if (!this.classList.contains('active')) {
   //          btns.forEach(element => {
   //             element.classList.remove('active', 'active-style');
   //          });
   //          this.classList.add('active', 'active-style');
   //       }
   //    });
   // });

};

export default accordion;