$(document).ready(function() {


  $('#randombutt').on('click', function() {
    event.preventDefault();
    $.ajax({
      url: '/balance'
    }).done(function(data) {
      $('.display').fadeOut(400, function() {
        $(this).html(data);
      }).fadeIn(400);
    });
  });
});
/*
    append(data);
    $(this).fadeOut(400, function(){
      $(this).
    })
    )
  });

});
console.log("test");
});
*/
