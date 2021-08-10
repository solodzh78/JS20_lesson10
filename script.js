/* 
Используя только файл скрипта  выполнить такие действия:
  Восстановить порядок книг.
  Заменить картинку заднего фона на другую из папки image
  Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
  Удалить рекламу со страницы
  Восстановить порядок глав во второй и пятой книге 
  (внимательно инспектируйте индексы элементов, поможет dev tools)
  в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
*/
'use strict';

const ads = document.querySelector('div.adv')
ads.remove();
const books = document.querySelectorAll('.book');
console.log('books: ', books);
books[0].before(books[1]);
books[3].before(books[4]);
books[5].after(books[2]);
books[4].querySelector('h2>a').textContent = 'Книга 3. this и Прототипы Объектов';
const book2li = books[0].querySelectorAll('li');
console.log('book2li: ', book2li);
book2li[3].after(book2li[6]);
book2li[6].after(book2li[8]);
book2li[9].after(book2li[2]);
const book5li = books[5].querySelectorAll('li');
console.log('book5li: ', book5li);
book5li[1].after(book5li[9]);
book5li[7].after(book5li[5]);
book5li[4].after(book5li[2]);

