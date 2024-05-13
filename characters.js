
class Character {
    constructor({title, sexe, heir, name, livePeriod, reignPeriod, dynasty, death, family, avatar, blason, timeline, religion, birth}={}) {
      this.title = title;
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

//////////////////// CLOVIS I ///////////////////////
const clovisI = new Character({ 
    sexe: 'm',
    heir: true,
    name: 'Clovis', 
    livePeriod: [466, 511],
    reignPeriod: [{title: 'Roi des Francs', date: [509, 511]},
                ], 
    family: [ {role: 'father', name: 'Childéric I', sexe: 'm'},
              {role: 'mother', name: 'Basine de Thuringe', sexe: 'f'},
              {role: 'spouse', name: 'Evochilde', sexe: 'f'},
              {role: 'spouse', name: 'Clotilde', sexe: 'f'},
              {role: 'issue', name: 'Thierry I', sexe: 'm'},
              {role: 'issue', name: 'Ingomer', sexe: 'm'},
              {role: 'issue', name: 'Clodomir', sexe: 'm'},
              {role: 'issue', name: 'Childebert I', sexe: 'm'},
              {role: 'issue', name: 'Clotaire I', sexe: 'm'},
              {role: 'issue', name: 'Clotilde', sexe: 'f'},
            ],
    title: {id:'king', label:''},
    dynasty: {id:'merovingian', label: 'Mérovingiens'},
    religion: {id: 'christianism', label: 'Chrétien'},
    avatar: '/images/clovisI.png',
    death: {location: 'Paris', cause: 'Maladie'},
    birth: {location: 'Tournai'}
  })
//////////////////// THIERRY I ///////////////////////
const thierryI = new Character({ 
  sexe: 'm',
  heir: true,
  name: 'Thierry 1<sup style="font-size:0.9rem;margin-left:2px">er</sup>', 
  livePeriod: [485, 534],
  reignPeriod: [{title: "Roi de Reims", date: [511, 534]},
                {title: "Roi d'Orléans 1/3", date: [524, 534]},
              ], 
  family: [ {role: 'father', name: 'Clovis', sexe: 'm'},
            {role: 'mother', name: 'Evochilde', sexe: 'f'},
            {role: 'spouse', name: 'Suavegothe', sexe: 'f'},
            {role: 'issue', name: 'Thibert I', sexe: 'm'},
            {role: 'issue', name: 'Théodechilde', sexe: 'f'},
          ],
  title: {id:'king', label:''},
  dynasty: {id:'merovingian', label: 'Mérovingiens'},
  religion: {id: 'christianism', label: 'Chrétien'},
  avatar: '/images/thierryI.png',
})
//////////////////// CLODOMIR ///////////////////////
const clodomir = new Character({ 
  sexe: 'm',
  heir: true,
  name: 'Clodomir', 
  livePeriod: [495, 524],
  reignPeriod: [{title: "Roi d'Orléans", date: [511, 524]},
              ], 
  family: [ {role: 'father', name: 'Clovis', sexe: 'm'},
            {role: 'mother', name: 'Clotilde', sexe: 'f'},
            {role: 'spouse', name: 'Gondioque', sexe: 'f'},
            {role: 'issue', name: 'Thibaut', sexe: 'm'},
            {role: 'issue', name: 'Gontier', sexe: 'm'},
            {role: 'issue', name: 'Clodoald', sexe: 'm'},
          ],
  title: {id:'king', label:''},
  dynasty: {id:'merovingian', label: 'Mérovingiens'},
  religion: {id: 'christianism', label: 'Chrétien'},
  avatar: '/images/clodomirI.png',
  death: {location: 'Vézeronce', cause: 'Guerre contre les Burgondes'},
})
//////////////////// CHILDEBERT I ///////////////////////
const childebertI = new Character({ 
  sexe: 'm',
  heir: true,
  name: 'Childebert 1<sup style="font-size:0.9rem;margin-left:2px">er</sup>', 
  livePeriod: [497, 558],
  reignPeriod: [{title: "Roi de Paris", date: [511, 558]},
                {title: "Roi d'Orléans 1/3", date: [524, 558]},
              ], 
  family: [ {role: 'father', name: 'Clovis', sexe: 'm'},
            {role: 'mother', name: 'Clotilde', sexe: 'f'},
            {role: 'spouse', name: 'Ultrogothe', sexe: 'f'},
            {role: 'issue', name: '', sexe: 'f'},
            {role: 'issue', name: 'Gontier', sexe: 'f'},

          ],
  title: {id:'king', label:''},
  dynasty: {id:'merovingian', label: 'Mérovingiens'},
  religion: {id: 'christianism', label: 'Chrétien'},
  avatar: '/images/childebertI.png',
  death: {location: 'Paris', cause: 'Mort naturelle'},
})

const characters = [
  clovisI, thierryI, clodomir, childebertI,
];



export {characters};

/*
new Character({isKing: false, name: "Charles Martel", livePeriod: [688, 741], reignPeriod: [718, 741], childNames: ["Carloman", "Pépin le Bref", "Hiltrude", "Landrade de Munsterbilzen","Aude de France","Bernard","Griffon","Rothaïde","Jérôme","Remi de Rouen"], dynasty: "Pippinides"}),  
new Character({isKing: true, name: "Pépin le Bref", livePeriod: [714, 768], reignPeriod: [751, 768], childNames: [ "Charlemagne", "Carloman Ier", "Pépin", "Chrothais","Adélaïde","Gisèle"], dynasty: "Carolingiens"}),
new Character({isKing: true, name: "Charlemange", livePeriod: [748, 814], reignPeriod: [768, 814], childNames: ["Alpaïs","Pépin le Bossu","Charles le Jeune","Adélaïde","Rotrude","Pépin d'Italie","Louis Ier le Pieux"], dynasty: "Carolingiens"}),*/