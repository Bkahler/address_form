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
      }
      else{
        $('#streetNumber').toggleClass("error")
        $('#errorMessage').append('<li>Street Number cannot be blank </li>')
      };

      if($('#unit').val().length > 4){
        $('#unit').toggleClass("error")
        $('#errorMessage').append('<li> That does not appear to be a valid unit number</li>')
      }
      else{
        unitValid = true
      };

      if($('#city').val() ==""){
        $('#city').toggleClass("error")
        $('#errorMessage').append('<li>City cannot be blank </li>')
      }
      else{
        cityValid = true
      };

      if($('#state').val() ==""){
        $('#state').toggleClass("error")
        $('#errorMessage').append('<li>Please Select a State</li>')
      }
      else{
        stateValid = true
      };

      if ($('#zip').val().match(/\d{5}/) ){
        alert('zip is good to go!');
        zipValid = true
      }
      else{
        $('#zip').toggleClass("error")
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