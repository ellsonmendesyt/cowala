function expirou(data, tempo){
    let arg2,       //guardar o segundo argumento recebido na funcao
    u,              //unidade  - checar se é 'd'
    q,              //limite maximo 
    dataAnterior,   //data anterior, primeiro argumento recebido na função apos convertido para ISO
    atual,          //data atual - usado pra testar se com o intervalo
    delta;          // quantos dias ja passaram desde a data inicial
   

    //referencia do segundo argumento
    arg2 = Array.prototype.slice.call(arguments)[1]

    // exclui o que nao for numero
    q=parseInt(arg2.replace(/[^0-9]/g,""))


    // exclui o que nao for letra
    u=arg2.replace(/[^a-z]/g,"")
   



    // cria um data a partir da string recebido, mas antes converte pro formato certo
    dataAnterior= Date.parse(new Date(emDataIso(data)));
   
    // atual em iso Date
    atual= Date.parse(new Date().toISOString());
    // calcula a quantidade de dias
    delta = Math.abs( atual - dataAnterior)
    
    

    //se a data nao tiver no formato certo, converte se ja tiver simplemente retorna
    function emDataIso(str) {
        if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)){
            var d = new Date(str); 
            return d.toISOString();
        }
        return str;
    }
  
    //  retorna verdadeiro se a data estiver expirado
    return  (parseInt(delta/(1000 * 60 * 60 * 24))) >=q;
}


// log(estaValida("2022-01-01T08:40:09.501Z", "50d"))
// log(estaValida("2022-01-01", "3d"))


export default expirou;


