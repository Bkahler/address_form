$(function(){
  submit()

  function submit(){
    $('#address_form').submit(function(event){
      event.preventDefault();
      validateInput();
    });
  };
});