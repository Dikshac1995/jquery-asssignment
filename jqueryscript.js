$(function(){

$("#fName_errormsg").hide();
$("#lName_errormsg").hide();
$("#phoneNo_errormsg").hide();
$("#officeNo_errormsg").hide();
$("#email_errormsg").hide();
$("#password_errormsg").hide();
$("#cpassword_errormsg").hide();

var err_fName= false;
var err_lName= false; 
var err_phoneNo= false; 
var err_officeNo= false; 
var err_email= false; 
var err_pass= false; 
var err_cpass= false; 





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
        $("#lName_errormsg").html("this is required");
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
        $("#phoneNo_errormsg").html("this is required");
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
        $("#officeNo_errormsg").html("this is required");
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

if (pass == "")
    {
        $("#password_errormsg").html("this is required");
        $("#password_errormsg").show();
        err_cpass=true;
    }

    else if (isNaN(pass))
    {
        $("#password_errormsg").html("password should be numeric");
        $("#password_errormsg").show();
        err_cpass=true; 
    }
    else 
    {
        $("#officeNo_errormsg").hide();
    }
    
});











function check_fName()
{
    var fName_length = $("#fName").val();

    if (fName_length == "")
    {
        $("#fName_errormsg").html("this is required");
        $("#fName_errormsg").show();
        err_fName=true;
    }
    else 
    {
        $("#fName_errormsg").hide();
    }
    
}

});

