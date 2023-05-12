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

// Creo un Array di stringhe

let teamArr = [
    "Wayne Barnett,Founder & CEO,wayne-barnett-founder-ceo.jpg",
    "Angela Caroll,Chief Editor,angela-caroll-chief-editor.jpg",
    "Walter Gordon,Office Manager,walter-gordon-office-manager.jpg",
    "Angela Lopez,Social Media Manager,angela-lopez-social-media-manager.jpg",
    "Scott Estrada,Developer,scott-estrada-developer.jpg",
    "Barbara Ramos,Graphic Designer,barbara-ramos-graphic-designer.jpg",
]

// Devo "splittare" ogni stringa, passarla per un ciclo e creare le 3 proprietà correlate con il contenuto della stringa

//Esempio individuale da generalizzare
let WayneBarnettArr = teamArr[0].split(",")
let WayneBarnettObj = {};
for (let i = 0; i < WayneBarnettArr.length; i++) {
    WayneBarnettObj.nome = WayneBarnettArr[0];
    WayneBarnettObj.ruolo = WayneBarnettArr[1];
    WayneBarnettObj.foto = WayneBarnettArr[2];    
}

console.log(WayneBarnettObj);