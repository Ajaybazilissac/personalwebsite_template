
$(function(){
    var $registrationform=$("#rejistration");
    if($registrationform.length){
        $registrationform.validate({
            rules:{
                FullName:{
                    required:true
                },
                Email:{
                    required:true,
                    email:true
                },
                Subject:{
                    required:true
                },
                Message:{
                    required:true
                }
            },
            messages:{
                FullName:{
                    required:"Name is mandatory."
                },
                Email:{
                    required:"Email is mandatory.",
                    email:'Please enter valid email.'
                },
                Subject:{
                    required:"Subject is mandatory."
                },
                Message:{
                    required:"Please add message in short."
                }
            }
        })
    }
})

$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
      html: true,
      placement: "right",
      trigger: "click",
    });
    $("#buttonprimary").click(function () {
      var fullName = $("#FullName").val();
      var email = $("#Email").val();
      var phone = $("#Subject").val();
      var message = $("#Message").val();
      // console.log("FullName : " + fullName);
      // console.log("Email : " + email);
      // console.log("Mobile No : " + phone);
      // console.log("Message : " + message);
      if (validator()) {
        
        console.log("Form Submitted");
        $("#rejistration").submit();
        alert("Thank you for Submission");
        //var formData = $(this).serializeArray();
        //console.log(formData);
      } else {
        alert("Error While submitting");
      //   console.log("error while submitting");
      }
    });
  
    function validator() {
      var fullName = $("#FullName").val();
      var email = $("#Email").val();
      var subject = $("#Subject").val();
      var message = $("#Message").val();
      var emailValidator = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      //console.log("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;");
      //console.log("FullName : "+fullName);
      // console.log("Email : "+email);
     if (!emailValidator.test(email)) {
        alert("Invalid Email ID...!!!!!");
        return false;
      }else if (subject== "") {
        alert("Please enter subject...!!!!! ");
      } else if (message === "") {
        alert("Enter Something");
        return false;
      } else {
        return true;
      }
    }
    
  });
