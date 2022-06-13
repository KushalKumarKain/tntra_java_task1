
function validateform(){ 
  event.preventDefault()
    let first_name = document.form.f_name.value;
    let last_name = document.form.l_name.value;
    let addline1 = document.form.addressline1.value;
    let addline2 = document.form.addressline2.value;
    let city1 = document.form.city.value;
    let state1 = document.form.state.value;
    let postal1 = document.form.postal.value;
    let num = document.form.number.value;
    let mail = document.form.email.value;
    let feedback1 = document.form.feedback.value;
    let suggestions1 = document.form.suggestions.value;
    var radioselect = document.form.querySelector('input[name="gender"]:checked');
    var dropdown1 = document.form.dropdown.value;

    if (first_name == ""){
      let msg;
      msg = "This field is required";
      document.getElementById("first_name").innerHTML = msg;
    }
    if (last_name == ""){
      let msg;
      msg = "This field is required";
      document.getElementById("last_name").innerHTML = msg;
    }
    if (addline1 == ""){
      let msg;
      msg = "This field is required";
      document.getElementById("addline1").innerHTML = msg;
    }
    if (addline2 == ""){
      let msg;
      msg = "This field is required";
      document.getElementById("addline2").innerHTML = msg;
    }
    if (city1 == ""){
      let msg;
      msg = "This field is required";
      document.getElementById("city1").innerHTML = msg;
    }
    if (state1 == ""){
      let msg;
      msg = "This field is required";
      document.getElementById("state1").innerHTML = msg;
    }
    if (postal1 == ""){
      let msg;
      msg = "This field is required";
      document.getElementById("postal1").innerHTML = msg;
    }
    if (num == "" || num == isNaN || num == length(10)){
      let msg;
      msg = "This field is required and enter only numbers.";
      document.getElementById("num").innerHTML = msg;
    }
    if (mail == ""){
      let msg;
      msg = "This field is required";
      document.getElementById("mail").innerHTML = msg;
    }
    if (feedback1 == "" || feedback1 == length(100)){
      let msg;
      msg = "This field is required";
      document.getElementById("feedback1").innerHTML = msg;
    }
    if (suggestions1 == "" || suggestions1 == length(150)){
      let msg;
      msg = "This field is required";
      document.getElementById("suggestions1").innerHTML = msg;
    }

    if (dropdown1 == ""){
      let msg;
      msg = "This field is required";
      document.getElementById("dropdown1").innerHTML = msg;
    }

    {
    if (radioselect != null)
      {
        document.getElementById("gender1").innerHTML= radioselect.value + " gender is selected";
      }

    else{
      let msg;
      msg = "This field is required";
      document.getElementById("gender1").innerHTML = msg;
      }
    }
    {
    if (document.getElementById("<%=ddl_country.ClientID%>").value == "--Choose Option")
      {    
        alert('!!!!!!Please Enter a country.');    
        document.getElementById("<%=ddl_country.ClientID%>").focus();    
        return false;    
      }    
    return true;    
    }
;}