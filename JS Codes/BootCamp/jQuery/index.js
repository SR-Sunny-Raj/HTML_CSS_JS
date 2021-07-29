$('h1').css('color', 'orange');
$(document).keydown(function (event) {
  $('h1').text(event.key);
});
