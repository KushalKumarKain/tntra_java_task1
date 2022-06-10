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
    if (feedback1 == ""){
      let msg;
      msg = "This field is required";
      document.getElementById("feedback1").innerHTML = msg;
    }
    if (suggestions1 == ""){
      let msg;
      msg = "This field is required";
      document.getElementById("suggestions1").innerHTML = msg;
    }
    
    }