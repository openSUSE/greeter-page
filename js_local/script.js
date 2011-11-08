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
  
  // Toggle Info Columns
  
  $('a.info-trigger').click(function() { // open box on click
    
    var objID = this.id; // Get ID of clicked element
    
    if (objID == 'info1-trigger') { // open info-box 1
      openInfoBox('#col-1');
    } else if (objID == 'info2-trigger') { // open info-box 2
      openInfoBox('#col-2');
    };
    
    return false;
  });

  // Close all open info-boxes and open the requested info-box
  function openInfoBox (id) {    
    // close all <section> with class "active"
    $('section.active').slideUp('fast').removeClass('active');

     // open the requested info-box and add class "active"
    $(id).slideDown('fast').addClass('active');
  }
  
  // Detect Browser Language
  console.log(window.navigator.language);
  
  
});
