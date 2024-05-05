
class Character {
    constructor({isKing, sexe, heir, name, livePeriod, reignPeriod, dynasty, death, family, avatar, blason, timeline, religion, birth}={}) {
      this.isKing = isKing;
      this.sexe = sexe;
      this.heir = heir;
      this.name = name;
      this.livePeriod = livePeriod
      this.reignPeriod = reignPeriod;
      this.dynasty = dynasty;
      this.death = death;
      this.family = family;
      this.avatar = avatar;
      this.blason = blason;
      this.timeline = timeline;
      this.religion = religion;
      this.birth = birth;
      

      // calculated
      this.age = livePeriod[1] - livePeriod[0];
    }
  } 
  
const clovisI = new Character({
    isKing: true, 
    sexe: "m",
    heir: true,
    name: "Clovis", 
    livePeriod: [465, 511], 
    reignPeriod: [{title: 'Roi des Francs', date: [509, 511]}], 
    family: [ {role: 'father', name: 'Childéric I', sexe: 'm'},
              {role: 'mother', name: 'Basine de Thuringe', sexe: 'f'},
              {role: 'sibling', name: 'Audoflède', sexe: 'f'},
              {role: 'sibling', name: 'Lanthilde', sexe: 'f'},
              {role: 'sibling', name: 'Alboflède', sexe: 'f'},
              {role: 'spouse', name: 'Evochilde', sexe: 'f'},
              {role: 'spouse', name: 'Clotilde', sexe: 'f'},
              {role: 'issue', name: 'Thierry I', sexe: 'm', heir: true},
              {role: 'issue', name: 'Ingomer', sexe: 'm', heir: false},
              {role: 'issue', name: 'Clodomir', sexe: 'm', heir: true},
              {role: 'issue', name: 'Childebert I', sexe: 'm', heir: true},
              {role: 'issue', name: 'Clotaire I', sexe: 'm', heir: true},
              {role: 'issue', name: 'Clotilde', sexe: 'f', heir: false},
            ],
    dynasty: 'Merovingiens',
    avatar: '/images/clovis.png',
    religion: 'Christianisme',
    death: {location: 'Paris', cause: 'Maladie'},
    birth: {location: 'Tournai'}
  })



const allCharacters = [
  clovisI,
  

];

export {allCharacters};

/*
new Character({isKing: true, name: "Clovis", livePeriod: [465, 511], reignPeriod: [509, 511], childNames: ["Thierry Ier", "Clodomir", "Childebert", "Clotaire Ier"], dynasty: "Merovingian", father: "Childéric Ier", mother: "Basina"}),
new Character({isKing: true, name: "Thierry Ier", livePeriod: [485, 534], reignPeriod: [511, 534], childNames: ["Thibert Ier", "Théodechilde"], dynasty: "Merovingian", father: "Clovis", mother : "Evochilde"}),
new Character({isKing: false, name: "Charles Martel", livePeriod: [688, 741], reignPeriod: [718, 741], childNames: ["Carloman", "Pépin le Bref", "Hiltrude", "Landrade de Munsterbilzen","Aude de France","Bernard","Griffon","Rothaïde","Jérôme","Remi de Rouen"], dynasty: "Pippinides"}),  
new Character({isKing: true, name: "Pépin le Bref", livePeriod: [714, 768], reignPeriod: [751, 768], childNames: [ "Charlemagne", "Carloman Ier", "Pépin", "Chrothais","Adélaïde","Gisèle"], dynasty: "Carolingiens"}),
new Character({isKing: true, name: "Charlemange", livePeriod: [748, 814], reignPeriod: [768, 814], childNames: ["Alpaïs","Pépin le Bossu","Charles le Jeune","Adélaïde","Rotrude","Pépin d'Italie","Louis Ier le Pieux"], dynasty: "Carolingiens"}),*/