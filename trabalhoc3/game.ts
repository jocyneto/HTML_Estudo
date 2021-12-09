
    function play () {
    const lista_cores : Array<string> = ["blue", "gray", "yellow", "green","black", "cyan", "purple", "silver", "orange", "lime", "magenta", "olive", "maroon", "brown", "darkblue", "lightblue"];
    
    var pega_cor = []
    var cor_selecionada = null
    var verifica = null 
    var life = 5 
    

    for (let i = 0; i < 10 ; i++) {
        pega_cor.push(lista_cores[Math.floor(Math.random() * lista_cores.length) +1].toLowerCase())
        pega_cor.sort()
        cor_selecionada = pega_cor[Math.floor((Math.random() * pega_cor.length) + 1)]
    }

    do{
        verifica = prompt ("informe uma das cores abaixo: \n" + pega_cor.join(', ') + `Você tem ${life} vidas restantes`)?.toUpperCase()

         if (verifica == cor_selecionada) { 
            verificar(cor_selecionada,verifica,life)
            alert('Errou, tente outra')
            life--
    }
        
        else if (verifica == cor_selecionada){
            document.body.style.backgroundColor = verifica
            alert('Acertou')
            life = 0
        }
  
         
       
}while (life != 0);

    function verificar(corSorteada: string | null,verifica: string | undefined , life: number) { 
        
        if (verifica == ""){
            alert('Sem nada')
       
}

        }
}