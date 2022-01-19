
function fibonacci (n) {
    // garante que recebeu o tipo certo de argumento
    let tipo = typeof Array.prototype.slice.call(arguments)[0]
    
    
    try{
        if(typeof n !== 'number') throw new TypeError(`A função 'fibonacci' espera receber um "numero" como argumento \n mas voce passou "${tipo}"`)
        // quando atingir 1 retorna [0,1]
        if (n===1) return [0, 1];
        
        else 
        {
          let lista = fibonacci(n-1);     
          // guarda na lista a soma do ultimo com o penultimo
          lista.push(lista[lista.length-1] + lista[lista.length-2]);
          
          return lista;
        }
        
    }catch(e){
    console.warn(e.message)
    }
};

export default fibonacci;
















/*
var i;
var fib = []; // Initialize array!
var list=[]
fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 6; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  list.push(fib[i])
}


*/