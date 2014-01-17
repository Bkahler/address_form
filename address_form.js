$(function(){
  validate_submit();
  validate_inline();

  //inline validation function to test if appropriate entry has been entered in each field before submit
  function validate_inline(){
    // Start of inline test for streetNumber
    $('#streetNumber').blur(function(event){
      if ($('#streetNumber').val().match(/^\d+\s[a-zA-Z]+/) ){
        $('#streetNumber').removeClass("error")
        $('#street_error').css('visibility', 'hidden');
      }
      else{
        $('#streetNumber').addClass("error");
        $('#street_error').css('visibility', 'visible');
      };
    });
    //end of inline test for street number

    //Start of inline test for city
    $('#city').blur(function(event){
      if ($('#city').val().match(/^[a-zA-Z]/)){
        $('#city').removeClass("error");
        $('#city_error').css('visibility', 'hidden');
      }
      else{
        $('#city').addClass("error")
        $('#city_error').css('visibility', 'visible');
      }
    });
    //end of inline test for city

    //Start of inline test for State
    $('#state').blur(function(event){

      if($('#state').val() ==""){
        $('#state').addClass('error');
        $('#state_error').css('visibility', 'visible');
      }
      else{
        $('#state').removeClass('error');
        $('#state_error').css('visibility', 'hidden');
      };
    });
    //end of inline test for state

    //Start of inline test for zipcode
    $('#zip').blur(function(event){

      if($('#zip').val().match(/\d{5}/)){
        $('#zip').removeClass('error');
        $('#zip_error').css('visibility','hidden')
      }
      else{
        $('#zip').addClass('error');
        $('#zip_error').css('visibility','visible')
      }

    })
    //end of zip test




  };


  function validate_submit(){
    $('#address_form').submit(function(event){
      event.preventDefault();
      validateInput();
    });
  };
});