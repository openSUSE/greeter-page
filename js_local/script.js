$(document).ready(function() {

  // Toggle Extra Informations for single Topic by Click +
  $('.toggle-sibling').click(function() {
    $(this).parent().next('.details-wrapper').toggle('fast');
    return false;
  });
  
});
