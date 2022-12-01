const hudba = document.getElementById("hudba");
const hudbadva = document.getElementById("hudbadva");
const hudbatri = document.getElementById("hudbatri");
const hudbafight = document.getElementById("hudbafight");
const hudbahell = document.getElementById("hudbahell");


const menunadpis = document.getElementById("menunadpis");
const sponsors = document.getElementById("sponsors");

const hrat = document.getElementById("hrat");
const pauza = document.getElementById("pauza");
const hratfight = document.getElementById("hratfight");
const pauzafight = document.getElementById("pauzafight");
const znacka = document.getElementById("znacka");
const znacka2 = document.getElementById("znacka2");
const pozadidva = document.getElementById("pozadidva");
const nadpis = document.getElementById("nadpis");
const cat = document.getElementById("cat");
const catdva = document.getElementById("catdva");
const hratdva = document.getElementById("hratdva");
const pauzadva = document.getElementById("pauzadva");
const sigmaznacka = document.getElementById("sigmaznacka");
const pozadi = document.getElementById("pozadi");
const dojocat = document.getElementById("dojocat");
const wu = document.getElementById("wu");
const dojopauza = document.getElementById("dojopauza");
const dojohrat = document.getElementById("dojohrat");
const sigmacat = document.getElementById("sigmacat");

const counterjedna = document.getElementById("counterjedna");
const counterdva = document.getElementById("counterdva");

const frank = document.getElementById("frank");
const cena = document.getElementById("cena");
const znackadojo = document.getElementById("znackadojo");
const john = document.getElementById("john");


const catfight = document.getElementById("catfight");
const cathero = document.getElementById("cathero");


const hp = document.getElementById("hp");
const hpstat = document.getElementById("hpstat");
const herohp = document.getElementById("herohp");
const hero = document.getElementById("hero");
const heroattack = document.getElementById("heroattack");

const stat = document.getElementById("stat");

const dmgstat = document.getElementById("dmgstat");
const dmg = document.getElementById("dmg");
const herodmg = document.getElementById("herodmg");

const fight = document.getElementById("fight");
const bronze = document.getElementById("bronze");
const zpet = document.getElementById("zpet");
const info2 = document.getElementById("info2");
const info = document.getElementById("info");
const infodmg = document.getElementById("infodmg");
const infodmg2 = document.getElementById("infodmg2");
const infodmg3 = document.getElementById("infodmg3");

const fatality = document.getElementById("fatality");


const portal = document.getElementById("portal");
const portal2 = document.getElementById("portal2");
const hrathell = document.getElementById("hrathell");
const pausehell = document.getElementById("pausehell");
const hellcat = document.getElementById("hellcat");
const grim = document.getElementById("grim");


let hpUp = 20;
let hpUpUp = 5;
let hpmain = 10;
let hpenemy = 10;
let hpenemyUp = 120;

let dmgUp = 0.5;
let dmgmain = 1;
let dmgenemy = 1;
let dmgenemyUp = 3;

let enemyKill = 0;
let enemyKillUp = 1;

let dojocoin = 0;
let dojocoinUp = 5;


sigmacat.onclick = () => {
  if (dojocoin >= 1){
    dojocoin -= 1;
    infodmg2.innerHTML = `Skill points: ${dojocoin}`
    infodmg.innerHTML = `Skill points: ${dojocoin}`
    infodmg3.innerHTML = `Skill points: ${dojocoin}`
    hpmain+= hpUp;
    counterjedna.innerHTML = `${hpmain} HP`;
    hpstat.innerHTML = hpmain +" HP";
  }

}

dojocat.onclick = () => {
  if (dojocoin >= 1){
  dojocoin -= 1;
  infodmg.innerHTML = `Skill points: ${dojocoin}`
  infodmg2.innerHTML = `Skill points: ${dojocoin}`
  infodmg3.innerHTML = `Skill points: ${dojocoin}`
  dmgmain+= dmgUp;
  counterdva.innerHTML = `${dmgmain} DMG`;
  dmgstat.innerHTML = dmgmain +" DMG";
}
  
}


menunadpis.onclick = () => {
   menunadpis.style.display = "none";
   cat.style.display = "block";
   nadpis.style.display = "block";
   znacka.style.display = "block";
   znacka2.style.display = "block";
   znackadva.style.display = "block";
   document.body.style.backgroundImage = "url(./res/css/forestos.jpg)"
   pauza.style.display = "block";
   hudba.play();
   hudba.volume = 0.3;
   info.style.display = "block";
   sponsors.style.display = "none";

}


hrat.onclick = () => {
   hrat.style.display = "none";
   pauza.style.display = "block";
   hudba.play();
   hudba.volume = 0.3 

}
pauza.onclick = () => {
    hrat.style.display = "block";
    pauza.style.display = "none";
    hudba.pause();
    hudba.currentTime = 0;
 }




 znacka.onclick = () => {
  pozadidva.style.display = "block";
  znacka.style.display = "none";
  znackadva.style.display = "none";
  nadpis.style.display = "none";
  cat.style.display = "none";
  hrat.style.display = "none";
  pauza.style.display = "none";
  pozadi.style.display = "none";
  znacka2.style.display = "none";
  hudba.pause();
  hudbadva.play();
  hudbadva.volume = 0.3;
  document.body.style.backgroundImage = "url(./res/css/sigma.jpg)"
  counterjedna.style.display = "block";
  infodmg2.style.display = "block";

   
}
   pauzadva.onclick = () => {
   hudbadva.pause();
   hudbadva.currentTime = 0;
   hratdva.style.display = "block";
   pauzadva.style.display = "none";
}
hratdva.onclick = () => {
   hudbadva.play();
   hudbadva.volume = 0.3;
   hratdva.style.display = "none";
   pauzadva.style.display = "block";
}

sigmaznacka.onclick = () => {
   hudbadva.pause();
   hudbadva.currentTime = 0;
znacka2.style.display = "block";
pozadidva.style.display = "none";
  znacka.style.display = "block";
  znackadva.style.display = "block";
  nadpis.style.display = "block";
  cat.style.display = "block";
  hrat.style.display = "none";
  hudba.play();
  hudba.volume = 0.3;
  hudba.currentTime = 0;
  pauza.style.display = "block";
  pozadi.style.display = "block";
  document.body.style.backgroundImage = "url(./res/css/forestos.jpg)"
  counterjedna.style.display = "none";
  info2.style.display = "none";
  infodmg2.style.display = "none";
  if(herohp.innerHTML <= 0){
    znackadva.style.display = "none";
  }
}

znacka2.onclick = () => {
   document.body.style.backgroundImage = "url(./res/css/dojo.jpg)"
   znacka.style.display = "none";
   znackadva.style.display = "none";
   nadpis.style.display = "none";
   cat.style.display = "none";
   hrat.style.display = "none";
   pauza.style.display = "none";
   pozadi.style.display = "none";
   znacka2.style.display = "none";
   hudba.pause();
   dojocat.style.display = "block";
   wu.style.display = "block";
   dojopauza.style.display = "block";
   hudbatri.play();
   hudbatri.volume = 0.3;
   counterdva.style.display = "block";
   frank.style.display = "block";
   cena.style.display = "block";
   znackadojo.style.display = "block";
   infodmg.style.display = "block";
   
}
dojopauza.onclick = () => {
  dojopauza.style.display = "none";
  dojohrat.style.display = "block";
  hudbatri.pause();
  hudbatri.currentTime = 0;

}
dojohrat.onclick = () => {
   dojopauza.style.display = "block";
   dojohrat.style.display = "none";
   hudbatri.play();
   hudbatri.volume = 0.3;
 }

 znackadojo.onclick = () => {
   dojocat.style.display = "none";
   wu.style.display = "none";
   dojopauza.style.display = "none";
   hudbatri.pause();
   hudbatri.currentTime = 0;
   counterdva.style.display = "none";
   frank.style.display = "none";
   cena.style.display = "none";
   znackadojo.style.display = "none";
   dojohrat.style.display = "none";
   dojopauza.style.display = "none";
   document.body.style.backgroundImage = "url(./res/css/forestos.jpg)"
   znacka.style.display = "block";
   znackadva.style.display = "block";
   nadpis.style.display = "block";
   cat.style.display = "block";
   hrat.style.display = "block";
   pauza.style.display = "block";
   pozadi.style.display = "block";
   znacka2.style.display = "block";
   hrat.style.display = "none";
   hudba.play();
   hudba.volume = 0.3;
   hudba.currentTime = 0;
   pauza.style.display = "block";
   infodmg.style.display = "none";
   if(herohp.innerHTML <= 0){
    znackadva.style.display = "none";
  }
   

 }

 cena.onmouseenter = () => {
   cena.style.display = "none";
   john.style.display = "block"
   
 }
 znackadojo.onmouseenter = () => {
   cena.style.display = "block";
   john.style.display = "none";
 }

portal.onclick = () => {
  portal.style.display = "none";
  document.body.style.backgroundImage = "url(./res/css/hell.webp)"
  znacka.style.display = "none";
   znackadva.style.display = "none";
   nadpis.style.display = "none";
   cat.style.display = "none";
   hrat.style.display = "none";
   pauza.style.display = "none";
   pozadi.style.display = "none";
   znacka2.style.display = "none";
   stat.style.display = "none";
   hudba.pause();
   hudba.currentTime = 0;
   portal2.style.display = "block";
   hudbahell.play();
   hudbahell.volume = 0.3;
   hudbahell.currentTime = 1.5;
   pausehell.style.display = "block";
   hellcat.style.display = "block";
   grim.style.display = "block";
}
pausehell.onclick = () => {
  pausehell.style.display = "none";
  hrathell.style.display = "block";
  hudbahell.pause();
  hudbahell.currentTime = 1.5;
}
hrathell.onclick = () => {
  pausehell.style.display = "block";
  hrathell.style.display = "none";
  hudbahell.play();
  hudbahell.volume = 0.3;
}

portal2.onclick = () => {
  portal.style.display = "block";
  document.body.style.backgroundImage = "url(./res/css/forestos.jpg)"
  znacka.style.display = "block";
   znackadva.style.display = "block";
   nadpis.style.display = "block";
   cat.style.display = "block";
   hrat.style.display = "block";
   pauza.style.display = "block";
   pozadi.style.display = "block";
   znacka2.style.display = "block";
   stat.style.display = "block";
   hudba.play();
  hudba.volume = 0.3;
  portal2.style.display = "none";
  stat.style.display = "none";
  catdva.style.display = "none";
  hrat.style.display = "none";
 portal.style.display = "none";
 hudbahell.pause();
  hudbahell.currentTime = 1.5;
  pausehell.style.display = "none";
  hrathell.style.display = "none";
  hellcat.style.display = "none";
  grim.style.display = "none";
}

 cat.onclick = () => {
  if(enemyKillUp >= 4){
    portal.style.display = "block";
    }
   cat.style.display = "none";
   catdva.style.display = "block";
   stat.style.display = "block";
   znacka2.style.display = "none";
   znacka.style.display = "none";
   znackadva.style.display = "none";
   info.style.top = "0px";
   infodmg3.style.display = "block";
   if(herohp.innerHTML <= 0){
    znackadva.style.display = "none";
  }
  
 }
 
 catdva.onclick = () => {
   cat.style.display = "block";
   catdva.style.display = "none";
   stat.style.display = "none";   
   znacka2.style.display = "block";
   znacka.style.display = "block";
   znackadva.style.display = "block";
   infodmg3.style.display = "none";
   if(herohp.innerHTML <= 0){
    znackadva.style.display = "none";
  }
  portal.style.display = "none";
 }


 znackadva.onclick = () => {
   znacka.style.display = "none";
   znackadva.style.display = "none";
   nadpis.style.display = "none";
   cat.style.display = "none";
   hrat.style.display = "none";
   pauza.style.display = "none";
   pozadi.style.display = "none";
   znacka2.style.display = "none";
   hudba.pause();
   hudba.currentTime = 0;
   document.body.style.backgroundImage = "url(./res/css/fightarena.webp)";
   catfight.style.display = "block";
   cathero.style.display = "block";
   hp.style.display = "block";
   herohp.style.display = "block";
  pauzafight.style.display = "block";
  hudbafight.play();
  hudbafight.volume = 0.3;
  fight.style.display = "block";
  herohp.innerHTML = hpmain;
  



  const enemyAttack = setInterval(() => {
    herohp.innerHTML -= dmgenemy;
    if(herohp.innerHTML <= 0){
      clearInterval(enemyAttack);
      fight.style.display = "none";
      bronze.style.display = "block";
      zpet.style.display = "block";

      }
    
    if(hp.innerHTML <= 0){
      clearInterval(enemyAttack);
      hpUp+=hpUpUp;
      dojocoin+=dojocoinUp;
      zpet.style.display = "block";
      info.innerHTML = `Enemies killed: ${enemyKillUp}`
      infodmg.innerHTML = `Skill points: ${dojocoin}`
      infodmg2.innerHTML = `Skill points: ${dojocoin}`
      infodmg3.innerHTML = `Skill points: ${dojocoin}`
      fatality.style.display = "block";
      fight.style.display = "none";
      catfight.style.display = "none";
      enemyKillUp++;
      dmgenemy++;
      

    }
  }, 250);
}

 pauzafight.onclick = () => {
   hudbafight.pause();
   hudbafight.currentTime = 0;
   hratfight.style.display = "block";
   pauzafight.style.display = "none";
 }
 hratfight.onclick = () => {
  hudbafight.play();
  hudbafight.volume = 0.3;
  pauzafight.style.display = "block";
  hratfight.style.display = "none";
}

fight.onmousedown = () => {
  if(hp.innerHTML > 0 && herohp.innerHTML > 0){
    hp.innerHTML-= dmgmain;
    cathero.style.left = "15%";
    hero.style.display = "none";
    heroattack.style.display = "block";
    
}

  }
fight.onmouseup = () => {
  cathero.style.left = "10%";
  hero.style.display = "block";
  heroattack.style.display = "none";  

}

zpet.onclick = () => {
  document.body.style.backgroundImage = "url(./res/css/forestos.jpg)"
   znacka.style.display = "block";
   znackadva.style.display = "block";
   nadpis.style.display = "block";
   cat.style.display = "block";
   hrat.style.display = "block";
   pauza.style.display = "block";
   pozadi.style.display = "block";
   znacka2.style.display = "block";
   hrat.style.display = "none";
   hudba.play();
   hudba.volume = 0.3;
   hudba.currentTime = 0;
   pauza.style.display = "block";
   hudbafight.pause();
   hudbafight.currentTime = 0;
   catfight.style.display = "none";
   cathero.style.display = "none";
   hp.style.display = "none";
   herohp.style.display = "none";
  pauzafight.style.display = "none";
  hratfight.style.display = "none";
  fight.style.display = "none";
  zpet.style.display = "none";
  bronze.style.display = "none";
  heroattack.style.display = "none";
  info.style.top = "0px";
  fatality.style.display = "none";
  hero.style.display = "block";

  herohp.innerHTML = hpmain;

  if(herohp.innerHTML <= 0){
    znackadva.style.display = "none";
    info2.style.display = "block";
  }
  hpenemy += hpenemyUp;
  hp.innerHTML = hpenemy;
hpenemyUp += hpenemyPlus

  dmgenemy+=dmgenemyUp;
  
}
