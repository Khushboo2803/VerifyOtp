function sendOTP()
{
    var ph_no=document.getElementById("ph_no").value;
    if(!(ph_no>6000000000 && ph_no<9999999999))
    {
        alert("Wrong format of phone number");

    }
    else{
       document.getElementById("myform").action="getOtp.html";
    }

}
function verifyOTP()
{
    var otp=document.getElementById("otp").value;
    if(otp==2803)
    {
        alert("OTP validated");
    }
    else{
        alert("OTP validation failed");
    }
}