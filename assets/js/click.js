function clicked()
{
    var fullname = $("#name").val()
    var emailval = $("#email").val()
    var mobileNo = $("#Mobile").val()
    let a=0;

    var regexname = /^[a-zA-Z ]{2,30}$/;
    var regexemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    var regexmobile= /^(\+\d{1,3}[- ]?)?\d{10}$/
    
    name()
    email()
    mobile()




    function name(){

    if(fullname==""){
        $("#error1").show()
        $("#error1").text("This field is required")
    }
    // else if(fullname.length<4 || fullname.length>14){
    //     $("#error1").show()
    //     $("#error1").text("Required minimum 5 characters")
    // }

    else if(!regexname.test(fullname)){
        $("#error1").show()
        $("#error1").text("Please Enter a valid Name")

    }
    else{
        $("#error1").hide()
        a+=1

    }
}

function email(){
    if(emailval==""){
        $("#error2").show()
        $("#error2").text("This field is required")
    }

    else if(!regexemail.test(emailval)){
        $("#error2").show()
        $("#error2").text("Please Enter a valid email")

    }
    else{
        $("#error2").hide()
        a+=1

    }
}



function mobile(){
    if(mobileNo==""){
        $("#error3").show()
        $("#error3").text("This field is required")
    }

    else if(!regexmobile.test(mobileNo)){
        $("#error3").show()
        $("#error3").text("Please Enter a valid mobile number")

    }
    else{
        $("#error3").hide()
        a+=1

    }
}
if(a==3){
    return true
}
else
{
    return false
}
  
}

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwqHKWI4vO4EayBEsxu2H7mgarKHA_IT5QVDC4lTg/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

//https://script.google.com/macros/s/AKfycbwqHKWI4vO4EayBEsxu2H7mgarKHA_IT5QVDC4lTg/exec





