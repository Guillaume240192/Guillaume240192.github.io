import {characters} from "/characters.js";
import {parameters} from "/parameters.js";

// GLOBAL VARIABLE
var intervals = [];

// *
// ------ CONTAINER FUNCTIONS -------
// *
function playAudio() {
  var audio = document.getElementById("mouse-click");
  audio.play();
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function createBlock(char,id) {
  var randomNb = getRandomInt(10);
  var param = parameters.boxes[randomNb];

  // BLOCK DIV
  const block = document.createElement('div');
  block.classList.add('block');
  block.dataset.id = id; //set id to the block (equal to index of characters array)
  block.style.borderRadius = param.borderRadius;
  block.style.borderWidth = param.borderWidth;
  block.style.transform = `rotate(${param.rotationAngle+'deg'})`;
  block.addEventListener('click',function(e) {
    e.stopPropagation();
    for(var j=0; j<allBlocks.length; j++) {
      for(var k=0; k<allBlocks[j].children.length; k++) {
        if(allBlocks[j].children[k].outerText == "combat !") {
          if(allBlocks[j].children[k].style.display == 'flex') {
            allBlocks[j].children[k].style.display = 'none';
          }
        }
      }
    }
    
    //this.classList.toggle("selected")
    var divList = this.children;
    for(var i=0; i< this.children.length; i++) {
      if(this.children[i].outerText == "combat !") {
        var blockOverlay = this.children[i];
        break;
      }
    }
  
    if(blockOverlay.style.display == 'none' || blockOverlay.style.display == '' ) {
      blockOverlay.style.display = 'flex';
    }else {
      blockOverlay.style.display = 'none';
    }
  })

  // BLOCKHEADER DIV
  const blockHeader = document.createElement('div');
  blockHeader.classList.add('blockHeader');

  // TITLE DIV
  const title = document.createElement('div');
  title.classList.add('title');
  title.style.backgroundImage = `url(${parameters.titleIcon[char.title.id]})`;
  title.style.position = 'relative';
  char.reignPeriod.forEach((el) => {title.title += `${el.title} [${el.date[0]} - ${el.date[1]}]\u000d`;})
   /*   const reignMap = document.createElement('div')
      reignMap.classList.add('reignMap');
      reignMap.style.width = '300px';
      reignMap.style.height = '200px';
      reignMap.style.backgroundColor = 'rgba(0,0,0,0.5)';
      reignMap.style.position = 'absolute';
      reignMap.style.backgroundImage = `url("/images/mapClovis.png")`;
      console.log(reignMap)
  title.addEventListener('click',function(e) {
    e.stopPropagation();
    reignMap.style.display = 'block';
  });
  title.addEventListener('mouseleave',function(e) {
    e.stopPropagation();
    reignMap.style.display = 'none';
  });
  
  title.appendChild(reignMap);*/

  // DYNASTY DIV
  const dynasty = document.createElement('div');
  dynasty.classList.add('dynasty');
  dynasty.style.backgroundImage = `url(${parameters.dynastyIcon[char.dynasty.id]})`;
  dynasty.title = char.dynasty.label;

  // RELIGION DIV
  const religion = document.createElement('div');
  religion.classList.add('religion');
  religion.style.backgroundImage = `url(${parameters.religionIcon[char.religion.id]})`;
  religion.title = char.religion.label;
  
  // AGE DIV
  const age = document.createElement('div');
  age.classList.add('age');
  age.innerText = `${char.age} ans`;

  // FACE DIV
  const face = document.createElement('div');
  face.classList.add('face');
  face.style.borderRadius = param.face.borderRadius;
  face.style.borderWidth = param.face.borderWidth;
  face.style.backgroundImage = `url(${char.avatar})`;

  // NAME DIV
  const name = document.createElement('div');
  name.classList.add('name');
  name.innerHTML = char.name;


  // LIVEPERIOD DIV
  const livePeriod = document.createElement('div');
  livePeriod.classList.add('livePeriod');
  livePeriod.innerText = `${char.livePeriod[0]} - ${char.livePeriod[1]}`;

  // blockOverlay DIV
  const blockOverlay = document.createElement('div');
  blockOverlay.classList.add('blockOverlay')
  blockOverlay.style.borderRadius = param.borderRadius;
  blockOverlay.style.borderWidth = param.borderWidth;
  blockOverlay.addEventListener('click', function () {
    _overlay(id);
  });
    // Double Axes DIV
    const doubleAxes = document.createElement('div');
    doubleAxes.classList.add('doubleAxes');
    doubleAxes.style.borderRadius = param.borderRadius;
    doubleAxes.style.borderWidth = param.borderWidth;
    doubleAxes.innerHTML = '<div class="fight">combat !<div>';


  // ADDING BLOCK IN CONTAINER
  const container = document.querySelector('.container');
  blockHeader.appendChild(title);
  blockHeader.appendChild(dynasty);
  blockHeader.appendChild(religion);
  blockHeader.appendChild(age);
  block.appendChild(blockHeader);
  block.appendChild(face);
  block.appendChild(name);
  block.appendChild(livePeriod);
  blockOverlay.appendChild(doubleAxes);
  block.appendChild(blockOverlay);
  container.appendChild(block);

  // inverse rotation for some divs
  const divs = document.querySelectorAll(`[data-id='${block.dataset.id}']`)[0].querySelectorAll("*:not(.name):not(.title):not(.dynasty):not(.religion):not(.age):not(.reignMap):not(.blockOverlay):not(.doubleAxes)");
  divs.forEach((el) => {el.style.transform = `rotate(${-1*param.rotationAngle+'deg'})`;})
  //console.log(divs)
}
// *
// ------ OVERLAY FUNCTIONS ------
// *
function playFight(id) {
  var randomNb = getRandomInt(10);
  var param = parameters.boxes[randomNb];

  const modal_div = document.getElementById("modal");

  // MY CHARACTER
  const char = characters[id];
  // SELECT RANDOM ENEMY
  const enemies = JSON.parse(JSON.stringify(characters)); // DEEP COPY
  enemies.splice(id,1); // rid off the selected character
  const enemy = enemies[(Math.floor(Math.random() * enemies.length))];


  function _displayHead(id, life) {
    // FACE DIV
    const face_div = document.createElement('div');
    face_div.classList.add('modalFace');
    face_div.style.borderRadius = param.face.borderRadius;
    face_div.style.borderWidth = param.face.borderWidth;
    face_div.style.backgroundImage = `url(${id.avatar})`;
    // LIFEBAR DIV
    const lifeBar_div = document.createElement('div');
    lifeBar_div.classList.add('modalLifeBar');
    lifeBar_div.style.borderWidth = param.face.borderWidth;
    // LIFE DIV
    const life_div = document.createElement('div');
    life_div.classList.add('modalLife');
    life_div.style.width = id.life+'px';
    // APPEND
    const _div = document.createElement('div');
    lifeBar_div.appendChild(life_div);
    _div.appendChild(lifeBar_div);
    _div.appendChild(face_div);

    return _div;
  }


  // initialize life 180px (100%)
  char.life = 180;
  enemy.life = 180;

  // HEADERS DIV
  const headers_div = document.createElement('div');
  headers_div.id = "headers_div";
      // CHAR DIV
      const char_div = _displayHead(char)
      char_div.id = "char_div";
      char_div.classList.add('charHeader');

      // DOUBLE AXE
      const doubleAxes_div = document.createElement('div');
      doubleAxes_div.classList.add('axesHeader');

      // ENEMY DIV
      const enemy_div = _displayHead(enemy);
      enemy_div.id = "enemy_div";
      enemy_div.classList.add('enemyHeader'); 


  // FIGHT DIV
  const fight_div = document.createElement('div');
  fight_div.id = "fight_div";
  fight_div.innerHTML = "<u>Combat en cours :</u>";

  // APPEND 
  headers_div.appendChild(char_div);
  headers_div.appendChild(doubleAxes_div);
  headers_div.appendChild(enemy_div);
  modal_div.appendChild(headers_div);
  modal_div.appendChild(fight_div);

  //SET TIMER
  function _attack(randomNb, char, enemy) {
    const myAttack = parameters.attacks[(Math.floor(Math.random() * parameters.attacks.length))];
    const attack_p = document.createElement('p');
    if(randomNb <= 0.5) {
      var opponent1 = char;
      var opponent2 = enemy;
      attack_p.style.color = "rgba(5, 89, 5, 1)";
    } else {
      var opponent1 = enemy;
      var opponent2 = char;
      attack_p.style.color = "red";
    }
    attack_p.innerHTML = `${opponent1.name} : ${myAttack.lib}`;
    fight_div.appendChild(attack_p);
    opponent2.life -= myAttack.damage;
    opponent2.life = opponent2.life < 0 ? 0 : opponent2.life;

    // update life
    if(randomNb <= 0.5) {
      var life_div = enemy_div.querySelector('.modalLife');
      life_div.style.width = opponent2.life + 'px';
    } else {
      var life_div = char_div.querySelector('.modalLife');
      life_div.style.width = opponent2.life + 'px';
    }

    // if dead
    if(opponent2.life <= 0) {
      const winner_p = document.createElement('p');
      winner_p.innerHTML = `${opponent1.name} est victorieux !`;
      winner_p.style.fontWeight = "bold";
      winner_p.style.textAlign = "center";
      fight_div.appendChild(winner_p);
      clearInterval(mySetTimeInterval);
    }
  }

  var mySetTimeInterval = setInterval(function() {_attack(Math.random(),char,enemy)}, 2000);
  intervals.push(mySetTimeInterval);
  }

function _overlay(id) {
  const overlay_div = document.getElementById("overlay");
  const modal_div = document.getElementById("modal");

  if(overlay_div.style.display == "block") {
    overlay_div.style.display = "none";
    modal_div.style.display = "none";
  } else {
    overlay_div.style.display = "block";
    modal_div.style.display = "block";
  }
  
  //console.log(id)
  playAudio();
  // if cancel button we quit
  if(id == undefined) {
    // clear data
    var headers_div = document.getElementById("headers_div");
    var fight_div = document.getElementById("fight_div");
    headers_div.remove();
    fight_div.remove();
    intervals.forEach(clearInterval);
     return
  }
  // else we fight
  playFight(id);
  
}


// ------ MAIN -------
  // create all blocks from characters
characters.forEach((char,i) => {createBlock(char,i)});

var allBlocks = document.querySelectorAll('.block');
window.addEventListener('click', function() {  
  for(var j=0; j<allBlocks.length; j++) {
  if(allBlocks[j].children[4].style.display == 'flex') {
    allBlocks[j].children[4].style.display = 'none';
  }}
})
document.querySelector('.cross').addEventListener('click', function () {
  _overlay()
});





//----- GOOGLE TABLE IN OVERLAY
google.charts.load('current', { 'packages': ['corechart', 'table'], 'language': 'fr' });
google.charts.setOnLoadCallback(loadConfiguration);

function _reignSelect(tab) {
  var code = `<select class="selectForm">`;
  for (var i=0 ; i<tab.length ; i++) {
    code += `<option>${tab[i].date[0]} - ${tab[i].date[1]} : ${tab[i].title}</option>`;
  }
  code += `</select>`;
  return code;
}
function _familyOptGroup(tag, tab) {
  const filteredTab = tab.filter((el) => (el.role === tag));
  var code = ``;
  if(filteredTab.length > 0) {
    code += `<optgroup label="${tag}">`;
    filteredTab.forEach((el) => (code += `<option>${el.name}</option>`));
    code += `</optgroup>`;
  }
  return code;
}
function _familySelect(tab) {
  var code = `<select class="selectForm">`;
    code += _familyOptGroup('father', tab);
    code += _familyOptGroup('mother', tab);
    code += _familyOptGroup('sibling', tab);
    code += _familyOptGroup('spouse', tab);
    code += _familyOptGroup('issue', tab);
  code += `</select>`;
  return code;
}
function _codeCrownReturn(el) {
  if(el.title.id == 'king') {
    var info = "";
    for (var i=0 ; i<el.reignPeriod.length ; i++) {
      if(i>0) {info += `&#013;`;}
      info += el.reignPeriod[i].title;
    }
    return `<div title="${info}" class="crown"></div>`;
  } else {
    return ``;
  }
}
function loadConfiguration() {
  //_initializeScale();

  var tableOptions = {
      sort: 'enable',
      sortAscending: true,
      sortColumn: 2, // sort by livePeriod
      allowHtml: true,
      showRowNumber: true,
      width: '100%',
      cssClassNames: { headerRow: 'headerRowCss', tableRow: 'tableRowCss', rowNumberCell: 'rowNumberCellCss' },
  }

  var dt = [];
  dt.push(['', 'Name', 'Live period', 'Age', 'Reign', 'family', 'Dynasty', 'Religion']);

  characters.forEach(el => {
    var col1 = { v:  ' ', f: _codeCrownReturn(el), p: { style: `text-align:left;width: 30px;`}};
    var col2 = { v:  el.name, f: el.name, p: { style: `text-align:left;width: 200px;`}};
    var col3 = { v:  el.livePeriod[0], f: `${el.livePeriod[0]} - ${el.livePeriod[1]}`, p: { style: `text-align:left;width: 75px;`}};
    var col4 = { v:  el.age, f: el.age, p: { style: `text-align:left;width: 50px;`}};
    var col5 = { v:  '', f: _reignSelect(el.reignPeriod), p: { style: `text-align:left;width: 200px;`}};
    var col6 = { v:  '', f: _familySelect(el.family), p: { style: `text-align:left;width: 150px;`}};
    var col7 = { v:  el.dynasty.label, f: el.dynasty.label, p: { style: `text-align:left;width: 100px;`}};
    var col8 = { v:  el.religion.label, f: el.religion.label, p: { style: `text-align:left;width: 100px;`}};
    dt.push([col1, col2, col3, col4, col5, col6, col7, col8]);
  })

  var dataTable = new google.visualization.arrayToDataTable(dt, false);

  var myTable = new google.visualization.Table(document.getElementById('mainTable_div'));
  myTable.draw(dataTable, tableOptions);

  // show livePeriod on a scale
  google.visualization.events.addListener(myTable, 'select', selectHandler);
  function selectHandler(e) {
    var selectedItem = myTable.getSelection();
    var reign_div = document.getElementById("reign");

    if(selectedItem.length == 1) {
      document.getElementById("scale").style.display = "none";
      reign_div.style.display = "none";
      var row = selectedItem[0].row;
      var el = allCharacters[row];
      var DoB = el.dateOfBirth;
      var DoD = el.dateOfDeath;
      reign_div.style.gridArea = `1 / ${DoB} / 2 / ${DoD}`;
    } else {
      document.getElementById("scale").style.display = "none";
      reign_div.style.display = "none";
    }
  }
}
/*
function _initializeScale() {
  var scale_div = document.getElementById("scale");
  for (var i=0 ; i<7 ; i++) {
    var index = i*250;
    
    if(index >= 0 && index < 10) {var offset = "-0.2rem";}
    if(index >= 10 && index < 100) {var offset = "-0.5rem";}
    if(index >= 100 && index < 1000) {var offset = "-0.7rem";}
    if(index >= 1000 && index < 10000) {var offset = "-1rem";}

    var scale_i = document.createElement("div");
    scale_i.style.gridArea = `1 / ${index} / 2 / ${index+1}`;
    scale_i.style.backgroundColor = "black";
    scale_i.style.position = "relative";
    


    var mark_i = document.createElement("div");
    mark_i.innerHTML = `${index}`;
    mark_i.style.fontSize = "1rem";
    mark_i.style.color = "black";
    mark_i.style.position = "absolute";
    mark_i.style.left = offset;
    mark_i.style.bottom = "-1.1rem";
  

    scale_i.appendChild(mark_i);
    scale_div.appendChild(scale_i);
  }
  document.getElementById("scale").style.display = "none";
}
*/

