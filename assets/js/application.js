var elementPosition = $('#sticky-nav').offset();

$(document).scroll(function() {
    if($(window).scrollTop() > elementPosition.top){
        $('#sticky-nav').addClass('navbar-fixed-top');
    } else {
        $('#sticky-nav').removeClass('navbar-fixed-top');
    }
});

var party = $('.wed-party-mem li h4');

party.on('click', function() {
  $(".person-bio").hide();
  $("h4").show();
  $(this).slideToggle();
  $(this).siblings(".person-bio").slideToggle();
});

var menuLink = $('.menu');
var menuModal = $('.menu-modal');

menuLink.on('click', function() {
  menuModal.show();
})

menuModal.on('click', function() {
  menuModal.hide();
})
