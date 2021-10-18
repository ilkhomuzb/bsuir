const btn1 = $( '.btn-1' );
const btn2 = $( '.btn-2' );
const btn3 = $( '.btn-3' );
const btn4 = $( '.btn-4' );
const menu = $( '#burger-menu' );
const image = $('#image');
const menu_box = $('#burger-list');
const menu_link = $('.menu-link');
let isMenu = true;
menu.click( () => {
 if (isMenu) {
   menu_box.addClass('menu-list1');
   menu.addClass('btn-fixed opened');
   isMenu = !isMenu;
 }
 else {
   menu_box.removeClass('menu-list1');
   menu.removeClass('btn-fixed opened');
   isMenu = !isMenu;
 }
});
btn1.click(function() {
  setAdvice(1);
});
btn2.click(function() {
  setAdvice(2);
});
btn3.click(function() {
  setAdvice(3);
});
btn4.click(function() {
  setAdvice(4);
});

function setAdvice(num){
  switch (num) {
    case 1: {
      setAdviceText('Учитываются все особенности Вашего здоровья. Для нас важно, чтобы занятия не были во вред Вашему здоровью.','Учет особенностей здоровья');
      btn1.addClass('btn-active');
      btn2.removeClass('btn-active');
      btn3.removeClass('btn-active');
      btn4.removeClass('btn-active');
      image.attr('src','./image/icon_1.png');
      break;}
    case 4: {
      setAdviceText('Для более эффективного и быстрого результатамы составим для Вас фитнес-меню с учетом Ваших предпочтений.','Персональное питание');
      btn1.removeClass('btn-active');
      btn2.removeClass('btn-active');
      btn3.removeClass('btn-active');
      btn4.addClass('btn-active');
      image.attr('src','./image/icon_4.png');
      break;}
    case 3: {
      setAdviceText('Дни и время занятий подбираютсяиндивидуально под Вас.','Индивидуальный график');
      btn1.removeClass('btn-active');
      btn2.removeClass('btn-active');
      btn3.addClass('btn-active');
      btn4.removeClass('btn-active');
      image.attr('src','./image/icon_3.png');
      break;}
    default: {
      setAdviceText('Результат работы не заставит себя ждать! Уже через неделю вы увидите изменения в зеркале.','Эффективность упражнений');
      btn1.removeClass('btn-active');
      btn2.addClass('btn-active');
      btn3.removeClass('btn-active');
      btn4.removeClass('btn-active');
      image.attr('src','./image/icon_2.png');
    }
  }
}

menu_link.click(function() {
  menu_box.removeClass('menu-list1');
  menu.removeClass('btn-fixed opened');
  isMenu = !isMenu;
});

function setAdviceText(text, text2) {
  $( "#advice-text" ).text(text)
  $( "#mobile-text" ).text(text2)
}

$('.single-item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
});
