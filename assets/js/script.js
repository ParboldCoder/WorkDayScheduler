$(document).ready(function() {
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

  function updateColors() {
    var currentHour = dayjs().hour();

    $('.time-block').each(function() {
      var blockHour = parseInt($(this).attr('data-hour'));

      if (blockHour < currentHour) {
        $(this).removeClass('present future').addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }
  
  for (var i = 9; i <= 17; i++) {
    var timeBlock = $('<div>').addClass('time-block').attr('data-hour', i);
    var hourCol = $('<div>').addClass('hour').text(dayjs().hour(i).format('hA'));
    var textArea = $('<textarea>').attr('id', 'event-' + i);
    var saveBtn = $('<button>').addClass('saveBtn').text('Save');

    timeBlock.append(hourCol, textArea, saveBtn);
    $('.container').append(timeBlock);
  }