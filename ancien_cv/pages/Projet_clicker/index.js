/*Variables*/

/*Temps et Total*/
var Notes = 0; //Compteur Notes (points)
var Times = 0; //Compteur 
var iclick = 1; //TT Notes/Clicks

/*Base*/
var obj1 = 0; //Base 1
var obj2 = 0; //Base 2
var obj3 = 0; //Base 3

/*Autres var*/
var audio = new Audio('image/pyon.wav'); //Son (pyon pyon pyon)
var chut = false; //Si son ou pas lors de click

var backG = 0; //Apparence 0 ou 2 (1 = sombre, pas de souvenir car payant)

/*Création de l'attribut disabled pour les boutons*/
document.getElementById("base1").setAttribute("disabled", "disabled");
document.getElementById("base2").setAttribute("disabled", "disabled");
document.getElementById("base3").setAttribute("disabled", "disabled");
document.getElementById("themed").setAttribute("disabled", "disabled");
document.getElementById("God").setAttribute("disabled", "disabled");
/*Image par défault*/
document.getElementById("main").style.backgroundImage = "url(image/Hypmiclogo.png)"; //backG = 0

/*Souvenirs et Loading de la page*/
function loading () {
    Notes = window.localStorage.getItem("Remember");
    document.getElementById("clics").innerHTML = Notes;
    if (Notes > 0) { 
        document.getElementById("base1").setAttribute("disabled", true); 
    }
    else {
        document.getElementById("base1").removeAttribute("disabled"); 
    }
    Times = window.localStorage.getItem("Souvenir");
    document.getElementById("compt").innerHTML = Times;
    obj3 = window.localStorage.getItem("Oboete");
    document.getElementById("clic3").innerHTML = obj3;
    obj2 = window.localStorage.getItem("Lembrar");
    document.getElementById("clic2").innerHTML = obj2;
    obj1 = window.localStorage.getItem("Erinnern");
    document.getElementById("clic1").innerHTML = obj1;
    backG = window.localStorage.getItem("BackGround");
    if (backG == 0) {
        document.getElementById("main").style.backgroundImage = "url(image/Hypmiclogo.png)";
    }
    if (backG == 2) {
        document.getElementById("main").style.backgroundImage = "url(image/RamudaS.png)";
    }
}



/*Secondes dans le jeu (Temps de jeu) :*/
setInterval(() => {
    Times ++;
    document.getElementById("compt").innerHTML = Times;
    window.localStorage.setItem("Souvenir", Times);
}, 1000)
//1000 = 1seconde


/*1 NOTE PAR CLICK ET PAR SEC*/
function clics() {
    Notes = Notes + iclick;
    document.getElementById("clics").innerHTML = Notes;
    window.localStorage.setItem("Remember", Notes);

    if (backG == 0){
        /*Apparition du personnage*/
        setTimeout(() => {
            document.getElementById("main").style.backgroundImage = "url(image/Hypmic2eme.png)";
            /*Audio en fonction du mode d'écoute*/
            if (chut == false) {
                audio.play();
            }
            if (chut == true) {
            }
        }, 1);
        /*Disparition du personnage au bout de 0.3 sec*/
        setTimeout(()=> {
            document.getElementById("main").style.backgroundImage = "url(image/Hypmiclogo.png)";
        }, 300)
    }


    if (backG == 1) {
        setTimeout(() => {
            document.getElementById("main").style.backgroundImage = "url(image/FPlogo2eme.png)";
        }, 1);
        setTimeout(()=> {
            document.getElementById("main").style.backgroundImage = "url(image/FPlogo.png)";
        }, 400)
    }


    if (backG == 2){
        setTimeout(() => {
            document.getElementById("main").style.backgroundImage = "url(image/RamudaSpyon.png)";

            if (chut == false) {
                audio.play();
            }
            if (chut == true) {
            }
        }, 1);

        setTimeout(()=> {
            document.getElementById("main").style.backgroundImage = "url(image/RamudaS.png)";
        }, 300)
    }
}


/*Compteur principal (hors clicks)*/
setInterval(() => {
    Notes ++;
    Notes = Notes + (1 * obj1) + (5 * obj2) + (10 * obj3);
    document.getElementById("clics").innerHTML = Notes;
    window.localStorage.setItem("Remember", Notes);
}, 1000)


/*Boutons*/
setInterval(() => {
    if (Notes < 20) {
        document.getElementById("base1").setAttribute("disabled", true); 
        document.getElementById("base2").setAttribute("disabled", true); 
        document.getElementById("base3").setAttribute("disabled", true);
        document.getElementById("themed").setAttribute("disabled", true);
        document.getElementById("God").setAttribute("disabled", true);
        document.getElementById("clics").innerHTML = Notes;
    }
    
    if (Notes >= 20 && Notes < 100){
        document.getElementById("base1").removeAttribute("disabled"); 
        document.getElementById("base2").setAttribute("disabled", true); 
        document.getElementById("base3").setAttribute("disabled", true); 
        document.getElementById("themed").setAttribute("disabled", true); 
        document.getElementById("God").setAttribute("disabled", true);
        document.getElementById("clics").innerHTML = Notes;
    }
    
    if (Notes >= 100 && Notes < 500) {
        document.getElementById("base1").removeAttribute("disabled"); 
        document.getElementById("base2").removeAttribute("disabled"); 
        document.getElementById("base3").setAttribute("disabled", true); 
        document.getElementById("themed").setAttribute("disabled", true);
        document.getElementById("God").setAttribute("disabled", true);
        document.getElementById("clics").innerHTML = Notes;
    }
    
    if (Notes >= 500 && Notes < 10000) {
        document.getElementById("base1").removeAttribute("disabled"); 
        document.getElementById("base2").removeAttribute("disabled");
        document.getElementById("base3").removeAttribute("disabled");
        document.getElementById("themed").setAttribute("disabled", true); 
        document.getElementById("God").setAttribute("disabled", true);
        document.getElementById("clics").innerHTML = Notes;
    }

    if (Notes >= 10000 && Notes < 1000000) {
        document.getElementById("base1").removeAttribute("disabled"); 
        document.getElementById("base2").removeAttribute("disabled");
        document.getElementById("base3").removeAttribute("disabled");
        document.getElementById("themed").removeAttribute("disabled");
        document.getElementById("God").setAttribute("disabled", true); 
        document.getElementById("clics").innerHTML = Notes;
    }

    if (Notes >= 1000000) {
        document.getElementById("base1").removeAttribute("disabled"); 
        document.getElementById("base2").removeAttribute("disabled");
        document.getElementById("base3").removeAttribute("disabled");
        document.getElementById("themed").removeAttribute("disabled");
        document.getElementById("God").removeAttribute("disabled"); 
        document.getElementById("clics").innerHTML = Notes;
    }
}, 10)
/*L'interval est très bas pour éviter les double clicks.*/


/*moderation*/

//Bug sur l'affichage, mais c'est un code triche donc...
function Plus() {
    if (Notes < 100000) {
        document.getElementById("triche").innerHTML = "+ 1000";
        Notes = Notes + 1000;
    }
    if (Notes >= 100000) {
        document.getElementById("triche").innerHTML = "+ 100000";
        Notes = Notes + 100000;
    }
}

/*Incrémentation*/
// ObjectX = Base X dans le jeu.
function Objet1() {
    obj1 ++;
    document.getElementById("clic1").innerHTML = obj1;
    window.localStorage.setItem("Erinnern", obj1);
    Notes = Notes - 20;
    document.getElementById("clics").innerHTML = Notes;
    window.localStorage.setItem("Remember", Notes);
    iclick = iclick + 1;
}

function Objet2() {
    obj2 ++;
    document.getElementById("clic2").innerHTML = obj2;
    window.localStorage.setItem("Lembrar", obj2);
    Notes = Notes - 100;
    document.getElementById("clics").innerHTML = Notes;
    window.localStorage.setItem("Remember", Notes);
    iclick = iclick + 2;
}

function Objet3() {
    obj3 ++;
    document.getElementById("clic3").innerHTML = obj3;
    window.localStorage.setItem("Oboete", obj3);
    Notes = Notes - 500;
    document.getElementById("clics").innerHTML = Notes;
    window.localStorage.setItem("Remember", Notes);
    iclick = iclick + 5;
}

/*Autres*/

/*Réinitialisation et Default mode*/
function Reini() {
    Notes = 0;
    Times = 0;
    iclick = 1;
    backG = 0;
    obj1 = 0;
    obj2 = 0;
    obj3 = 0;
    window.localStorage.setItem("Remember", Notes);
    window.localStorage.setItem("Souvenir", Times);
    window.localStorage.setItem("Oboete", obj3);
    window.localStorage.setItem("Lembrar", obj2);
    window.localStorage.setItem("Erinnern", obj1);
    window.localStorage.setItem("BackGround", backG);
    document.getElementById("main").style.backgroundImage = "url(image/Hypmiclogo.png)";
    document.body.style.backgroundColor = "";
    document.body.style.color = "";

    document.getElementById("B1").style.backgroundColor = "";
    document.getElementById("base1").style.backgroundColor = "";
    document.getElementById("base1").style.color = "";
    document.getElementById("B2").style.backgroundColor = "";
    document.getElementById("base2").style.backgroundColor = "";
    document.getElementById("base2").style.color = "";
    document.getElementById("B3").style.backgroundColor = "";
    document.getElementById("base3").style.backgroundColor = "";
    document.getElementById("base3").style.color = "";
    document.getElementById("menu").style.backgroundColor = "";
    document.getElementById("menu").style.borderColor = "";
    document.getElementById("themel").style.display = "none";
    document.getElementById("themed").style.display = "block";

    chut = false;
    document.getElementById("schut").style.display = "none";
    document.getElementById("chut").style.display = "block";
    document.getElementById("themeautre").style.display = "block";
    document.getElementById("themedefault").style.display = "none";
}

/*DarkMode*/
function Special() {
    Notes = Notes - 10000;
    backG = 1;
    
    document.body.style.transitionDuration = "2s";
    document.getElementById("main").style.transitionDuration = "0.5s";
    document.getElementById("B1").style.transitionDuration = "1s";
    document.getElementById("base2").style.transitionDuration = "1s";
    document.getElementById("B2").style.transitionDuration = "1s";
    document.getElementById("base2").style.transitionDuration = "1s";
    document.getElementById("B3").style.transitionDuration = "1s";
    document.getElementById("base2").style.transitionDuration = "1s";
    document.getElementById("menu").style.transitionDuration = "2s";

    document.getElementById("main").style.backgroundImage = "url(image/FPlogo.png)";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("B1").style.backgroundColor = "#020085";
    document.getElementById("base1").style.backgroundColor = "#ff0070";
    document.getElementById("base1").style.color = "white";
    document.getElementById("B2").style.backgroundColor = "#020085";
    document.getElementById("base2").style.backgroundColor = "#ff0070";
    document.getElementById("base2").style.color = "white";
    document.getElementById("B3").style.backgroundColor = "#020085";
    document.getElementById("base3").style.backgroundColor = "#ff0070";
    document.getElementById("base3").style.color = "white";
    document.getElementById("menu").style.backgroundColor = "#2e2e2e";
    document.getElementById("menu").style.borderColor = "#2e2e2e";
    
    document.getElementById("themed").style.display = "none";
    document.getElementById("themel").style.display = "block";
    document.getElementById("chut").style.display = "none";
    document.getElementById("schut").style.display = "none";
}

/*Mode Normal*/
function BackTheme() {
    backG = 2;
    window.localStorage.setItem("BackGround", backG);
    document.body.style.transitionDuration = "2s";
    document.getElementById("main").style.transitionDuration = "0.5s";
    document.getElementById("B1").style.transitionDuration = "1s";
    document.getElementById("base2").style.transitionDuration = "1s";
    document.getElementById("B2").style.transitionDuration = "1s";
    document.getElementById("base2").style.transitionDuration = "1s";
    document.getElementById("B3").style.transitionDuration = "1s";
    document.getElementById("base2").style.transitionDuration = "1s";
    document.getElementById("menu").style.transitionDuration = "2s";

    document.getElementById("main").style.backgroundImage = "url(image/RamudaS.png)";
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    document.getElementById("B1").style.backgroundColor = "";
    document.getElementById("base1").style.backgroundColor = "";
    document.getElementById("base1").style.color = "";
    document.getElementById("B2").style.backgroundColor = "";
    document.getElementById("base2").style.backgroundColor = "";
    document.getElementById("base2").style.color = "";
    document.getElementById("B3").style.backgroundColor = "";
    document.getElementById("base3").style.backgroundColor = "";
    document.getElementById("base3").style.color = "";
    document.getElementById("menu").style.backgroundColor = "";
    document.getElementById("menu").style.borderColor = "";
    
    document.getElementById("themel").style.display = "none";
    document.getElementById("themeautre").style.display = "none";
    document.getElementById("themedefault").style.display = "block";
    document.getElementById("themed").style.display = "block";

    //Pour le son
    if (chut == true) {
        document.getElementById("chut").style.display = "none";
        document.getElementById("schut").style.display = "block";
    }
    if (chut == false) {
        document.getElementById("schut").style.display = "none";
        document.getElementById("chut").style.display = "block";
    }

    
}

/*Débug et mode Default*/
function DefaultTheme() {
    backG = 0;
    window.localStorage.setItem("BackGround", backG);
    document.getElementById("main").style.backgroundImage = "url(image/Hypmiclogo.png)";
    document.getElementById("themeautre").style.display = "block";
    document.getElementById("themedefault").style.display = "none";
}

/*Son ?*/
function Chut() {
    chut = true;
    document.getElementById("chut").style.display = "none";
    document.getElementById("schut").style.display = "block";
}

function StopChut() {
    chut = false;
    document.getElementById("schut").style.display = "none";
    document.getElementById("chut").style.display = "block";
}

/*?*/
function Help() {
    audio.play();
    alert("Avez-vous VRAIMENT besoin d'aide? Ce n'est qu'un clicker. Les Clicks sont la solution. Et si cela ne vous aide pas, alors regarder dans le code du jeu ^-^");
}

/*GoD*/
function GodLike() {
    alert("Vous êtes God Like ! ^-^ : https://youtu.be/h8qrfIRz9WE?t=20")
    God = setTimeout(() => {
        document.getElementById("main").style.backgroundImage = "url(image/EasterEggPyonPyonPyon.png)";
    }, 100)
}


/*FAIL*/
/*function showImage() {
    const img = document.getElementById("img");
    img.src = "image/Ramuda1.png";
    img.style.position = "absolute";
    document.getElementById("img").innerHTML(img);
}*/
/*function Ramuda1() {
    setInterval(() => {
    document.getElementById("B1").style.backgroundImage = "url(image/Ramuda1.png)";
    }, 1000)
}*/

