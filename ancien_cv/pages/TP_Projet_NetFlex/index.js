var Utilisateur = 1;
var Fdisplay = 1;
//var stringValue = document.getElementById("Utilisateur"); 

var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var block3 = document.getElementById("block3");
var block4 = document.getElementById("block4");
var block5 = document.getElementById("block5");
var block6 = document.getElementById("block6");
var block7 = document.getElementById("block7");
var block8 = document.getElementById("block8");
var block9 = document.getElementById("block9");
var block10 = document.getElementById("block10");
var block11 = document.getElementById("block11");


function loading() {
    Utilisateur = window.localStorage.getItem("Souvenir");
}

/*
function Valider() {
    if (stringValue == 1) {
        Utilisateur = 1;
    }

    if (stringValue == 2) {
        Utilisateur = 2;
    }

    if (stringValue == 3) {
        Utilisateur = 3;
    }
}*/


    if (Utilisateur == 1) {
        document.getElementById("listfilm1").style.display = "flex";
        document.getElementById("listfilm2").style.display = "none";
        document.getElementById("listfilm3").style.display = "none";
        window.localStorage.setItem("Souvenir", Utilisateur);
        block1.style.display = "none";
        block2.style.display = "none";
        block3.style.display = "none";
        block4.style.display = "none";
        block5.style.display = "none";
        block6.style.display = "none";
        block7.style.display = "none";
        block8.style.display = "none";
        block9.style.display = "flex";
        block10.style.display = "none";
        block11.style.display = "none";
    }

    if (Utilisateur == 2) {
        document.getElementById("listfilm1").style.display = "none";
        document.getElementById("listfilm2").style.display = "flex";
        document.getElementById("listfilm3").style.display = "none";
        window.localStorage.setItem("Souvenir", Utilisateur);
        block1.style.display = "none";
        block2.style.display = "none";
        block3.style.display = "none";
        block4.style.display = "none";
        block5.style.display = "none";
        block6.style.display = "flex";
        block7.style.display = "none";
        block8.style.display = "none";
        block9.style.display = "none";
        block10.style.display = "none";
        block11.style.display = "none";
    }

    if (Utilisateur == 3) {
        document.getElementById("listfilm1").style.display = "none";
        document.getElementById("listfilm2").style.display = "none";
        document.getElementById("listfilm3").style.display = "flex";
        window.localStorage.setItem("Souvenir", Utilisateur);
        block1.style.display = "flex";
        block2.style.display = "none";
        block3.style.display = "none";
        block4.style.display = "none";
        block5.style.display = "none";
        block6.style.display = "none";
        block7.style.display = "none";
        block8.style.display = "none";
        block9.style.display = "none";
        block10.style.display = "none";
        block11.style.display = "none";
    }



function ID1() {
    Utilisateur = 1;
    block1.style.display = "none";
    block2.style.display = "none";
    block3.style.display = "none";
    block4.style.display = "none";
    block5.style.display = "none";
    block6.style.display = "none";
    block7.style.display = "none";
    block8.style.display = "none";
    block9.style.display = "flex";
    block10.style.display = "none";
    block11.style.display = "none";
}

function ID2() {
    Utilisateur = 2;
    block1.style.display = "none";
    block2.style.display = "none";
    block3.style.display = "none";
    block4.style.display = "none";
    block5.style.display = "none";
    block6.style.display = "flex";
    block7.style.display = "none";
    block8.style.display = "none";
    block9.style.display = "none";
    block10.style.display = "none";
    block11.style.display = "none";
}

function ID3() {
    Utilisateur = 3;
    block1.style.display = "flex";
    block2.style.display = "none";
    block3.style.display = "none";
    block4.style.display = "none";
    block5.style.display = "none";
    block6.style.display = "none";
    block7.style.display = "none";
    block8.style.display = "none";
    block9.style.display = "none";
    block10.style.display = "none";
    block11.style.display = "none";
}

function film1() {
    Fdisplay = 1;
    block1.style.display = "flex";
    block2.style.display = "none";
    block3.style.display = "none";
    block4.style.display = "none";
    block5.style.display = "none";
    block6.style.display = "none";
    block7.style.display = "none";
    block8.style.display = "none";
    block9.style.display = "none";
    block10.style.display = "none";
    block11.style.display = "none";

}

function film2() {
    Fdisplay = 2;
    block1.style.display = "none";
    block2.style.display = "flex";
    block3.style.display = "none";
    block4.style.display = "none";
    block5.style.display = "none";
    block6.style.display = "none";
    block7.style.display = "none";
    block8.style.display = "none";
    block9.style.display = "none";
    block10.style.display = "none";
    block11.style.display = "none";

}

function film3() {
    Fdisplay = 3;
    block1.style.display = "none";
    block2.style.display = "none";
    block3.style.display = "flex";
    block4.style.display = "none";
    block5.style.display = "none";
    block6.style.display = "none";
    block7.style.display = "none";
    block8.style.display = "none";
    block9.style.display = "none";
    block10.style.display = "none";
    block11.style.display = "none";
}

function film4() {
    Fdisplay = 4;
    block1.style.display = "none";
    block2.style.display = "none";
    block3.style.display = "none";
    block4.style.display = "flex";
    block5.style.display = "none";
    block6.style.display = "none";
    block7.style.display = "none";
    block8.style.display = "none";
    block9.style.display = "none";
    block10.style.display = "none";
    block11.style.display = "none";
}

function film5() {
    Fdisplay = 5;
    block1.style.display = "none";
    block2.style.display = "none";
    block3.style.display = "none";
    block4.style.display = "none";
    block5.style.display = "flex";
    block6.style.display = "none";
    block7.style.display = "none";
    block8.style.display = "none";
    block9.style.display = "none";
    block10.style.display = "none";
    block11.style.display = "none";
}

function film6() {
    Fdisplay = 6;
    block1.style.display = "none";
    block2.style.display = "none";
    block3.style.display = "none";
    block4.style.display = "none";
    block5.style.display = "none";
    block6.style.display = "flex";
    block7.style.display = "none";
    block8.style.display = "none";
    block9.style.display = "none";
    block10.style.display = "none";
    block11.style.display = "none";
}

function film7() {
    Fdisplay = 7;
    block1.style.display = "none";
    block2.style.display = "none";
    block3.style.display = "none";
    block4.style.display = "none";
    block5.style.display = "none";
    block6.style.display = "none";
    block7.style.display = "flex";
    block8.style.display = "none";
    block9.style.display = "none";
    block10.style.display = "none";
    block11.style.display = "none";
}

function film8() {
    Fdisplay = 8;
    block1.style.display = "none";
    block2.style.display = "none";
    block3.style.display = "none";
    block4.style.display = "none";
    block5.style.display = "none";
    block6.style.display = "none";
    block7.style.display = "none";
    block8.style.display = "flex";
    block9.style.display = "none";
    block10.style.display = "none";
    block11.style.display = "none";
}

function film9() {
    Fdisplay = 9;
    block1.style.display = "none";
    block2.style.display = "none";
    block3.style.display = "none";
    block4.style.display = "none";
    block5.style.display = "none";
    block6.style.display = "none";
    block7.style.display = "none";
    block8.style.display = "none";
    block9.style.display = "flex";
    block10.style.display = "none";
    block11.style.display = "none";
}

function film10() {
    Fdisplay = 10;
    block1.style.display = "none";
    block2.style.display = "none";
    block3.style.display = "none";
    block4.style.display = "none";
    block5.style.display = "none";
    block6.style.display = "none";
    block7.style.display = "none";
    block8.style.display = "none";
    block9.style.display = "none";
    block10.style.display = "flex";
    block11.style.display = "none";
}

function film11() {
    Fdisplay = 11;
    block1.style.display = "none";
    block2.style.display = "none";
    block3.style.display = "none";
    block4.style.display = "none";
    block5.style.display = "none";
    block6.style.display = "none";
    block7.style.display = "none";
    block8.style.display = "none";
    block9.style.display = "none";
    block10.style.display = "none";
    block11.style.display = "flex";
}
