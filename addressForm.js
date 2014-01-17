$(function(){
  formSubmission();
  validateInline();

});

// function to handle form submission. Could also contain AJAX call if the data was being sent somewhere
function formSubmission(){
  $('#address_form').submit(function(event){
    event.preventDefault();
    validateSubmit();
  });
};