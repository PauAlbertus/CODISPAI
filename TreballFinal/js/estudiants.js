// Treballarem sempre amb una variable global, obj, què és una taula on estan 
// guardats tots els accidents de l'any. Qualsevol altre variable que necessitem
// haurà de ser, necessàriament, una variable local.

// Com que al document html no hi ha controladors d'esdeveniments, els haurem de crear aquí:



// Teniu ja definides les funcions de cada exercici (menys del cinquè), només cal
// que ompliu el codi necessari.

function exercici01() {
    const totalAccidents = obj.length;
    document.getElementById("resultats").innerHTML = `<p>Nombre total d'accidents: ${totalAccidents}</p>`;
  
}

function exercici02() {
    const diesSetmana = {}; // Diccionari per comptar els accidents per dia de la setmana

    // Recorrem les dades dels accidents a obj
    obj.forEach(accident => {
        const dia = accident.diaSet; // Ara accedim a la propietat 'diaSet'
        if (!dia) {
            console.warn("Camp dia no definit:", accident);
        }

        if (dia in diesSetmana) {
            diesSetmana[dia]++; // Si el dia ja existeix al diccionari, incrementa el comptador
        } else {
            diesSetmana[dia] = 1; // Si no existeix, comença el comptador en 1
        }
    });

    // Troba el dia amb més accidents
    let diaAmbMesAccidents = null; // Variable per guardar el dia amb més accidents
    let maxAccidents = 0;

    for (const dia in diesSetmana) {
        if (diesSetmana[dia] > maxAccidents) {
            maxAccidents = diesSetmana[dia];
            diaAmbMesAccidents = dia;
        }
    }

    // Si el resultat encara és undefined, informa l'usuari i detura el codi
    if (!diaAmbMesAccidents) {
        console.error("No s'ha pogut identificar el dia amb més accidents.");
        return;
    }

    const resultatsDiv = document.getElementById("resultats");
    resultatsDiv.innerHTML = `<h3>Dia amb més accidents</h3>
        <p>${diaAmbMesAccidents}: (${maxAccidents} accidents)</p>`;
}








function exercici03() {
    const accidentsPerDistricte = obj.reduce((cont, accident) => {
        const districte = accident.districte || -1;
        cont[districte] = (cont[districte] || 0) + 1;
        return acc;
    }, {});

    const resultatsDiv = document.getElementById("resultats");
    resultatsDiv.innerHTML = "<h3>Accidents per districte</h3>";

    const llista = Object.entries(accidentsPerDistricte).map(([districte, numAccidents]) => {
        const element = document.createElement("li");
        element.textContent = `Districte ${districte}: ${numAccidents} accidents`;
        return element;
    });

    const ul = document.createElement("ul");
    llista.forEach(element => ul.appendChild(element));
    resultatsDiv.appendChild(ul);
}





function exercici04() {
    // Crida a la funció que crea el formulari amb el SELECT
    creaFormulari();

    const select= document.getElementById("districte");

    function calculaAccidents() {
        let totalAccidents = 0;
        const triadistricte= select.value;

        for (let i=0; i <obj.length; i++) {
            if(obj[i].districte==triadistricte){
                totalAccidents++;
            }
        }
        let resultatsDiv=document.getElementById("resultats");
        resultatsDiv.innerHTML= `Hi ha ${totalAccidents} accidents en ${triadistricte} aquest any.`;;
    }
    select.addEventListener("change", calculaAccidents)
}



document.getElementById("exer01").addEventListener("click", exercici01);
document.getElementById("exer02").addEventListener("click", exercici02);
document.getElementById("exer03").addEventListener("click", exercici03);
document.getElementById("exer04").addEventListener("click", exercici04);