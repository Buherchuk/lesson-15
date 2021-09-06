document.forms[0].elements.moveText.onclick = function (){
    if(document.forms[0].elements.from.value != ""){
        document.forms[0].elements.to.value = document.forms[0].elements.from.value; 
        document.forms[0].elements.from.value = "";
    }
}
document.forms[1].elements.place.onblur = function (){
    if(document.forms[1].elements.place.value != ""){
        let place = document.forms[1].elements.place.value;
        document.forms[1].elements.place.setAttribute("placeholder", place);
        document.forms[1].elements.place.value = "";
    }
}