const btnmenufixo = document.querySelectorAll('[data-botaofixo]')
const btnmenu = document.querySelectorAll('[data-botaomenu]')


function positionElemento(botao){
    window.scrollTo(0, 0);
    let positionYprocedimento = document.querySelector('[data-procedimentos]').getBoundingClientRect().y
    let positionYclinica = document.querySelector('[data-clinica]').getBoundingClientRect().y
    let positionYequipe = document.querySelector('[data-equipe]').getBoundingClientRect().y


    if(botao ==="procedimentos")
    {
        
    
        window.scrollTo(0, positionYprocedimento);
    }
    if(botao ==="local")
    {
    
     
        window.scrollTo(0, positionYclinica);
    }
    if(botao ==="equipe")
    {
        
 
        window.scrollTo(0, positionYequipe);
    }

}

btnmenufixo.forEach((btn)=>{
  
btn.addEventListener('click',()=> positionElemento(btn.dataset.botaofixo))
} )

btnmenu.forEach((btn)=>{
  
    btn.addEventListener('click',()=> positionElemento(btn.dataset.botaomenu))
    } )