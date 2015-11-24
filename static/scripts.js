$(document).ready(function() {


  $('#randombutt').on('click', function() {
    $.ajax({
      url: '/balance'
    }).done(function(data) {
      $('.display').fadeOut(300, function() {
        $(this).html(data);
      }).fadeIn(300);


    });
  });
});
