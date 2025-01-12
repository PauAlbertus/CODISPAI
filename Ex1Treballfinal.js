document.getElementById("enviar").addEventListener("click", enviarformulari);
document.getElementById("esborrar").addEventListener("click", esborrar);

// nom
function nomMajuscules() {
    const nom = document.getElementById("nom");
    const paraules = nom.value.split(" "); // Separem cada paraula
    for (let i = 0; i < paraules.length; i++) {
      if (paraules[i].length > 0) {
        // Posem la primera lletra en majúscula i la resta en minúscula
        paraules[i] =
          paraules[i][0].toUpperCase() + paraules[i].slice(1).toLowerCase();
      }
    }
    nom.value = paraules.join(" "); // Reassignem el valor al camp
}


function enviarformulari(){
    let errors=false;

    nomMajuscules();//s'ha de posar per a que agafi la funció quan li dones a enviar

    // edats
    const edat = document.getElementById("edats");
    const errorEdat = document.getElementById("error-edats");
    
    if (!edat.value) {
        errorEdat.textContent = "Selecciona un rang d'edats de la llista";
        errorEdat.style.color = "red";//millora per a que es vegi millor l'error
        errors = true;
    } else {
        errorEdat.textContent = "";
    }
      
    // codi postal
    const codi = document.getElementById("codipostal");
    const errorCodi = document.getElementById("error-codipostal");

    if (codi.value.length !== 5) {
        errorCodi.textContent = "Escriviu un codi postal existent";
        errorCodi.style.color = "red";
        errors = true;
    } else {
        errorCodi.textContent = "";
    }

    // correu
    const email = document.getElementById("correu");
    const errorCorreu = document.getElementById("error-correu");
    const emailesc = email.value; // Obté el valor del correu electrònic de l'usuari

      if (
        emailesc.split('@').length !== 2 || // Comprova que només hi ha una @ separant l'email en parts segons el símbol @ (si hi ha 1@ llavors el text té 2 parts és aixo com ho comprova)
        !emailesc.includes('.') || // Comprova que hi ha almenys un punt
        emailesc.indexOf('@') > emailesc.lastIndexOf('.') // Comprova que l'@ ve abans del punt
    ) { //indexof comença des del principi de la cadena i lastindexof des del final
        errorCorreu.textContent = "Aquest correu no és vàlid.";
        errorCorreu.style.color = "red";    
        errors = true;
    } else {
        errorCorreu.textContent = "";
    }

    // contra
    const contrasenya = document.getElementById("contrasenya");
    const errorContra = document.getElementById("error-contra");
    const mostrarContra = document.getElementById("mostrar-contra");
    const rescontrasenya = contrasenya.value; //obtenir el valor que escriu l'usuari a la contrasenya
    const llargada = 8;
    const LowerCase = /[a-z]/.test(rescontrasenya);
    const UpperCase = /[A-Z]/.test(rescontrasenya);
    const nombres = (rescontrasenya.match(/\d/g) || []).length >= 2;
    const especials = /[!@#$%^&*()_+]/.test(rescontrasenya);
    
    if (rescontrasenya.length >= llargada && LowerCase && UpperCase && nombres && especials) {
        errorContra.textContent = "";
        
    } else {
        errorContra.textContent= "Contrasenya invàlida";
        errorContra.style.color = "red";
        errors = true;
    }
    
    
    

    
    // confirmar contra
    const confirmar=document.getElementById("confirmarContrasenya");
    const errorcontra=document.getElementById("error-contraConfirm");
    if (confirmar.value !==contrasenya.value){
        errorcontra.textContent = "Les contrasenyes són diferents, escriu-la correctament";
        errorcontra.style.color = "red";
        errors = true;
    } else {
        errorcontra.textContent = "";
    }
    
    // checkbox
    const privacitat = document.getElementById("checkbox");
    const errorbox = document.getElementById("error-checkbox");

    if (!privacitat.checked) {
        errorbox.textContent = "Accepteu la política de privacitat.";
        errorbox.style.color = "red";
        errors = true;
    } else {
        errorbox.textContent = "";
    }

    //enviar el formulari
    
    const nom = document.getElementById("nom").value;
    const correu = document.getElementById("correu").value;
    // const nom = document.getElementById("nom").value;
    // const correu = document.getElementById("correu").value;

    if (!errors) {
        document.getElementById("formulari").submit();
        alert(`S'ha omplert el formulari correctament! Gràcies ${nom} \n${edat.value} \n${codi.value} \n${correu}`);
    } else {
        document.getElementById("resultat").textContent = "";
    }
   
}
//botó per mostrar contra (NO FUNCIONA NO SABEM)
mostrarContra.addEventListener("change", function() {
    if (mostrarContra.checked) {
        contrasenya.type = "text"; 
    } else {
        contrasenya.type = "password"; 
    }
});

function esborrar() {
    document.getElementById("formulari").reset();
    const errors = document.querySelectorAll(".error");
    errors.forEach(error => error.textContent = "");
}
  