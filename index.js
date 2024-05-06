import {characters} from "/characters.js";
import {parameters} from "/parameters.js";


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

  // BLOCKHEADER DIV
  const blockHeader = document.createElement('div');
  blockHeader.classList.add('blockHeader');

  // TITLE DIV
  const title = document.createElement('div');
  title.classList.add('title');
  title.style.backgroundImage = `url(${parameters.titleIcon[char.title.id]})`;

  // DYNASTY DIV
  const dynasty = document.createElement('div');
  dynasty.classList.add('dynasty');
  dynasty.style.backgroundImage = `url(${parameters.dynastyIcon[char.dynasty.id]})`;

  // RELIGION DIV
  const religion = document.createElement('div');
  religion.classList.add('religion');
  religion.style.backgroundImage = `url(${parameters.religionIcon[char.religion.id]})`;
  
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
  name.innerText = char.name;

  // LIVEPERIOD DIV
  const livePeriod = document.createElement('div');
  livePeriod.classList.add('livePeriod');
  livePeriod.innerText = `${char.livePeriod[0]} - ${char.livePeriod[1]}`;



  
  const container = document.querySelector('.container');
  blockHeader.appendChild(title);
  blockHeader.appendChild(dynasty);
  blockHeader.appendChild(religion);
  blockHeader.appendChild(age);
  block.appendChild(blockHeader);
  block.appendChild(face);
  block.appendChild(name);
  block.appendChild(livePeriod);
  container.appendChild(block);

  // inverse rotation for some divs
  const divs = document.querySelectorAll(`[data-id='${block.dataset.id}']`)[0].querySelectorAll("*:not(.name):not(.title):not(.dynasty):not(.religion)");
  divs.forEach((el) => {el.style.transform = `rotate(${-1*param.rotationAngle+'deg'})`;})
  //console.log(divs)
}

characters.forEach((char,i) => {createBlock(char,i)});















//-----  OVERLAY
function overlay() {
  const overlay_div = document.getElementById("overlay");
  const modal_div = document.getElementById("modal");

  if(overlay_div.style.display == "block") {
    overlay_div.style.display = "none";
    modal_div.style.display = "none";
  } else {
    overlay_div.style.display = "block";
    modal_div.style.display = "block";
  }
}
document.querySelectorAll('.block').forEach((el) => el.addEventListener('click', overlay));
document.getElementById("overlay").addEventListener('click', overlay);

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

