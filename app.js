let bouton = document.getElementById('btn')
var msgerreur ='';
let nom = document.getElementById('nom')
let idnom = document.getElementById('idnom')
let prenom = document.getElementById('prenom')
let idprenom = document.getElementById('idprenom')
let email = document.getElementById('email')
let idemail = document.getElementById('idemail')
let password = document.getElementById('password')
let idpassword = document.getElementById('idpassword')

nom.addEventListener('blur', function(){
    idnom.classList.remove('rouge')
})
prenom.addEventListener('blur', function(){
    idprenom.classList.remove('rouge')
})
email.addEventListener('blur', function(){
    idemail.classList.remove('rouge')
})
password.addEventListener('blur', function(){
    idpassword.classList.remove('rouge')
})


bouton.addEventListener('click', function(e){
    if(nom.value ==""){
        e.preventDefault();
        msgerreur = msgerreur +"<div>nom</div>"
        idnom.classList.add('rouge')
    }  
    if(prenom.value ==""){
        e.preventDefault();
        msgerreur = msgerreur +"<div>prenom</div>"
        idprenom.classList.add('rouge')
    }
    if(email.value ==""){
        e.preventDefault();
        msgerreur = msgerreur +"<div>email</div>"
        idemail.classList.add('rouge')
    }  
    if(password.value ==""){
        e.preventDefault();
        msgerreur = msgerreur +"<div>password</div>"
        idpassword.classList.add('rouge')
    }   

    output.innerHTML= msgerreur;
    msgerreur='';
})
