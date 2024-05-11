// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur => cf "config.js"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                      //
//        ETAPES OU ON JOUAIT AU JEU VIA LA CONSOLE     //
//        *****************************************     //
//////////////////////////////////////////////////////////

// fonction qui demande à l’utilisateur s’il veut jouer avec des phrases ou des mots
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
// function choisirPhrasesOuMots() {
//     // Déclaration de la variable contenant le choix de l'utilisateur
//     let choix = prompt(
//         'Si vous voulez jouer avec des listes de mots ou de phrases écrivez le mot correspondant soit : "mots" ou "phrases"'
//     )
//     // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
//     while (choix !== "mots" && choix !== "phrases") {
//         choix = prompt(
//             "Vous devez choisir entre une liste de mots ou de phrases, écrivez 'mots' ou 'phrases'"
//         )
//     }
//     return choix
// }

// fonction qui contient la boucle principale de jeu
//""""""""""""""""""""""""""""""""""""""""""""""""""
// function lancerBoucleDeJeu(nomDuTableau) {
//     let score = 0
//     for (let i = 0; i < nomDuTableau.length; i++) {   // On parcourt le tableau
//         let reponseUtilisateur = prompt("Entrez la phrase : " + nomDuTableau[i]);  // On demande à l'utilisateur de saisir ce qui est demandé à l'indice i
//         if (reponseUtilisateur === nomDuTableau[i]) {
//             score++  // Si la saisie est correct, on incrémente le score
//         }
//     }
//     return score
// }

// fonction qui permet d'obtenir le message donnant le résultat en fonction du nombre de questions
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
// function afficherResultat(score, nombreQuestions) {
//     // // console.log("Votre score est de " + score + " sur " + nombreQuestions)
//     // // le code au-dessus est mis en commentaire et remplacé par le code du dessous qui permet de changer la destination de l'affichage :
//     // // consol.log  => spanScore
//     let spanScore = document.querySelector(".zoneScore span")
//     spanScore.textContent = score + " / " + nombreQuestions

//********************************************************************************************************************************
//               ou autre methode avec innerText:
//               """"""""""""""""""""""""""""""""
//  let spanScore = document.querySelector(".zoneScore span")  // Récupération de la zone dans laquelle on va écrire le score
//  let affichageScore = `${score} / ${nombreQuestions}` // Ecriture du texte
//  spanScore.innerText = affichageScore  // On place le texte à l'intérieur du span.
//*********************************************************************************************************************************
// } 

// fonction principale qui permet de lancer les autre fonctions
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
// function lancerJeu() {
//    // let choix = mots //choisirPhrasesOuMots() // Déclaration de la variable choixUtilisateur
//     let score = 0 // Déclaration de la variable score
//     let nombreQuestions = 0

//     //structure conditionnelle
//     if (choix === "mots") {
//         score = lancerBoucleDeJeu(listeMots)
//         nombreQuestions = listeMots.length // Déclaration de la variable nombreQuestions

//      } else {
//          score = lancerBoucleDeJeu(listePhrases)
//          nombreQuestions = listePhrases.length // Déclaration de la variable nombreQuestions
//     }
//     afficherResultat(score, nombreQuestions)
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                        //
//      ETAPE OU ON VA POUVOIR JOUER AU JEU DIRECTEMENT SUR LA PAGE WEB   //
//      ***************************************************************   //
////////////////////////////////////////////////////////////////////////////


// fonction qui permet d'afficher le score en fonction du nombre de questions directement sur la page web
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

function afficherResultat(score, nombreQuestions) {
    let spanScore = document.querySelector(".zoneScore span")
    spanScore.textContent = score + " / " + nombreQuestions
}

// fonction qui permet d'afficher la proposition à taper
//"""""""""""""""""""""""""""""""""""""""""""""""""""""

function afficherPropositions(nomDuTableau) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = nomDuTableau
}

//  fonction qui permet de mettre à jour le score
//  """"""""""""""""""""""""""""""""""""""""""""""
let score = 0
let i = 0

function miseAJourScore(nomDuTableau) {
    if (inputEcriture.value === nomDuTableau) {
        score++
    }
    return score
}



// fonction principale qui permet de lancer les autre fonctions
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

function lancerJeu() {
    //  initialisations & déclarations
    // ********************************
    let score = 0
    // let nombreQuestions = 0
    let i = 0
    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.querySelector("#inputEcriture") // autre possibilité de selectionner un ID

    afficherPropositions(listeMots[i])

    btnValiderMot.addEventListener("click", () => {

        score = miseAJourScore(listeMots[i])

        i++
        // nombreQuestions++ // nombreQuestions=i donc on peut le remplacer par et supprimer la variable
        inputEcriture.value = ""

        if (i === listeMots.length) {
            afficherPropositions("Le jeu est fini")
            btnValiderMot.disabled = true
        } else {
            afficherPropositions(listeMots[i])
        }

        afficherResultat(score, i)  // nombreQuestions=i donc on peut le remplacer par et supprimer la variable

    });
}
