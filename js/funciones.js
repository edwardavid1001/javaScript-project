// funcion por declaracion

//funcion por declaracion 

let opcion=prompt("ingrersa 1para suam / 2 para resta / 3 para multi / 4 para div")

let numberone=parseInt(prompt("INGRESE EL PRIMER5 NUMERO"))
let numbertwo=parseInt(prompt("ingrese le segundo numero"))



switch(opcion){

case "1":

function sumar(numbertwo,numberone) {
    //cuerpo de la funcion 
   /* let numberone=parseInt(prompt("INGRESE EL PRIMER5 NUMERO"))
     let numbertwo=parseInt(prompt("ingrese le segundo numero"))*/
     let suma = numberone+numbertwo
     console.log(`la suma de los numero ${numberone}y ${numbertwo} es ${suma}`)
    
}

sumar(numbertwo,numberone)
break
case "2":

//invocar a la funcion

let res=function restar(){
    /* let numberone=parseInt(prompt("INGRESE EL PRIMER5 NUMERO"))
     let numbertwo=parseInt(prompt("ingrese le segundo numero"))*/
    let suma = numberone-numbertwo
   // console.log(`la resta de los numero ${numberone}y ${numbertwo} es ${suma}`)
    return result
}
result=res(numberone,numbertwo)
console.log(`la resta de los numero ${numberone}y ${numbertwo} es ${suma}`)


res(numbertwo,numberone)



break
//funcion anonima 
case "3":

let mul = function(numbertwo,numberone){
   /* let numberone=parseInt(prompt("INGRESE EL PRIMER5 NUMERO"))
     let numbertwo=parseInt(prompt("ingrese le segundo numero"))*/
    let suma = numberone*numbertwo
    console.log(`la multiplicacion de los numero ${numberone}y ${numbertwo} es ${suma}`)
}

mul(numbertwo,numberone)

// funcion arrow 
case "4":

let div=(numbertwo,numberone)=>{
 /* let numberone=parseInt(prompt("INGRESE EL PRIMER5 NUMERO"))
     let numbertwo=parseInt(prompt("ingrese le segundo numero"))*/
    let suma = numberone/numbertwo
    console.log(`la divicion de los numero ${numberone}y ${numbertwo} es ${suma}`)
}

div(numbertwo,numberone)
}