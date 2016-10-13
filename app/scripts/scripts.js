//Initiate Vidage
$('document').ready(function(){
    //new Vidage('#VidageVideo');
});
$(window).scroll(function(){
    if($(document).scrollTop() > ($(window).height())*.88) {
      $('.logo').css({'height': '8vh'});
      $('ul.nav li a').css({'padding-top' : 'calc(4vh - 10px)', 'padding-bottom' : 'calc(4vh - 10px)'});
      $('.custom-ham').css({'margin-top' : 'calc(4vh - 10px)', 'margin-bottom' : 'calc(4vh - 10px)'});
    }
    else {
      $('.logo').css({'height': '15vh'});
      $('ul.nav li a').css({'padding-top' : 'calc(7.5vh - 10px)', 'padding-bottom' : 'calc(7.5vh - 10px)'});
      $('.custom-ham').css({'margin-top' : 'calc(7.5vh - 10px)', 'margin-bottom' : 'calc(7.5vh - 10px)'});
    }
});
//function to toggle Terms and conditions
function toggleTnC(){
  ($('.tnc-text').css('display')=='none')?(
    $('.tnc-text').show(),
    $('.tnc-arrow').html('<span class="glyphicon glyphicon-chevron-up"></span>')
  ):(
    $('.tnc-text').hide(),
    $('.tnc-arrow').html('<span class="glyphicon glyphicon-chevron-down"></span>')
  );
}
