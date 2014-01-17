function validateInput(){
  var formValid = false
  var treetNumberValid = false
  var unitValid = false
  var cityValid = false
  var stateValid = false
  var zipValid = false


      if ($('#streetNumber').val().match(/^\d+\s[a-zA-Z]+/) ){
        streetNumberValid = true
      };

      if ($('#city').val().match(/^[a-zA-Z]/)){
        cityValid = true
      };

      if($('#state').val() !==""){
        stateValid = true
      };

      if ($('#zip').val().match(/\d{5}/) ){
        zipValid = true
      };

      if (zipValid && stateValid && cityValid && streetNumberValid == true){
        var streetNumber_input = $('#streetNumber').val()
        var city_input = $('#city').val()
        var state_input = $('#state').val()
        var zip_input = $('#zip').val()

        var full_address = streetNumber_input +" "+city_input+", "+state_input+" "+ zip_input

        alert( full_address )

        $('#streetNumber').val("")
        $('#city').val("")
        $('#state').val("")
        $('#zip').val("")
      }
      else{
        alert('Something is wrong... Please check the form')
          formValid = false
          treetNumberValid = false
          unitValid = false
          cityValid = false
          stateValid = false
          zipValid = false
      };
    };