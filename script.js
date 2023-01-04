
// wrapped code to prevent it running until called
$(document).ready(function () {
  //set event listener on save buttons
  $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    
    //sets input information to localstorage
    localStorage.setItem(time, value);
//notifier that event was added
    $('.notification').addClass('show');
//removes notification after set time.
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);
  });

  function hourUpdater() {
    // get current hour
    var currentHour = dayjs().hour();

    // loop over time blocks
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
//run hour updater
  hourUpdater();
//checks and updates timer
  setInterval(hourUpdater, 15000);
//retreives and checks for local storage data on refresh
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
//current day
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
