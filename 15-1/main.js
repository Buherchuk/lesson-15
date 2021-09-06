document.querySelector(".signUp").onclick = function () {
    document.querySelector(".first-name").innerHTML = document.forms[0].userFirstName.value;
    document.querySelector(".second-name").innerHTML = document.forms[0].userSecondName.value;
    document.querySelector(".email").innerHTML = document.forms[0].userEmail.value;
    document.querySelector(".direction").innerHTML = document.forms[2].positions.value;
    document.querySelector(".signup-wrapper").classList.toggle("display-none");
    document.querySelector(".info-about-user-after-signup").classList.toggle("display-flex");
};
document.getElementById("agree").onchange = function (){
    if(document.getElementById("agree").checked && document.forms[0].elements.userEmail.value.includes("@") && document.forms[0].elements.userFirstName.value != 0 && document.forms[0].elements.userSecondName.value != 0){
        document.querySelector(".signUp").removeAttribute("disabled");
        document.querySelector(".signUp").style.backgroundColor = "rgb(67, 170, 115)";
    }else{
        document.querySelector(".signUp").setAttribute("disabled", "true");
        document.querySelector(".signUp").style.backgroundColor = "";
    }
}
document.forms[1].onchange = function (){
    document.querySelector(".user-img").classList.toggle("woman");
}

document.querySelector(".signOut").onclick = function (){
    document.querySelector(".signup-wrapper").classList.remove("display-none");
    document.querySelector(".info-about-user-after-signup").classList.remove("display-flex");
    for(i = 0; i < document.forms.length; i++){
        document.forms[i].reset();
    }
};

document.forms[0].elements.userEmail.onblur = function() {
    if (!document.forms[0].elements.userEmail.value.includes('@')) {
        document.forms[0].elements.userEmail.classList.add('invalid');
        error.innerHTML = "Please, write your email.";
    }else{
        document.forms[0].elements.userEmail.classList.remove('invalid');
        error.innerHTML = "";
    }
}


