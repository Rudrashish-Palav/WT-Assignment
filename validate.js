function validateForm()
{  

  function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+.[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(registration.email.value))
  {
    return(mail);
  }
    alert("You have entered an invalid email address!")
    return false;
}


  var fname = document.forms["registration"]["fn"].value;
  var ln = document.forms["registration"]["ln"].value;
  var mail = document.forms["registration"]["email"].value;
  var password = document.forms["registration"]["pass"].value;
  var repassword = document.forms["registration"]["repass"].value;
  var dob = document.forms["registration"]["dob"].value;
  var address = document.forms["registration"]["address"].value;
  var gender = document.getElementsByName('gender');
  var genValue = false;



  if(fname=="")
  {
    alert("please enter your first name");
    return false;
  }

  if(ln=="")
  {
    alert("please enter your last name");
    return false;
  }

  if(mail=="")
  {
    alert("please enter your  E-mail id ");
    return false;
  }
  else 
  {
   ValidateEmail(mail);

  }

  if(password=="")
  {
    alert("Please enter your Password");
    return false;
  }

  
  if(repassword=="")
  {
    alert("Please Re-enter your Password");
    return false;
  }

  if(dob=="")
  {
    alert("please enter your  date of birth");
    return false;
  }

  for(var i=0; i<gender.length;i++){
            if(gender[i].checked == true){
                genValue = true;    
            }
        }
        if(!genValue){
            alert("Please Choose the gender");
            return false;
        }

   
  if(address=="")
  {
    alert("please enter name of your state");
    return false;
  }
  
 

  
}