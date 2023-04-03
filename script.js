const readline = require('readline-sync');

let imc 
let peso = readline.question('Qual seu peso (kg) \n');
let altura = readline.question('Qual sua altura \n ');
 
imc = peso / (altura * altura)

console.log("seu imc e: "+imc+" \n")
if(imc >0 && imc <17)
{
    console.log("Muito abaixo do peso ")
}
else if (imc >=17 && imc <18.5)
{
    console.log("Abaixo do peso ")
}
else if(imc >=18.5 && imc <25)
{
    console.log("Peso normal")
}
else if(imc >=25 && imc >30)
{
    console.log("Acima do peso")
}
else if(imc >=30 && imc >35)
{
    console.log("Obesidade nivel 1")
}
else if (imc >=35 && imc >40)
{
    console.log("Obesidade nivel 2")
}
else {
    console.log("Obesidade morbida")
}