
$(document).ready(function(){

  // function for first name
  $("#first_name").hide();
  let firstname_err = true;
  $("#f_name").keyup(function(){
    validatefirstname();
  });

  function validatefirstname(event){
    let firstnamevalue = $("#f_name").val();
    if (firstnamevalue.length == "" ){
      $("#first_name").show();
      firstname_err = false;
      return false;
    }
    else ("#first_name").hide();
  }

  // function for last name
  $("#last_name").hide();
  let lastname_err = true;
  $("#f_name").keyup(function(){
    validatelastname();
  });

  debugger
  function validatelastname(event){
    
    let lastnamevalue = $("#l_name").val();
    if (lastnamevalue.length == "" ){
      $("#last_name").show();
      lastname_err = false;
      return false;
    }
    else ("#last_name").hide();
  }


  $("#submitbtn").click(function(event){

    
    
    validatefirstname();
    validatelastname();
    event.preventDefault();
    if (
      firstname_err == true,
      lastname_err == true  
    )
    return true;
    else {
      return false;
    }
  
  
  });






});