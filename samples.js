
function display(){
var names=document.getElementById("names");
var phones=document.getElementById("phones");
var emails=document.getElementById("emails");
var messages=document.getElementById("messages");

if(names.value==""){
    alert("must add name");
    document.form1.names.focus();
    return false;
}
if(emails.value==""){
    alert("must add a email address");
    document.form1.emails.focus();
    return false;
}
if(phones.value==""){
    alert("must add a phone number");
    document.form1.phones.focus();
    return false;
}
if(messages.value==""){
    alert("text some messages or feedbacks");
    document.form1.messages.focus();
    return false;
}
    return true;
}


