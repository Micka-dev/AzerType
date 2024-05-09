// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur => cf "config.js"


// fonction qui demande à l’utilisateur s’il veut jouer avec des phrases ou des mots

function choisirPhrasesOuMots() {
    // Déclaration de la variable contenant le choix de l'utilisateur
    let choix = prompt(
        'Si vous voulez jouer avec des listes de mots ou de phrases écrivez le mot correspondant soit : "mots" ou "phrases"'
    )
    // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt(
            "Vous devez choisir entre une liste de mots ou de phrases, écrivez 'mots' ou 'phrases'"
        )
    }
    return choix
}

// fonction qui contient la boucle principale de jeu

function lancerBoucleDeJeu(nomDuTableau) {
    let score = 0
    for (let i = 0; i < nomDuTableau.length; i++) {   // On parcourt le tableau
        let reponseUtilisateur = prompt("Entrez la phrase : " + nomDuTableau[i]);  // On demande à l'utilisateur de saisir ce qui est demandé à l'indice i
        if (reponseUtilisateur === nomDuTableau[i]) {
            score++  // Si la saisie est correct, on incrémente le score
        }
    }
    return score
}

// fonction qui permet d'obtenir le message donnant le résultat en fonction du nombre de questions

function afficherResultat(score, nombreQuestions) {
    console.log("Votre score est de " + score + " sur " + nombreQuestions)
}

 // fonction principale qui permet de lancer les autre fonctions
 function lancerJeu() {
    let choix = choisirPhrasesOuMots() // Déclaration de la variable choixUtilisateur
    let score = 0 // Déclaration de la variable score
    let nombreQuestions = 0
    
    //structure conditionnelle
    if (choix === "mots") {
        score = lancerBoucleDeJeu(listeMots)
        nombreQuestions = listeMots.length // Déclaration de la variable nombreQuestions
        
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nombreQuestions = listePhrases.length // Déclaration de la variable nombreQuestions
    }
    afficherResultat(score, nombreQuestions)
}
