let numbrerOne=prompt("ingrese el primer numero")
let numbrerTwo=prompt("ingrese el segundo numero")
let operacion=prompt("ingrese 1 para suma/2 para resta/3 para multiplicacion/ 4 para divicion / 5 para potenciacion ")
let resultado=prompt
switch (operacion) {
    case "1"  :
        
        resultado=parseInt(numbrerOne)+parseInt(numbrerTwo)
    console.log ("la sama de los numeros son "+resultado)

        
        break;
        case "2":
            resultado=parseInt(numbrerOne)-parseInt(numbrerTwo)
            console.log ("la resta  de los numeros son "+resultado)
    
        
        
        break;
        case "3":

        resultado=parseInt(numbrerOne)*parseInt(numbrerTwo)
    console.log ("la multiplicacion de los numeros son "+resultado)

        
        
        break;
        case "4":
            resultado=parseInt(numbrerOne)/parseInt(numbrerTwo)
            console.log ("la divicion de los numeros son "+resultado)
 
        
        break;
        case "5":
            resultado=parseInt(numbrerOne)**parseInt(numbrerTwo)
            console.log ("la potenciacin de los numeros son  "+resultado)
        
        break;
     
    default:
        break;
}