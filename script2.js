

// ------------------- DECLARATION VARIABLES ------------------------
// ------------------------------------------------------------------
const tabWords = ['Camion','Agrafeuse','Mariage','Gecko','Freud','Dr79?!eeA','Plus VITE','Frénétique','Lunettes','Cartons']     // Tableau des mots
let score = 0;                                                                                                                  // score
let totalWords = tabWords.length                                                                                                // nb total de mots
let indexGlobal = 0;                                                                                                           // compteur

//affichage des variables dans la console
console.log(tabWords,totalWords,score)

// cacher le gif1
let d1 = document.getElementById("d1")
d1.style.display = "none"
// cacher le gif2
let d2 = document.getElementById("d2")
d2.style.display = "none"

// cacher la table
let divTable = document.getElementById("divTable")
divTable.style.display = "block"

//récupération de l'élément table
let table = document.getElementById("table")


// Récupération de l'élément HTML bouton PLAY
let btnPlay = document.getElementById("play")
console.log(btnPlay)

// récupération de l'élément HTML body
let body = document.querySelector("body")

// temps de début du jeu
let startingTime = 0

// ------------- FONCTIONS --------------
// --------------------------------------

// afficher le mot désigné par l'index
function showOneWord (index,tab) {
    let word = tab[index]
    let text = document.getElementById("presentation")
    text.textContent = word
    
}

// vérifier si un mot est correctement tapé
function checkWord (word1,word2) {
    let check
    if(word1 === word2){
        check = true
    } else { 
        check = false
    }
    return check
}

// ---------------- EVENEMENTS ---------------------
// -------------------------------------------------

// lancer le jeu avec le premier mot
btnPlay.addEventListener("click", () => {
    indexGlobal = 0 // réinitialisation du compteur (pour jouer plusieurs fois)
    let inputZone = document.getElementById("name") // on efface la saisie si necessaire
    inputZone.value = ""

    let avatarBalise = document.getElementById("avatar")
    let ageBalise = document.getElementById("age")
    
    console.log(avatarBalise.value)
    console.log[ageBalise.value]
    
    // si le nom et l'age n'est pas renseigné
    if(avatarBalise.value==="" || ageBalise ==="") {
        alert("NAME AND AGE PLEASE !")
    } else { // si l'age et le nom sont renseigné

    //lancer le temps
    startingTime = Date.now();
    // montrer le premier mot
    showOneWord(indexGlobal,tabWords)

    /*
    // afficher le gif2
    d2.style.display = "block"   

    // création d'un div, création d'un paragraphe, écriture de texte dans le paragraphe
    let divTest = document.createElement("div")
    let pTest = document.createElement("p")
    pTest.textContent = "Coucou hibou je suis furtif"
    divTest.append(pTest)
    body.append(divTest)

    // insertion d'une image
    let image = document.createElement("img")
    image.src= "image1.png"
    image.alt = "paysage"
    image.width = "500"
    body.append(image)
    console.log(image)

    // insertion d'un bloc HTML
    let divTest2 = `<di><p><strong> AHHHH </strong></p></div>`
    body.insertAdjacentHTML("beforeend",divTest2)

    */
    }

})

// Action quand la touche ENTREE est appuyée
document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        // Si le mot tapé n'est pas le dernier 
        if(indexGlobal<totalWords) {
            // récupération de l'élément de saisie HTML
            let inputZone = document.getElementById("name")
            // récupération du texte saisie de l'élément de saisie
            let wordToCheck = inputZone.value
            // si le mot tapé est identique au mot affiché
            if(checkWord(tabWords[indexGlobal],wordToCheck)) {
                // le score est mis à jour
                score++
            } 
            // compteur de mots + 1
            indexGlobal++
            // affichage de l'autre mot
            showOneWord(indexGlobal,tabWords)  
            // Effacer le mot précédent dans la zone de saisie
            inputZone.value = ""
        }
        // Si le dernier mot est tapé
        if(indexGlobal === totalWords) {
            // afficher le temps de jeu 
            let endingTime = Date.now() // temps en milliseconds
            let playingTime = endingTime - startingTime
            playingTime = playingTime / 1000
            console.log("Ton temps de jeu est de " + playingTime + " s")
    
            // afficher score et temps dans la page
            let msg = document.getElementById("scoreFinal")
            msg.textContent = "Ton score est de " + score + " sur " + totalWords + ". Ton temps de jeu est de "+ playingTime + " s"
            msg.style.fontSize = "20px"
               
            /*
            // masquer le gif 2
            d2.style.display = "none"
            // afficher le gif 1
            d1.style.display = "block"
            */
            // ajout d'une ligne à la table.
            let avatarBalise = document.getElementById("avatar")
            let ageBalise = document.getElementById("age")
            let caractBalise = document.getElementById("trait")

            let tr = `<tr>
                            <td>${avatarBalise.value}</td>
                            <td>${ageBalise.value}</td>
                            <td>${score}</td>
                            <td>${playingTime} s</td>
                            <td>${caractBalise.options[caractBalise.selectedIndex].text}</td>
                    </tr>   
            `
            table.insertAdjacentHTML("beforeend",tr)
            
            // on efface le nom de la personne
            avatarBalise.value = ""
            ageBalise.value = ""

            /*console.log(table)
            console.log(table.rows.length)
            console.log(table.tBodies[0].rows.length) // récupère le nombre de lignes (autre que l entête)
            console.log(table.rows[1].cells[2].textContent)
            let rows = table.tBodies[0].rows.length*/
            
  
        }
    }
})

/*btnErase.addEventListener("click", () => {
    newP.remove()
})*/

// permet de changer les attributs d'un élément HTLM
//let baliseImage = document.getElementById("premiereImage");
//baliseImage.setAttribute("alt", "Ceci est une image de test modifiée"); // méthode générique à utiliser de préférence
//baliseImage.src = "cheminImage.jpg";
// permet de modifier l'attribut class en enlevant ou rajoutant du texte.
//baliseImage.classList.add("nouvelleClasse")
//baliseImage.classList.remove("photo")

                    /*switch (menu.selectedIndex) {
                        case 0: //rouge
                            newP.style.color = '#FF0000'
                            break
                        case 1: //vert
                            newP.style.color = '#2E8B57'
                            break
                        case 2: //bleue
                            newP.style.color = '#0000FF'
                            break
                        case 3: //noir
                            newP.style.color = '#000000'
                            break    
                    }

                    body.append(newP)*/