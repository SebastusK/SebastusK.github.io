$(function () {
       $('[data-toggle="tooltip"]').tooltip()
    });

    $('#txt').tooltip({ boundary: 'window' });
    $('#image').tooltip({ boundary: 'window' });

    $(document).ready(function(){
      $("#grad").click(function(){
        scrollTo("#test");
      });
    });
      function scrollTo(element){
        $('html,body').animate({
          scrollTop: $(element).offset().top
        }, 2000);
      }