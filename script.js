var form = document.getElementById("form");
var username = document.getElementById("UserName");
var email = document.getElementById("email");
var password = document.getElementById("Password");
var Password2 = document.getElementById("Password2");
var btn = document.getElementById("btn");
var header=document.getElementById("header");
var img =document.getElementById("image");
var container=document.getElementById("login-container")
var box=document.getElementById("box")

form.addEventListener("submit", function(e){
    e.preventDefault();
    checked()
});

function checked(){

    var usernameval = username.value.trim();
    var emailval = email.value.trim();
    var passwordval = password.value.trim();
    var Password2val = Password2.value.trim();

    if(usernameval === ""){
        setError(username,"Please cannot be blank");
    }else{
        setSuccess(username);
    }

    if(emailval === ""){
        setError(email,"Please cannot be blank");
    }
    else if(!checkemail(emailval)){
        setError(email,"Not a valid email");
    }
    else{
        setSuccess(email);
    }

    if(passwordval === ""){
        setError(password,"Please cannot be blank");
    }else{
        setSuccess(password);
    }

    if(Password2val === ""){
        setError(Password2,"Please cannot be blank");
    }
    else if(passwordval !== Password2val){
        setError(Password2,"Password does not match");
    }
    else{
        setSuccess(Password2);
    }
}

function setError(input,message){
    let formcontrol = input.parentElement;
    let small = formcontrol.querySelector("small");
    formcontrol.className = "input-group error";
    small.innerText = message;
}
function setSuccess(input){
    let formcontrol = input.parentElement;
    formcontrol.className = "input-group success";
}
function checkemail(emailval){
    return /^\S+@\S+\.\S+$/.test(emailval);
}
container.addEventListener("mousemove",(e)=>{

    let hori = (window.innerWidth/2 - e.pageX)/20;
    let ver = (window.innerHeight/2 - e.pageY)/20;

    box.style.transform = `rotateX(${ver}deg) rotateY(${hori}deg)`;
     container.style.transform = `rotateX(${ver}deg) rotateY(${hori}deg)`;

});
container.addEventListener("mouseenter",()=>{
    box.style.transition=".1s";
    header.style.transform="translateZ(150px)";
    img.style.transform="translateZ(140px)";
    form.style.transform="translateZ(130px)";
    btn.style.transform="translateZ(120px)";

})
container.addEventListener("mouseleave", (e)=>{
    box.style.transition=".1s";
    box.style.transform="rotateY(0deg) rotateX(0deg) "
     header.style.transform="translateZ(0px)";
     img.style.transform="translateZ(0px)";
      form.style.transform="translateZ(0px)";
       btn.style.transform="translateZ(0px)";

})