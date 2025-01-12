//Ifelse
let data= new Date(); //et diu hora actual i compara amb aquesta hora
let hora= data.getHours();
let text;

console.log(data);

if (hora < 6 && hora > 21) {
    text= "Bona nit!"
    console.log(text);
} else {
    text= "Encara és de dia!"
    console.log(text);
}



//SWITCH
let semafor= "verd";
switch (semafor) {
    case "verd":
        text= "passa!"
        break;
    case "taronja":
        text= "precaució!"
        break;
    case "vermell":
        text= "aturat!"
        break;
    default:
        text= "Semafor apagat"
}

//BUCLES

