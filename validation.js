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