jQuery(document).ready(function() {

  //* Add main menu button
  $('.nav-primary').before('<button class="menu-toggle"></button>');
  //* Add sub menu buttons
  $('.nav-primary .sub-menu').before('<button class="sub-menu-toggle"></button>');

  //* Main menu toggle function
  $('.menu-toggle').click(function(){
    $(this).toggleClass('activated');
    $('.nav-primary').slideToggle('fast');
  });

  //* Sub menu toggle function
  $('.sub-menu-toggle').click(function(){
    $(this).toggleClass('activated');
    $(this).next('.sub-menu').slideToggle('fast');

    others = $(this).closest('.menu-item').siblings();
    others.find('.sub-menu-toggle').removeClass('activated');
    others.find('.sub-menu').slideUp('fast');
  });

});
