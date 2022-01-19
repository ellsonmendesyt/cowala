function classificar(collection){
    
    let grupo ={
        voce:[],
        responsaveis:[],
        naoResponsaveis:[]
    }
    
    function ordenarPor(lista,comparador){

        return lista.sort(function(a,b){
         // 1 se o primeiro for maior
          if(a[comparador] > b[comparador])return 1;
         //  -1 se o segundo for maior
          if(a[comparador] < b[comparador]) return -1;
         //  0 se forem iguais
          return 0;
         });
        
    }
    
    try{
        // var args = Array.prototype.slice.call(arguments); 
        
        // Grante que o usuario forneceu um vetor mas esse vetor não é uma string
        if((!collection.length) || (typeof collection ==="string")){
             throw new TypeError (`Erro ao chamar "classificar": \n Você deve fornerce um vetor com pelo menos um elemento no formato \n {nome:string, responsavel:boolean, souEu:boolean} \n `);
            }
        
       collection.forEach(item=>{
        //    certifica-se que cada item da coleção seja um objeto 
           if(item.constructor !== Object){
            throw new TypeError("Cada item da colecão deve ser um objeto");
            console.log(`Error ${item}`)
           }

            //nao pode ser você e responsavel ao memso tempo
           if(item.souEu && item.responsavel){
               throw new TypeError("Algum item da coleção está habilitado 'responsavel' e 'você' ao mesmo tempo \n desabilite um deles!")
           }
        
           if(item.souEu)grupo.voce.push(item)
           else if(item.responsavel) grupo.responsaveis.push(item)
           else grupo.naoResponsaveis.push(item);
       })

   }catch(e){
     console.warn(e.message)
   }
    //  agrupar os itens de acordo com as propriedade "souEu" e "responsavel"
    //   ordena cada grupo de pessoas mas retorna somente seus nomes

  
   return{
       voce:ordenarPor(grupo.voce,"nome").map(pessoa => pessoa.nome),
       responsaveis: ordenarPor(grupo.responsaveis,"nome").map(pessoa=> pessoa.nome),
       naoResponsaveis: ordenarPor(grupo.naoResponsaveis,"nome").map(pessoa=> pessoa.nome),
   }
}

export default classificar;