/********************
 *      BONUS       *       
*********************/

/* CONSEGNA *

- Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

- MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

- MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

- MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

/* BONUS
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede
*/

/* SVOLGIMENTO */
const outputContainer = document.getElementById("container");
// let objDiv, propDiv;

// Creo un Array di stringhe (copiate e incollate da file esterno)
let teamArr = [
    "Wayne Barnett,Founder & CEO,wayne-barnett-founder-ceo.jpg",
    "Angela Caroll,Chief Editor,angela-caroll-chief-editor.jpg",
    "Walter Gordon,Office Manager,walter-gordon-office-manager.jpg",
    "Angela Lopez,Social Media Manager,angela-lopez-social-media-manager.jpg",
    "Scott Estrada,Developer,scott-estrada-developer.jpg",
    "Barbara Ramos,Graphic Designer,barbara-ramos-graphic-designer.jpg",
]

/* MILESTONE 0 - Trasformo le stringhe in oggetti */
// Ciclo per far passare il processo a tutti gli elementi del teamArr
for (let i = 0; i < teamArr.length; i++) {
    // "splitto" ogni stringa (array)
    let temp = teamArr[i].split(",");
    // converto ogni elemento dell'array principale in un oggetto
    teamArr[i] = {};
    // Aggiungo all'oggetto le proprietà e il valore rispettivo contenuto nella stringa (che è convertita in un array di stringhe = valori)
    teamArr[i].nome = temp[0];
    teamArr[i].ruolo = temp[1];
    teamArr[i].foto = temp[2];   

    console.log(teamArr[i]);

    /* MILESTONE 1 - Stampo le proprietà in console */
    for (const key in teamArr[i]) {
        console.log(teamArr[i][key])
    }
}

/* BONUS 2: Organizzare i singoli membri in card/schede */
for (let i = 0; i < teamArr.length; i++) {
    const objectiesimo = teamArr[i];

    const userName = objectiesimo.nome;
    const userRole = objectiesimo.ruolo;
    const userImage = objectiesimo.foto;

    const cardElement = `<div class="card">
                            <img src="img/${userImage}" alt="picture">
                            <div class="cardElementDescription cardName">${userName}</div>
                            <div class="cardElementDescription">${userRole}</div>
                        </div>`
    outputContainer.innerHTML += cardElement;
}


// VECCHIO SVOLGIMENTO
/* MILESTONE 1 - Stampo le proprietà in console */
    // incluso nella funzione PrintObjectProperties

/* MILESTONE 2 - Stampo nel DOM */
    // Creo outDiv per ogni oggetto (contenitore delle proprietà)
 /*    objDiv = document.createElement("div");
    // assegno una classe per gestirlo in CSS
    objDiv.classList.add("objDiv");    
    // Richiamo funzione di stampa proprietà per dato oggetto
    PrintObjectProperties(teamArr[i], "foto", "nome", "ruolo");     
    outputContainer.append(objDiv)   
}
console.log(teamArr);
 */
/* FUNCTIONS */
// Stampa proprietà di un oggetto prestabilito
/* function PrintObjectProperties(objectName, key1, key2, key3) {   
    let name, role, picture;
    for (let key in objectName) {
        propDiv = document.createElement("div");
        // BONUS 1: Trasformare la stringa foto in una immagine effettiva
        if (key == key1) {
            picture = `<img src="img/${objectName[key]}" alt="profile image">`;
        }else if (key == key2) {
            name = `<div class="cardName">${objectName[key]}</div>`
        }else if (key == key3) {
            role = `<div class="cardRole">${objectName[key]}</div>`
        } 
         */
        /* MILESTONE 1 - Stampo le proprietà in console */
 /*        console.log(objectName[key]);
        objDiv.append(propDiv);
    }     
    propDiv.innerHTML += picture;
    propDiv.innerHTML += name;
    propDiv.innerHTML += role;   
}
 */