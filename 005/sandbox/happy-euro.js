"use strict";

window.addEventListener('load', init);

function init(){
};
let counter = 1;
let positionen = [];
let einnahmen = [];
let ausgaben = [];

class Position{
    constructor(id, namePosition, betragPosition){
        this.id = counter++;
        this.namePosition = namePosition;
        this.betragPosition = betragPosition;
    }

    pushPosition(){
        console.log("Position " + this.namePosition);
    }
}

class Ausgabe extends Position{
    constructor(id, namePosition, betragPosition, artPosition){
        super(id, namePosition, betragPosition);
        this.artPosition = "Ausgabe";
    }

    pushPosition(){
        console.log("Ausgabe " + this.namePosition + " " + this.betragPosition);
        let _betragPosition = parseFloat(this.betragPosition);
        pushPosition(ausgaben, _betragPosition);
    }
}

class Einnahme extends Position{
    constructor(id, namePosition, betragPosition, artPosition){
        super(id, namePosition, betragPosition);
        this.artPosition = "Einnahme";
    }

    pushPosition(){
        console.log("Einnahmen " + this.namePosition + " " + this.betragPosition);
        let _betragPosition = parseFloat(this.betragPosition);
        pushPosition(ausgaben, _betragPosition);
    }
}

function pushPosition(x,y){
    x.push(y);
};

function getGesamt(x){
    let gesamtEinnahmen = 0;
    for(let item of x){
        let aktIn = parseFloat(item.betragPosition);
        gesamtEinnahmen+=aktIn;
    }
    console.log(gesamtEinnahmen);
}

let miete = new Ausgabe("", "Miete", 800);
miete.pushPosition();

let gehalt = new Einnahme("", "Gehalt", 2134.45);
gehalt.pushPosition();

let strom = new Ausgabe("", "Strom", 60);
strom.pushPosition();

let gewinn = new Einnahme("", "Gewinn", 50000);
gewinn.pushPosition();
