


let k = 0; // Compteur pour le score joueur
let ia = 0; // Compteur pour l'IA



    //alert('test');

let choix = document.getElementsByClassName("arme");

let choispierre = document.getElementById("pierreid")
// choispierre.addEventListener('click', fetchID)
let choisfeuille = document.getElementById("feuilleid");
// choisfeuille.addEventListener('click', fetchID)
let choisciseaux = document.getElementById("ciseauxid");
// choisciseaux.addEventListener('click', fetchID)

let prendidpierre = choispierre.id;
let prendidciseaux = choisciseaux.id;
let prendidfeuille = choisfeuille.id;
//console.log(prendidciseaux)

    /*image pour la pop-up*/
let imgciseaux = document.createElement("img");
imgciseaux.setAttribute("src","ciseaux-bouts-pointus.jpg");
let imgfeuille = document.createElement("img");
imgfeuille.setAttribute("src","feuille.jpeg")
let imgpierre = document.createElement("img");
imgpierre.setAttribute('src','pierre.png')


let tab = [prendidpierre,prendidfeuille,prendidciseaux]
//let randomchoice = Math.floor(Math.random() * tab.length); 
//let r = tab[randomchoice]

let score = document.querySelector("#score");
console.log(score)

let scoreia = document.querySelector("#scoreia");
console.log(scoreia)


/*Test IA

console.log("tableau" +tab)
*/
  
//console.log("IA : "+randomchoice);
//console.log("IA1 : "+tab[randomchoice]);

let linke = document.querySelectorAll('button');
console.log(linke)

/* Création fonction condition de la partie*/


function ciseaux(){
    let randomchoice = Math.floor(Math.random() * tab.length);
    //console.log("IA : "+randomchoice);
    //console.log("IA1 : "+tab[randomchoice]);

    if(randomchoice==0){
        alert("Perdu" +'\t' +"IA a choisi pierre")
        scoreia.innerHTML =(++ia)
    }else if(randomchoice == 1){
        alert("Partie remportée" + '\t' +"IA a choisi feuille")
        score.innerHTML = (++k);
    }else if(randomchoice==2){
        alert('égalite' + '\t'+"IA a aussi choisi ciseaux")
        
    }

    //console.log(randomchoice)
}


function feuille(){
    let randomchoice = Math.floor(Math.random() * tab.length);
    // console.log("IA : "+randomchoice);
    // console.log("IA1 : "+tab[randomchoice]);
    
    if(randomchoice==0){
        alert("Partie remportée" +'\t' +"IA a choisi pierre")
        score.innerHTML = (++k);
    }else if(randomchoice == 1){
        alert("égalité" + '\t' +"IA a choisi feuille")
    }else if(randomchoice==2){
        alert('perdu'+ '\t'+"IA a  choisi ciseaux")
        scoreia.innerHTML =(++ia)

    }
}

function pierre(){
    let randomchoice = Math.floor(Math.random() * tab.length);
    // console.log("IA : "+randomchoice);
    // console.log("IA1 : "+tab[randomchoice]);
    
    if(randomchoice==0){
        alert("egalité" +'\t' +"IA a aussi choisi pierre")
    }else if(randomchoice == 1){
        alert("t'as perdu"+ '\t' +"IA a choisi feuille")
        scoreia.innerHTML =(++ia)

    }else if(randomchoice==2){
        alert('Partie remporté'+ '\t'+"IA a choisi ciseaux")
        score.innerHTML = (++k)
       // console.log(k)
    }
    // randomchoice = Math.floor(Math.random() * tab.length)

}

// randomchoice = Math.floor(Math.random() * tab.length)
// console.log(randomchoice)


/*Appel des fonctions*/


choispierre.addEventListener('click',pierre);

choisciseaux.addEventListener('click',ciseaux);

choisfeuille.addEventListener('click',feuille);




