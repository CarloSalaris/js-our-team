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
// let BarnettArr = teamArr[0].split(",")
// let BarnettObj = {};
// for (let i = 0; i < BarnettArr.length; i++) {
//     BarnettObj.nome = BarnettArr[0];
//     BarnettObj.ruolo = BarnettArr[1];
//     BarnettObj.foto = BarnettArr[2];   
// }

// teamArr[0] = BarnettObj;

// console.log(BarnettObj);
// console.log(teamArr);

// Ciclo per far passare il processo a tutti gli elementi del teamArr

for (let i = 0; i < teamArr.length; i++) {
    let temp = teamArr[i].split(",");
    teamArr[i] = {};
    teamArr[i].nome = temp[0];
    teamArr[i].ruolo = temp[1];
    teamArr[i].foto = temp[2];   

    console.log(teamArr[i]);
}
console.log(teamArr);