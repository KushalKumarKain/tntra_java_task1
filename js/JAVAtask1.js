function validateform(){ 
  event.preventDefault()
    let first_name = document.form.f_name.value;
    let last_name = document.form.l_name.value;
    let num = document.form.number.value;
    let mail = document.form.email.value;
    
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
    if (num == ""){
      let msg;
      msg = "This field is required";
      document.getElementById("num").innerHTML = msg;
    }
    if (mail == ""){
      let msg;
      msg = "This field is required";
      document.getElementById("mail").innerHTML = msg;
    }
    
    
    }