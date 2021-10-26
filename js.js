const btn1 = $( '.btn-1' );
const btn2 = $( '.btn-2' );
const btn3 = $( '.btn-3' );
const btn4 = $( '.btn-4' );
const call_btn = $( '.btn-z' );
const call_btn1 = $( '#btn-z' );
const callClass = $( '.call' );
const callClass1 = $( '.call1' );
const close = $( '#close' );
const menu = $( '#burger-menu' );
const image = $('#image');
const menu_box = $('#burger-list');
const menu_link = $('.menu-link');
let isMenu = true;
let isCall = true;
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
btn1.click(() => {
  setAdvice(1);
});
btn2.click(() => {
  setAdvice(2);
});
btn3.click(() => {
  setAdvice(3);
});
btn4.click(() => {
  setAdvice(4);
});

call_btn.click( () => {
  modal();
});

call_btn1.click( () => {
  modal();
});

close.click(() => {
  modal();
})

const modal = () => {
  if (isCall) {
    callClass.addClass('d-block');
    callClass1.addClass('d-block');
    isCall = !isCall;
  }
  else {
    callClass.removeClass('d-block')
    callClass1.removeClass('d-block')
    isCall = !isCall;
  }
}

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

$(function(){
  $("#phone").mask("+375(99) 999-99-99");
});
$(function(){
  $("#phone1").mask("+375(99) 999-99-99");
});

$('.dropdown-el').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
});
$(document).click(function() {
  $('.dropdown-el').removeClass('expanded');
});
jQuery(($) => {
  $('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next().fadeOut();
    } else {
      $('.select__head').removeClass('open');
      $('.select__list').fadeOut();
      $(this).addClass('open');
      $(this).next().fadeIn();
    }
  });

  $('.select').on('click', '.select__item', function () {
    $('.select__head').removeClass('open');
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
    if (!$(e.target).closest('.select').length) {
      $('.select__head').removeClass('open');
      $('.select__list').fadeOut();
    }
  });
});
