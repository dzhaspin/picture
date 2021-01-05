import {
   postData
} from '../services/requests';

const forms = () => {
   const form = document.querySelectorAll('form'),
      inputs = document.querySelectorAll('input'),
      textarea = document.querySelectorAll('textarea'),
      upload = document.querySelectorAll('[name="upload"]');

   // checkNumInputs('input[name="user_phone"]');

   // Сообщение
   const message = {
      // loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так...',
      spinner: 'assets/img/spinner.gif',
      ok: 'assets/img/ok.png',
      fail: 'assets/img/fail.png'
   };

   const path = {
      designer: 'assets/server.php',
      question: 'assets/question.php'
   };



   // Функция очистки input
   const clearInputs = () => {
      inputs.forEach(item => {
         item.value = '';
      });
      textarea.forEach(item => {
         item.value = '';
      });
      upload.forEach(item => {
         item.previousElementSibling.textContent = "Файл не выбран";
      });
   };

   upload.forEach(item => {
      item.addEventListener('input', () => {
         console.log(item.files[0]);
         let dots;
         const arr = item.files[0].name.split('.');

         arr[0].length > 6 ? dots = "..." : dots = '.';
         const name = arr[0].substring(0, 6) + dots + arr[1];
         item.previousElementSibling.textContent = name;
      });
   });

   // Перебираем все Формы
   form.forEach(item => {
      item.addEventListener('submit', (e) => {
         e.preventDefault();

         // Создаем блок с сообщениями
         let statusMessage = document.createElement('div');
         statusMessage.classList.add('status');
         item.parentNode.appendChild(statusMessage);

         item.classList.add('animated', 'fadeOutUp');
         setTimeout(() => {
            item.style.display = 'none';
         }, 400);

         let statusImg = document.createElement('img');
         statusImg.setAttribute('src', message.spinner);
         statusImg.classList.add('animated', 'fadeInUp');
         statusMessage.appendChild(statusImg);

         let textMessage = document.createElement('div');
         textMessage.textContent = message.loading;
         statusMessage.appendChild(textMessage);


         // Собираем все данные из этой Формы
         const formData = new FormData(item);
         let api;
         item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
         console.log(api);

         // Отправляем запрос на сервер c данными formData
         postData(api, formData)
            .then(res => {
               console.log(res);
               statusImg.setAttribute('src', message.ok);
               textMessage.textContent = message.success;
            })
            .catch(() => {
               statusImg.setAttribute('src', message.fail);
               textMessage.textContent = message.failure;
            })
            .finally(() => {
               clearInputs();
               setTimeout(() => {
                  statusMessage.remove();
                  item.style.display = 'block';
                  item.classList.remove('fadeOutUp');
                  item.classList.add('fadeInUp');
               }, 5000);
            });
      });
   });
};

export default forms;