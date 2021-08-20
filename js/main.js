$(document).ready(function () {
  var currentFloor = '2'; //переменная, где храниться текущий этаж
  var floorPath= $('.home-img path'); //каждый отдельный этаж в svg
  var counterUp = $('.counter-up'); /*кнопка увеличение этажа */
  var counterDown = $('.counter-down'); /*кнопка уменьшения этажа */
var modal = $('.modal');
var modalClouseButton = $('.model-close-button');
var viewFlatsButton = $('.view-flats');

 floorPath.on('mouseover', function(){
   floorPath.removeClass('current-floor');
   currentFloor=$(this).attr('data-floor');
  $('.counter').text(currentFloor);
  });
  
viewFlatsButton.on('click',toggleModal);  
floorPath.on('click',toggleModal);/*при клике на этаж вызывает окно */

modalClouseButton.on('click',toggleModal);/*при клике на крестик закрывает окно */



/*поведение вверхней кнопки */
counterUp.on('click', function() { //отслежиаем клик по кнопке вверх
if (currentFloor < 18){ // определяем переменную с этажом, оно не должно быть больше 18
  currentFloor++;
usCurrenFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits:2 , useGrouping: false});/*переделывание что бы вместо 2 было 02 */
 $('.counter').text(usCurrenFloor);
floorPath.removeClass('current-floor'); /*очищение от класса *от синего на доме */ // удоление класса
  $(`[data-floor=${usCurrenFloor}]`).toggleClass('current-floor'); /*добавление синей дичи*/ // подсвечиваем текущий этаж
}
});

////////////////////////

counterDown.on('click', function() { /*поведение нижней кнопки */
if (currentFloor > 2){
  currentFloor--;
usCurrenFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits:2 , useGrouping: false}); /*переделывание что бы вместо 2 было 02 */
 $('.counter').text(usCurrenFloor);

floorPath.removeClass('current-floor'); /*очищение от класса *от синего на доме */
  $(`[data-floor=${usCurrenFloor}]`).toggleClass('current-floor'); /*добавление синей дичи*/
}
});

function toggleModal() { //функция открыть\закрыть окно
  modal.toggleClass('is-open');
}

});