

// const log = console.log;


/**
 * @description Cria quadrilátero oco - ordem: m x n
 * @param {number} linhas Numero de linhas 
 * @param {number} colunas Numero de colunas
 */
 function criarFrame(colunas,linhas){
  let numL,numC, seq;
  numL=linhas
  numC=colunas
  seq=''


try {
   
  //  validar as linhas e colunas
   if(colunas < 0 || linhas <0){
     throw new TypeError("linhas e colunas não podem ser negativos");
    }
    
    if(colunas ===0 || linhas===0){
      throw new TypeError("Deve definir ao menos uma linha e uma coluna");
   }


    for(let l=0;l<numL;l++){      //para linha
      for(let c=0;c<numC;c++){  //desenha 6 coluna

      // CANTOS
      //  superior esquerdo
      if(l==0 && c==0){seq+="+"}
      
      //superior direito
      else if(l==0 && c==numC-1){seq+="+"}
      // inferior dir
      else if( l===numL-1 && c==numC-1){seq+= "+";}
      // inferior esquerdo
      else if( l==numL-1 && c==0){seq+="+"}

      // somente colunas (segunda - penultima) da primeira linha
      else if((c>0 && c< numC-1 && l==0)){seq+="-"}

      // somente colunas (segund - penultima) da ultima linha
      else if((c>0 && c< numC-1 && l==numL-1)){seq+="-"}

      // somente primeira coluna   das linhas (segunda penultima)
      else if(c==0 && (l>0 && l< numL-1)){seq+="-"}

      // somente ultima coluna  das linhas (segunda e penultima)
      else if(c==numC-1 && (l>0 && l< numL-1)){seq+="-"}


      // parte de dentro
      else{seq+=" "}
    }

    //ao final de cada coluna pula pra proxima linha
      seq+='\n';
    }
    console.log(seq)
} catch (error) {
  console.warn(error.message)
}

}

export default criarFrame;

