function podeSubir(altura , acompanhada){
    if ( altura>=1.4 && altura<2 ){
        console.log('Acesso Autorizado')


    } else if(altura <1.4 && acompanhada == true && altura >1.2){
        console.log('acesso Autorizado somente com Acompanhante')
    }else {
        console.log('Acesso Negado')

    }
        
}   

podeSubir(1.4, true )