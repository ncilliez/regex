let monElement = document.getElementById('name');
let bouton =document.getElementById('btnvalider')
let nom = document.getElementById('nom')

bouton.addEventListener('click', function(){

  if(monElement.value.length == 0)
  { 

    alert('votre nom')
    // nom.classList.toggle('starred')
  }
  if(monElement.value.length == 0)
  { 

    alert('votre prenom')
    // nom.classList.toggle('starred')
  }

})

// console.log(monElement.value.length)

