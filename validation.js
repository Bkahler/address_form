function validateInput(){
  var formValid = false
  var treetNumberValid = false
  var unitValid = false
  var cityValid = false
  var stateValid = false
  var zipValid = false

  $('#errorMessage').empty();

      if ($('#streetNumber').val().match(/^\d+\s[a-zA-Z]+/) ){
        streetNumberValid = true
        $('#streetNumber').removeClass("error")
      }
      else{
        $('#streetNumber').addClass("error")
        $('#errorMessage').append('<li>Street Number cannot be blank </li>')
      };

      if($('#unit').val().length > 4){
        $('#unit').addClass("error")
        $('#errorMessage').append('<li> That does not appear to be a valid unit number</li>')
      }
      else{
        unitValid = true
        $('#unit').removeClass("error")
      };

      if($('#city').val() ==""){
        $('#city').addClass("error")
        $('#errorMessage').append('<li>City cannot be blank </li>')
      }
      else{
        cityValid = true
        $('#city').removeClass("error")
      };

      if($('#state').val() ==""){
        $('#state').addClass("error")
        $('#errorMessage').append('<li>Please Select a State</li>')
      }
      else{
        stateValid = true
        $('#state').removeClass("error")
      };

      if ($('#zip').val().match(/\d{5}/) ){
        alert('zip is good to go!');
        $('#zip').removeClass("error");
        zipValid = true
      }
      else{
        $('#zip').addClass("error")
        $('#errorMessage').append('<li>Please provide a valid Zip Code</li>')
      };

      if (zipValid && stateValid && cityValid && unitValid && streetNumberValid == true){
        alert('your form is valid')
      }
      else{
        alert('somthing is wrong')
          formValid = false
          treetNumberValid = false
          unitValid = false
          cityValid = false
          stateValid = false
          zipValid = false
      };

    };