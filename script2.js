"use strict";
let question = document.getElementById("question");
let demande = document.getElementById("reponse");
let boutonValider = document.getElementById("boutonValider");
let n=0;
let c = 0;

let questRep =[
    {
        rps:"Salut",
        dmd:"bonjour"
    },
    {
        rps:"Fait référence à l'Île d'Ohara dans One piece",
        dmd:"Ohara"
    },
    {
        rps:"Mon créateur",
        dmd:"nohan"
    },
    {
        rps:"2",
        dmd:"1"
    },
    {
        rps:"Agathe repel",
        dmd:"nohan aime qui ?"
    },
    {
        rps:"-_-",
        dmd:"tg"
    },
    {
        rps:"ok",
        dmd:"rien"
    },
    {
        rps:"je te réponds",
        dmd:"tu fais quoi ?"
    }
];



boutonValider.hidden  = true;

question.textContent= "Mot de passe";
demande.setAttribute("type","password");




function bonjour(){
    question.textContent="Bonjour, je suis Ohara. ";
}
function menu () {
    demande.value = "";
    question.textContent="Puis-je faire autre chose ?";
}


boutonValider.onclick = function () {
    //MOT DE PASSE
    if (question.textContent==="Mot de passe" ||question.textContent==="Mot de passe incorrect" ){
        if (demande.value === "nohan"){
            demande.value = "";
            demande.setAttribute("type","text");
            bonjour();
        }
        else{

            if(c<3){
                question.textContent= "Mot de passe incorrect";
                demande.value = "";
                c++;
            }
            else{
                window. close()
            }
        }
    }
    //CLICK
    else {

       for(n;demande.value.toLowerCase() !== questRep[n].dmd && n<questRep.length-1 ;n++){
           demande.value ="";
       }

       if(demande.value.toLowerCase() === questRep[n].dmd){
            demande.value ="";
            question.textContent = questRep[n].rps;
            n=0;
            return n;
       }
       if(demande.value !== questRep[n].dmd){

            apprendre();

       }
    }
};

function apprendre(){

    question.textContent="Je n'ai pas la réponse. voulez vous m'apprendre ? (oui/non)";


    if(demande.value.toLowerCase()=== "oui"){

        question.textContent="Quelle est la réponse ?";

    }
    if(demande.value.toLowerCase()=== "non"){
        menu();
    }
}

demande.addEventListener('keydown', function (e) {
    if (e.key ==="Enter") {boutonValider.onclick()}
});



