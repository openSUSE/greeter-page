$(document).ready(function() {

  // Toggle Extra Informations for single Topic by Click +
  $('.toggle-sibling').click(function() {
    var infoBox = $(this).parent().next('.details-wrapper');
    // console.log(infoBox);
    
    if (infoBox.hasClass('active')) {
      // if info box is open, close it and remove status-marker-class
      infoBox.slideUp('fast').removeClass('active');
    } else {
      // if closed, open amd add status-marker-class
      infoBox.slideDown('fast').addClass('active');
    };
    
    return false;
  });
  
  // Detect Browser Language
  console.log(window.navigator.language);
  
  
});
