

function validateform(){  
    var name=document.myform.name.value;
    if (name==null || name==""){  
        // alert("Name can't be blank");
        document.getElementById("nameerror").innerHTML="sheiyvanet swori nomeri"  
        return false;
        }
    }


      

// email
function validateEmail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  // alert("enter valid E-mail \n @ ar ari:"+atposition+"\n . ar aris:"+dotposition);
  document.getElementById("mailerror").innerHTML="meilshi ar aris @ simbolo an . simbolo"  
  return false;  
  }  
}  

// matchpass

function matchPass(){
        var firstpassword=document.myform.password.value;
        var secondpassword=document.myform.password2.value;
        
        if(firstpassword==secondpassword){
        return true;
        }
        else{
        // alert("password does not match!");
        document.getElementById("passerror").innerHTML="paroli ar emtxveva"
        return false;
        }
        }


// password

var pass = document.getElementById("password")
pass.addEventListener('keyup', function(){
    checkPassword(pass.value)
})

function checkPassword(password) {
  var strengthBar = document.getElementById("strength")
  var strength = 0;
  if (password.match(/[a-z]+/)){
      strength += 1
  }
  if (password.match(/[0-9]+/)){
      strength += 1
  }
  if (password.match(/[A-Z]+/)){
      strength += 1
  }
  if (password.length >5){
      strength += 1
  }
  switch(strength){
    case 0:
      strengthBar.value = 0;
      break
    case 1:
      strengthBar.value = 25;
      break
    case 2: 
      strengthBar.value = 50;
      break
    case 3:
      strengthBar.value = 75;
      break  
    case 4:
      strengthBar.value = 100;
      break
  }
}

checkPassword()



// phone
function phoneValidation()
{
var a = document.myform.phone.value;
if(a=="")
{
// alert("please Enter the Contact Number");
document.getElementById("resultphone").innerHTML="sheiyvanet nomeri"
document.form.phone.focus();
return false;
}
if(isNaN(a))
{
//alert("Enter the valid Mobile Number(Like : 9566137117)");
document.getElementById("resultphone").innerHTML="sheiyvanet swori nomeri"
document.form.phone.focus();
return false;
}
if((a.length < 9) || (a.length > 9))
{
// alert(" Your Mobile Number must be 9 Integers");
document.getElementById("resultphone").innerHTML="sheiyvanet 9 nishna nomeri"
document.form.phone.select();
return false;
}
}

// country





// date
function isValidDate(date) {
  var temp = date.split('/');
  var d = new Date(temp[2] + '/' + temp[0] + '/' + temp[1]);
  return (d && (d.getMonth() + 1) == temp[0] && d.getDate() == Number(temp[1]) && d.getFullYear() == Number(temp[2]));

}  


document.getElementById("muform").click(function(e){
  e.preventDefault();
  document.getElementById("result").innerHTML = "ar darefreshda"
})


 
// const myform = document.getElementById('myform');

        
// myform.addEventListener('submit', function(e){
//   e.preventDefault();

//   const formData = new FormData(this);
//   const searchParams = new URLSearchParams();

//   for(const pair of formData){
//       searchParams.append(pair[0],pair[1])
//   }

//   fetch('login.php',{
//     method:"post",
//     body: searchParams
//   }).then(function(response){
//     return response.text();
//   }).then(function(text){
//     console.log(text);
//   }).catch(function(error){
//     console.log(error);
//   })

// });


// myform.addEventListener("submit",function(e){
//   e.preventDefault();
// })