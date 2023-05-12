/* CONSEGNA

- Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

- MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

- MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

- MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

*/

/* SVOLGIMENTO */
const outputContainer = document.getElementById("container");

// Creo un Array di stringhe (copiate e incollate da file esterno)
let teamArr = [
    "Wayne Barnett,Founder & CEO,wayne-barnett-founder-ceo.jpg",
    "Angela Caroll,Chief Editor,angela-caroll-chief-editor.jpg",
    "Walter Gordon,Office Manager,walter-gordon-office-manager.jpg",
    "Angela Lopez,Social Media Manager,angela-lopez-social-media-manager.jpg",
    "Scott Estrada,Developer,scott-estrada-developer.jpg",
    "Barbara Ramos,Graphic Designer,barbara-ramos-graphic-designer.jpg",
]

/* MILESTONE 0 */
let outDiv = document.createElement("div");

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

    /* MILESTONE 1 */
    console.log(teamArr[i]);

    /* MILESTONE 2 */
    let objectInfo = PrintObjectProperties(teamArr[i]);
    outDiv = document.createElement("div");
    outDiv.append(objectInfo);
    outputContainer.append(outDiv);
}
console.log(teamArr);


/* FUNCTIONS */

function PrintObjectProperties(objectName) {   
    for (let key in objectName) {                
        const div = document.createElement("div");
        div.append(objectName[key]);
        outDiv.append(div);
        console.log(objectName[key]);
    }
     
}