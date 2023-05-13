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
let objDiv, propDiv;

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
    // incluso nella funzione PrintObjectProperties

/* MILESTONE 2 - Stampo nel DOM */
    // Creo outDiv per ogni oggetto (contenitore delle proprietà)
    objDiv = document.createElement("div");
    // assegno una classe per gestirlo in CSS
    objDiv.classList.add("objDiv");    
    // Richiamo funzione di stampa proprietà per dato oggetto
    PrintObjectProperties(teamArr[i]);     
    outputContainer.append(objDiv)   
}
console.log(teamArr);

/* FUNCTIONS */
// Stampa proprietà di un oggetto prestabilito
function PrintObjectProperties(objectName) {   
    for (let key in objectName) {
        propDiv = document.createElement("div");
        // BONUS 1: Trasformare la stringa foto in una immagine effettiva
        if (objectName[key].includes(".jpg")) {
            propDiv.innerHTML = `<img src="img/${objectName[key]}" alt="profile image">`;
        }else {
            propDiv.append(objectName[key]);
        } 
        objDiv.append(propDiv);
        /* MILESTONE 1 - Stampo le proprietà in console */
        console.log(objectName[key]);
    }     
}