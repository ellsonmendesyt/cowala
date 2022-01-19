function faxina(obj){
    try {
        if(obj && obj.constructor !== Object){
            throw new TypeError(`O parametro "obj" deve ser um objeto mas você forneceu um ${typeof obj}`)
        }
         return Object.fromEntries(Object.entries(obj)
         .filter(([chave, valor]) => valor != null)
         );
    } catch (error) {
        console.warn(error.message)
    }
}


export default faxina;
