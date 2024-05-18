const secret = document.getElementById("secret");
const input = document.getElementById("input");
const button = document.getElementById("button");
const msg = document.getElementById("msg");

let secretNumber = Math.trunc(Math.random() * 20) + 1;


function verificar(){

    let inpute = Number(input.value);
    secret.innerText = inpute;
    if(inpute==secretNumber){

        msg.innerText="🎇 Você acertou!!! Parabéns 🎇";

      msg.classList.add('acertou');
      msg.classList.remove('errou');
    } 
    if(inpute<secretNumber){
       
        msg.innerText=" 📉 Chutou baixo";
        
        msg.classList.remove('acertou');
        msg.classList.add('errou');
        } 
    if(inpute>secretNumber){
        
        msg.innerText="📈 Chutou Alto";

        msg.classList.remove('acertou');
        msg.classList.add('errou');
         }
};
button.addEventListener("click",verificar)
