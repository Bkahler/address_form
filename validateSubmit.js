function validateSubmit(){

  //creation of validation variables that will be toggled to true if
  //the corresponding entry is valid.
  var formValid = false
  var streetNumberValid = false
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

      //checks that all validation variables have beent toggled to true.
      if (zipValid && stateValid && cityValid && streetNumberValid == true){
        var streetNumber_input = $('#streetNumber').val()
        var city_input = $('#city').val()
        var state_input = $('#state').val()
        var zip_input = $('#zip').val()

        var full_address = streetNumber_input +" "+city_input+", "+state_input+" "+ zip_input

        //Show's user the address they have entered.
        alert( full_address )

        //resets the input fields to blank after submit. Will prevent accidental double entry.
        $('#streetNumber').val("")
        $('#city').val("")
        $('#state').val("")
        $('#zip').val("")
      }
      else{
        //if all the validation variables don't pass the test, the whole set is toggled to false.
        //validation must check every variable again.
        alert('Something is wrong... Please check the form')
          formValid = false
          treetNumberValid = false
          unitValid = false
          cityValid = false
          stateValid = false
          zipValid = false
      };
    };