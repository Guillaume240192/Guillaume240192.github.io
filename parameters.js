const titleIcon = {
    king: "/images/crown.png",
  }
const dynastyIcon = {
    merovingian: "/images/axe.png",
  }
const religionIcon = {
    christianism: "/images/trueCross.png",
  }
const box1 = {
    borderWidth: "3px 4px 3px 5px",
    borderRadius: "95% 4% 92% 5%/4% 95% 6% 95%",
    rotationAngle: 2,
    face : {
        borderWidth: "3px 3px 4px 3px",
        borderRadius: "43% 57% 54% 46% / 58% 58% 42% 42%"
    }
}
const box2 = {
    borderWidth: "5px 3px 3px 5px",
    borderRadius: "4% 95% 6% 95%/95% 4% 92% 5%",
    rotationAngle: -2,
    face : {
        borderWidth: "2px 3px 4px 3px",
        borderRadius: "58% 42% 56% 44% / 52% 61% 39% 48%"
    }
}
const box3 = {
    borderWidth: "3px 3px 5px 5px",
    borderRadius: "95% 4% 97% 5%/4% 94% 3% 95%",
    rotationAngle: 2,
    face : {
        borderWidth: "3px 4px 4px 3px",
        borderRadius: "58% 42% 56% 44% / 47% 49% 51% 53%"
    }
}
const box4 = {
    borderWidth: "3px 5px 4px 3px",
    borderRadius: "94% 5% 96% 6%/2% 97% 5% 35%",
    rotationAngle: 2,
    face : {
        borderWidth: "4px 2px 3px 3px",
        borderRadius: "55% 45% 51% 49% / 47% 52% 48% 53%"
    }
}
const box5 = {
    borderWidth: "4px 4px 3px 3px",
    borderRadius: "95% 4% 92% 5%/4% 95% 6% 95%",
    rotationAngle: 2,
    face : {
        borderWidth: "2px 3px 2px 4px",
        borderRadius: "47% 53% 56% 44% / 56% 52% 48% 44%"
    }
}
const box6 = {
    borderWidth: "2px 3px 3px 4px",
    borderRadius: "5% 96% 5% 94%/96% 5% 91% 4%",
    rotationAngle: -2,
    face : {
        borderWidth: "4px 3px 2px 3px",
        borderRadius: "53% 47% 46% 54% / 50% 56% 44% 50%"
    }
}
const box7 = {
    borderWidth: "4px 3px 4px 5px",
    borderRadius: "3% 94% 5% 94%/94% 3% 91% 4%",
    rotationAngle: -2,
    face : {
        borderWidth: "2px 4px 4px 3px",
        borderRadius: "56% 44% 51% 49% / 43% 51% 49% 57%"
    }
}
const box8 = {
    borderWidth: "5px 4px 3px 3px",
    borderRadius: "94% 5% 93% 4%/5% 94% 5% 94%",
    rotationAngle: 2,
    face : {
        borderWidth: "4px 2px 3px 4px",
        borderRadius: "44% 56% 51% 49% / 58% 57% 43% 42%"
    }
}
const box9 = {
    borderWidth: "4px 3px 5px 4px",
    borderRadius: "4% 97% 4% 95%/95% 4% 92% 3%",
    rotationAngle: -2,
    face : {
        borderWidth: "3px 3px 4px 3px",
        borderRadius: "44% 56% 43% 57% / 58% 43% 57% 42%"
    }
}
const box10 = {
    borderWidth: "4px 5px 4px 3px",
    borderRadius: "4% 95% 4% 93%/95% 4% 90% 3%",
    rotationAngle: -2,
    face : {
        borderWidth: "3px 4px 3px 2px",
        borderRadius: "62% 38% 54% 46% / 52% 57% 43% 48%"
    }
}

const boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9,box10];
const attacks = [
    {lib:`Donne un grand coup de pied dans les roubignolles !`, damage: 40},
    {lib:`Attrape la barbe et tire son adversaire sur 150 m.`, damage: 15},
    {lib:`Assène un coup d'épée dans le thorax.`, damage: 70},
    {lib:`Transperce avec sa lance l'épaule.`, damage: 30},
    {lib:`Tranche la tête de son adversaire qui refaisait ses lacets.`, damage: 180},
    {lib:`Insulte son adversaire de petit sac à fiente !`, damage: 0},
    {lib:`Souhaite se rendre en tendant la main, mais son adversaire lui la coupe.`, damage: 70},
    {lib:`Danse autour de son adversaire pensant que ceci l'ensorcellerait.`, damage: 0},
    {lib:`Humilie son adversaire en urinant sur ses bottines.`, damage: 5},
    {lib:`Transperce avec sa lance la jambe.`, damage: 40},
    {lib:`Jette un caillou.`, damage: 2},
    {lib:`Donne un coup d'épée mais l'adversaire s'oppose avec son bouclier`, damage: 0},
    {lib:`Grille le visage`, damage: 3},
]

var parameters = {};
parameters['titleIcon'] = titleIcon;
parameters['dynastyIcon'] = dynastyIcon;
parameters['religionIcon'] = religionIcon;
parameters['boxes'] = boxes;
parameters['attacks'] = attacks;


export {parameters};
