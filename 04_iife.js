// Immediately Invoked Function Expression(IIFE)
// To remove Global variable problem we use IIFE
// ()()
(function chai (){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

((name)=>{
    //Unnamed IIFE
    console.log(`DB CONNECT TWO ${name}`)
})("Tahseen")