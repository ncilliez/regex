let monElementnom = document.getElementById('name');
let monElementPrenom = document.getElementById('prenom');
let monElementMail = document.getElementById('mail');
let bouton =document.getElementById('btnvalider');
let cgu = document.getElementById('cgu');



bouton.addEventListener('click', function(){

    if (monElementnom.value == "")                                  
    { 
        alert("Mettez votre nom."); 
    } 
    if (monElementPrenom.value == "")                                  
    { 
        alert("Mettez votre prenom."); 
    } 
    if(cgu.checked == false){
            alert('Cochez le CGU')
    }

  })

 

