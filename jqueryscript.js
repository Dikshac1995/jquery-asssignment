$(function(){

$("#fName_errormsg").hide();
$("#lName_errormsg").hide();
$("#phoneNo_errormsg").hide();
$("#officeNo_errormsg").hide();
$("#email_errormsg").hide();
$("#password_errormsg").hide();
$("#bday_errormsg").hide();
$("#aboutU_errormsg").hide();
$("#check_errormsg").hide();
$("#gender_errormsg").hide();

var err_fName= false;
var err_lName= false; 
var err_phoneNo= false; 
var err_officeNo= false; 
var err_email= false; 
var err_pass= false; 
var err_cpass= false; 
var err_bday= false; 
var err_check= false; 
var err_aboutU= false; 
var err_gender= false; 





//   validation for Fname
$("#fName").focusout(function()
{
  check_fName();
});


//   validation for lname
$("#lName").focusout(function()
{
  
var lName_length = $("#lName").val();

if (lName_length == "")
    {
        $("#lName_errormsg").html("This is required");
        $("#lName_errormsg").show();
        err_fName=true;
    }
 else 
    {
        $("#lName_errormsg").hide();
    }
    
});

//   validation for Phoneno

$("#phoneNo").focusout(function()
{
  
var  ph_no = $("#phoneNo").val();

if (ph_no == "")
    {
        $("#phoneNo_errormsg").html("This is required");
        $("#phoneNo_errormsg").show();
        err_phoneNo=true;
    }

    else if (isNaN(ph_no))
    {
        $("#phoneNo_errormsg").html("phoneno should be numeric");
        $("#phoneNo_errormsg").show();
        err_phoneNo=true; 
    }
    else if (ph_no.length != 10)
    {
        $("#phoneNo_errormsg").html("phoneno must be 10 digit");
        $("#phoneNo_errormsg").show();
        err_phoneNo=true; 
    }
 else 
    {
        $("#phoneNo_errormsg").hide();
    }
    
});

//   validation for officeno


$("#officeNo").focusout(function()
{
  
var  office_no = $("#officeNo").val();

if (office_no == "")
    {
        $("#officeNo_errormsg").html("This is required");
        $("#officeNo_errormsg").show();
        err_officeNo=true;
    }

    else if (isNaN(office_no))
    {
        $("#officeNo_errormsg").html("officeNo should be numeric");
        $("#officeNo_errormsg").show();
        err_officeNo=true; 
    }
    else 
    {
        $("#officeNo_errormsg").hide();
    }
    
});

//   validation for emailid

$("#emailid").focusout(function()
{
  
var  email_id = $("#emailid").val();

if (email_id == "")
    {
        $("#email_errormsg").html("this is required");
        $("#email_errormsg").show();
        err_email=true;
    }

    else if ( !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_id))
    {
        $("#email_errormsg").html("email contain one special symbol,one small letter,one capital letter and contain symbol");
        $("#email_errormsg").show();
        err_email=true; 
    }
    else 
    {
        $("#email_errormsg").hide();
    }
    
});

//validation for password

$("#pass").focusout(function()
{
  
var  pass = $("#pass").val();
var passpatern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
if (pass == "")
    {
        $("#password_errormsg").html("This is required");
        $("#password_errormsg").show();
        err_pass=true;
    }

    else if (!passpatern.test(pass)) 
    {
        $("#password_errormsg").html("password should contain 1 special symbol ,uppercase letter,and alphanumeric");
        $("#password_errormsg").show();
        err_pass=true; 
    }
    else 
    {
        $("#password_errormsg").hide();
    }
    
});

// validation for conform validation

$("#conpass").focusout(function()
{
  
var  conpass = $("#conpass").val();
// var  pass = $("#pass").val();

if (conpass == "")
    {
        $("#cpassword_errormsg").html("This is required");
        $("#cpassword_errormsg").show();
        err_cpass=true;
    }

    else  if (pass != conpass)
    {
        $("#cpassword_errormsg").html("password don't matched");
        $("#cpassword_errormsg").show();
        err_cpass=true; 
    }
    else 
    {
        $("#cpassword_errormsg").hide();
    }
    
});



// validation for Dbay

$("#bMonth").focusout(function()
{
  
bDay_validation();
   
});
$("#bDay").focusout(function()
{
  
bDay_validation();
   
});
$("#bYear").focusout(function()
{
  
bDay_validation();
   
});


//validation for gender

    $("#checkbox_sample18").click(function() {     
    if(($('input[type=radio][name=radio]:checked').val()) == false)
    {
       alert("Please select atleast one");
       return false;
    }
    else
    {
        alert("radio button selected value: ");
    }      
  });

  //validation for interest
    
  if ($('input[name = checkbox_sample18]:checked') == false)
    
 {
    $("#check_errormsg").html("This is required");
    $("#check_errormsg").show();
    err_check=true;
}
else 
{
    $("#check_errormsg").hide();
}


//validation for About us

$("#aboutU").focusout(function()
{
  
var  aboutU = $("#aboutU").val();

if (aboutU == "")
    {
        $("#aboutU_errormsg").html("This is required");
        $("#aboutU_errormsg").show();
        err_aboutU=true;
    }

    else if (aboutU.length > 50) 
    {
        $("#aboutU_errormsg").html("Minimum 50 char only ");
        $("#aboutU_errormsg").show();
        err_aboutU=true; 
    }
    else 
    {
        $("#aboutU_errormsg").hide();
    }
    
});


function check_fName()
{
    var fName_length = $("#fName").val();

    if (fName_length == "")
    {
        $("#fName_errormsg").html("This is required");
        $("#fName_errormsg").show();
        err_fName=true;
    }
    else 
    {
        $("#fName_errormsg").hide();
    }
    
}



function bDay_validation()
{


var month = $("#bMonth").val();
var bday = $("#bDay").val();
var byear = $("#bYear").val();
var dateobj = new Date(byear, month, byear);
var datecurrent = new Date();


// var  pass = $("#pass").val();

if ((month == -1)||(bday == 0) ||(byear == 0))
    {
        $("#bday_errormsg").html("This is required");
        $("#bday_errormsg").show();
        err_bday=true;
    }

    else {
        var cyear = datecurrent.getFullYear() - dateobj.getFullYear();
        var mon = datecurrent.getMonth() - dateobj.getMonth();
        var age = cyear + " ." + mon + "";
        $("#bday_errormsg").hide();
        $("#age").val(age);
        return true;
    
    }
}

    
});
