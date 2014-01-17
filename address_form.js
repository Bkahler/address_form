$(function(){
  validate_submit();
  validate_inline();

  function validate_inline(){

    // Start of inline test for streetNumber
    $('#streetNumber').blur(function(event){
      if ($('#streetNumber').val().match(/^\d+\s[a-zA-Z]+/) ){
        streetNumberValid = true
        $('#streetNumber').removeClass("error")
        $('#street_error').css('visibility', 'hidden');
      }
      else{
        $('#streetNumber').addClass("error");
        $('#street_error').css('visibility', 'visible');
      };
    });
    //end
    //Start of inline test for city
    $('#city').blur(function(event){
      if ($('#city').val() == "" ){
        $('#city').addClass("error")
        $('#city_error').css('visibility', 'visible');
      }
      else{
        $('#city').removeClass("error");
        $('#city_error').css('visibility', 'hidden');
      };
    });




  };


  function validate_submit(){
    $('#address_form').submit(function(event){
      event.preventDefault();
      validateInput();
    });
  };
});