//Nav img
var homebtnt = document.getElementById('homebtnt');
var plusbtnt = document.getElementById('plusbtnt');
var homebtnb = document.getElementById('homebtnb');
var plusbtnb = document.getElementById('plusbtnb');

var plus = document.getElementById('plus');
var plusnav = document.getElementById('plusnav');
var navhome = document.getElementById('homenav');

var plaatsbtn = document.getElementById('plaatsbtn');

plaatsbtn.addEventListener('click', plaatsen);
homebtnt.addEventListener('click', selecthomet);
plusbtnt.addEventListener('click', selectplust);
homebtnb.addEventListener('click', selecthomeb);
plusbtnb.addEventListener('click', selectplusb);

function plaatsen(){
    selecthomet();
    selecthomeb();
}

function selecthomet(){
    selectrecent();
    homebtnt.innerHTML = '<img class="icon active_home" src="img/icons/home_white.png" alt="">';
    plusbtnt.innerHTML = '<img class="icon active_home" src="img/icons/plusje_grey.png" alt="">';

    navhome.style.display="flex";
    plus.style.display="none";
    plusnav.style.display="none";
}

function selectplust(){
    homebtnt.innerHTML = '<img class="icon active_home" src="img/icons/home_grey.png" alt="">';
    plusbtnt.innerHTML = '<img class="icon active_home" src="img/icons/plusje_white.png" alt="">';

    recent.style.display="none";
    volgend.style.display="none";
    populair.style.display="none";

    navhome.style.display="none";
    plus.style.display="block";
    plusnav.style.display="flex";
}


function selecthomeb(){
    selectrecent();
    homebtnb.innerHTML = '<img class="icon active_home" src="img/icons/home_white.png" alt="">';
    plusbtnb.innerHTML = '<img class="icon active_home" src="img/icons/plusje_grey.png" alt="">';

    navhome.style.display="flex";
    plus.style.display="none";
    plusnav.style.display="none";
}

function selectplusb(){
    homebtnb.innerHTML = '<img class="icon active_home" src="img/icons/home_grey.png" alt="">';
    plusbtnb.innerHTML = '<img class="icon active_home" src="img/icons/plusje_white.png" alt="">';

    recent.style.display="none";
    volgend.style.display="none";
    populair.style.display="none";

    navhome.style.display="none";
    plus.style.display="block";
    plusnav.style.display="flex";
}

//Underline when clicked
var recenttext = document.getElementById('recenttext');
var volgendtext = document.getElementById('volgendtext');
var populairtext = document.getElementById('populairtext');

var recent = document.getElementById('recent');
var volgend = document.getElementById('volgend');
var populair = document.getElementById('populair');

recenttext.addEventListener('click', selectrecent);
volgendtext.addEventListener('click', selectvolgend);
populairtext.addEventListener('click', selectpopulair);

function selectrecent() {
    recenttext.classList.remove('active');
    volgendtext.classList.remove('active');
    populairtext.classList.remove('active');
 
    volgend.style.display="none";
    populair.style.display="none";
    plus.style.display="none";

    recent.style.display="block";
    recenttext.classList.add('active');
}

function selectvolgend() {
    recenttext.classList.remove('active');
    volgendtext.classList.remove('active');
    populairtext.classList.remove('active');

    recent.style.display="none";
    populair.style.display="none";
    plus.style.display="none";

    volgend.style.display="block";
    volgendtext.classList.add('active');

}

function selectpopulair() {
    recenttext.classList.remove('active');
    volgendtext.classList.remove('active');
    populairtext.classList.remove('active');

    
    recent.style.display="none";
    volgend.style.display="none";
    plus.style.display="none";

    populair.style.display="block";
    populairtext.classList.add('active');
}

//Terugknop
btnterug = document.getElementById('terugknop');
btnterug.addEventListener('click', () => {
    window.history.back();
        selecthomet();
        selecthomeb();
});

imgterug = document.getElementById('terugimg');
imgterug.addEventListener('click', () => {
    window.history.back();
    selecthomet();
    selecthomeb();
});

//VOLG-VOLGENDBUTTON
var btn_irritaties = document.getElementById('btn_irritaties');
var btn_irlmemes = document.getElementById('btn_irlmemes');
var btn_earworms = document.getElementById('btn_earworms');

var clicked1 = false;
function toggle1(){
    if(!clicked1){
        clicked1 = true;
        btn_irritaties.innerHTML = "Volgend";
        btn_irritaties.classList.remove('volgbutton');
        btn_irritaties.classList.add('volgendbutton');

    } else{
        clicked1 = false;
        btn_irritaties.innerHTML = "Volg";
        btn_irritaties.classList.remove('volgendbutton');
        btn_irritaties.classList.add('volgbutton');
    }
}

var clicked2 = true;
function toggle2(){
    if(!clicked2){
        clicked2 = true;
        btn_irlmemes.innerHTML = "Volgend";
        btn_irlmemes.classList.remove('volgbutton');
        btn_irlmemes.classList.add('volgendbutton');
    } else{
        clicked2 = false;
        btn_irlmemes.innerHTML = "Volg";
        btn_irlmemes.classList.remove('volgendbutton');
        btn_irlmemes.classList.add('volgbutton');
    }
}

var clicked3 = false;
function toggle3(){
    if(!clicked3){
        clicked3 = true;
        btn_earworms.innerHTML = "Volgend";
        btn_earworms.classList.remove('volgbutton');
        btn_earworms.classList.add('volgendbutton');

    } else{
        clicked3 = false;
        btn_earworms.innerHTML = "Volg";
        btn_earworms.classList.remove('volgendbutton');
        btn_earworms.classList.add('volgbutton');
    }
}

//#RECENT\\

//PLEISTERPOST
var upDriehoekPleister = document.getElementById('upDriehoekPleister');
var downDriehoekPleister = document.getElementById('downDriehoekPleister');
var np = document.getElementById('npPleister')

var raentlogoPleister = document.getElementById('raentlogoPleister');

upDriehoekPleister.onclick = function(){
    if (upDriehoekPleister.innerHTML == '<div class="driehoekup_red"></div>') {
        upDriehoekPleister.innerHTML = '<div class="driehoekup_grey"></div>';
        np.innerHTML = '<div id="npPleister"><p class="numberpost"></p></div>';
    } else {
        upDriehoekPleister.innerHTML = '<div class="driehoekup_red"></div>';
        downDriehoekPleister.innerHTML = '<div class="driehoekdown_grey"></div>';
        np.innerHTML = '<div id="npPleister"><p class="numberpost">1</p></div>';
    }
};


downDriehoekPleister.onclick = function(){
    if (downDriehoekPleister.innerHTML == '<div class="driehoekdown_fullgrey"></div>') {
        downDriehoekPleister.innerHTML = '<div class="driehoekdown_grey"></div>';
        np.innerHTML = '<div id="npPleister"><p class="numberpost"></p></div>';
    } else {
        upDriehoekPleister.innerHTML = '<div class="driehoekup_grey"></div>';
        downDriehoekPleister.innerHTML = '<div class="driehoekdown_fullgrey"></div>';
        np.innerHTML = '<div id="npPleister"><p class="numberpost"></p></div>';
    }
};

raentlogoPleister.onclick = function(){
    if (raentlogoPleister.innerHTML == '<div class="raentlogo_red"></div>') {
        raentlogoPleister.innerHTML = '<div class="raentlogo_grey"></div>';
        //Remove from fav
    } else {
        raentlogoPleister.innerHTML = '<div class="raentlogo_red"></div>';
        //Add to fav
    }
};

//STOELPOST
var npStoel = document.getElementById('npStoel');
var uDHStoel = document.getElementById('upDriehoekStoel');
var dDHStoel = document.getElementById('downDriehoekStoel');
var rlStoel = document.getElementById('raentlogoStoel');

uDHStoel.onclick = function(){
    if (uDHStoel.innerHTML == '<div class="driehoekup_red"></div>') {
        uDHStoel.innerHTML = '<div class="driehoekup_grey"></div>';
        npStoel.innerHTML = '<div id="npStoel"><p class="numberpost">3</p></div>';
    } else {
        uDHStoel.innerHTML = '<div class="driehoekup_red"></div>';
        dDHStoel.innerHTML = '<div class="driehoekdown_grey"></div>';
        npStoel.innerHTML = '<div id="npStoel"><p class="numberpost">4</p></div>';
    }
};


dDHStoel.onclick = function(){
    if (dDHStoel.innerHTML == '<div class="driehoekdown_fullgrey"></div>') {
        dDHStoel.innerHTML = '<div class="driehoekdown_grey"></div>';
        npStoel.innerHTML = '<div id="npStoel"><p class="numberpost">3</p></div>';
    } else {
        uDHStoel.innerHTML = '<div class="driehoekup_grey"></div>';
        dDHStoel.innerHTML = '<div class="driehoekdown_fullgrey"></div>';
        npStoel.innerHTML = '<div id="npStoel"><p class="numberpost">3</p></div>';
    }
};

rlStoel.onclick = function(){
    if (rlStoel.innerHTML == '<div class="raentlogo_red"></div>') {
        rlStoel.innerHTML = '<div class="raentlogo_grey"></div>';
    } else {
        rlStoel.innerHTML = '<div class="raentlogo_red"></div>';
    }
};

//HERPOST
var npHer = document.getElementById('npHer');
var uDHHer = document.getElementById('upDriehoekHer');
var dDHHer = document.getElementById('downDriehoekHer');
var rlHer = document.getElementById('raentlogoHer');

uDHHer.onclick = function(){
    if (uDHHer.innerHTML == '<div class="driehoekup_red"></div>') {
        uDHHer.innerHTML = '<div class="driehoekup_grey"></div>';
        npHer.innerHTML = '<div id="npHer"><p class="numberpost">2</p></div>';
    } else {
        uDHHer.innerHTML = '<div class="driehoekup_red"></div>';
        dDHHer.innerHTML = '<div class="driehoekdown_grey"></div>';
        npHer.innerHTML = '<div id="npHer"><p class="numberpost">3</p></div>';
    }
};


dDHHer.onclick = function(){
    if (dDHHer.innerHTML == '<div class="driehoekdown_fullgrey"></div>') {
        dDHHer.innerHTML = '<div class="driehoekdown_grey"></div>';
        npHer.innerHTML = '<div id="npHer"><p class="numberpost">2</p></div>';
    } else {
        uDHHer.innerHTML = '<div class="driehoekup_grey"></div>';
        dDHHer.innerHTML = '<div class="driehoekdown_fullgrey"></div>';
        npHer.innerHTML = '<div id="npHer"><p class="numberpost">2</p></div>';
    }
};

rlHer.onclick = function(){
    if (rlHer.innerHTML == '<div class="raentlogo_red"></div>') {
        rlHer.innerHTML = '<div class="raentlogo_grey"></div>';
    } else {
        rlHer.innerHTML = '<div class="raentlogo_red"></div>';
    }
};

//TOMPOST
var npTom = document.getElementById('npTom');
var uDHTom = document.getElementById('upDriehoekTom');
var dDHTom = document.getElementById('downDriehoekTom');
var rlTom = document.getElementById('raentlogoTom');

uDHTom.onclick = function(){
    if (uDHTom.innerHTML == '<div class="driehoekup_red"></div>') {
        uDHTom.innerHTML = '<div class="driehoekup_grey"></div>';
        npTom.innerHTML = '<div id="npTom"><p class="numberpost">5</p></div>';
    } else {
        uDHTom.innerHTML = '<div class="driehoekup_red"></div>';
        dDHTom.innerHTML = '<div class="driehoekdown_grey"></div>';
        npTom.innerHTML = '<div id="npTom"><p class="numberpost">6</p></div>';
    }
};


dDHTom.onclick = function(){
    if (dDHTom.innerHTML == '<div class="driehoekdown_fullgrey"></div>') {
        dDHTom.innerHTML = '<div class="driehoekdown_grey"></div>';
        npTom.innerHTML = '<div id="npTom"><p class="numberpost">5</p></div>';
    } else {
        uDHTom.innerHTML = '<div class="driehoekup_grey"></div>';
        dDHTom.innerHTML = '<div class="driehoekdown_fullgrey"></div>';
        npTom.innerHTML = '<div id="npTom"><p class="numberpost">5</p></div>';
    }
};

rlTom.onclick = function(){
    if (rlTom.innerHTML == '<div class="raentlogo_red"></div>') {
        rlTom.innerHTML = '<div class="raentlogo_grey"></div>';
    } else {
        rlTom.innerHTML = '<div class="raentlogo_red"></div>';
    }
};

//PENLEEGPOST
var npPenLeeg = document.getElementById('npPenLeeg');
var uDHPenLeeg = document.getElementById('upDriehoekPenLeeg');
var dDHPenLeeg = document.getElementById('downDriehoekPenLeeg');
var rlPenLeeg = document.getElementById('raentlogoPenLeeg');

uDHPenLeeg.onclick = function(){
    if (uDHPenLeeg.innerHTML == '<div class="driehoekup_red"></div>') {
        uDHPenLeeg.innerHTML = '<div class="driehoekup_grey"></div>';
        npPenLeeg.innerHTML = '<div id="npPenLeeg"><p class="numberpost">45</p></div>';
    } else {
        uDHPenLeeg.innerHTML = '<div class="driehoekup_red"></div>';
        dDHPenLeeg.innerHTML = '<div class="driehoekdown_grey"></div>';
        npPenLeeg.innerHTML = '<div id="npPenLeeg"><p class="numberpost">46</p></div>';
    }
};


dDHPenLeeg.onclick = function(){
    if (dDHPenLeeg.innerHTML == '<div class="driehoekdown_fullgrey"></div>') {
        dDHPenLeeg.innerHTML = '<div class="driehoekdown_grey"></div>';
        npPenLeeg.innerHTML = '<div id="npPenLeeg"><p class="numberpost">45</p></div>';
    } else {
        uDHPenLeeg.innerHTML = '<div class="driehoekup_grey"></div>';
        dDHPenLeeg.innerHTML = '<div class="driehoekdown_fullgrey"></div>';
        npPenLeeg.innerHTML = '<div id="npPenLeeg"><p class="numberpost">45</p></div>';
    }
};

rlPenLeeg.onclick = function(){
    if (rlPenLeeg.innerHTML == '<div class="raentlogo_red"></div>') {
        rlPenLeeg.innerHTML = '<div class="raentlogo_grey"></div>';
    } else {
        rlPenLeeg.innerHTML = '<div class="raentlogo_red"></div>';
    }
};

//WINDOWCRASHPOST
var npWindowsCrash = document.getElementById('npWindowsCrash');
var uDHWindowsCrash = document.getElementById('upDriehoekWindowsCrash');
var dDHWindowsCrash = document.getElementById('downDriehoekWindowsCrash');
var rlWindowsCrash = document.getElementById('raentlogoWindowsCrash');

uDHWindowsCrash.onclick = function(){
    if (uDHWindowsCrash.innerHTML == '<div class="driehoekup_red"></div>') {
        uDHWindowsCrash.innerHTML = '<div class="driehoekup_grey"></div>';
        npWindowsCrash.innerHTML = '<div id="npWindowsCrash"><p class="numberpost">15</p></div>';
    } else {
        uDHWindowsCrash.innerHTML = '<div class="driehoekup_red"></div>';
        dDHWindowsCrash.innerHTML = '<div class="driehoekdown_grey"></div>';
        npWindowsCrash.innerHTML = '<div id="npWindowsCrash"><p class="numberpost">16</p></div>';
    }
};


dDHWindowsCrash.onclick = function(){
    if (dDHWindowsCrash.innerHTML == '<div class="driehoekdown_fullgrey"></div>') {
        dDHWindowsCrash.innerHTML = '<div class="driehoekdown_grey"></div>';
        npWindowsCrash.innerHTML = '<div id="npWindowsCrash"><p class="numberpost">15</p></div>';
    } else {
        uDHWindowsCrash.innerHTML = '<div class="driehoekup_grey"></div>';
        dDHWindowsCrash.innerHTML = '<div class="driehoekdown_fullgrey"></div>';
        npWindowsCrash.innerHTML = '<div id="npWindowsCrash"><p class="numberpost">15</p></div>';
    }
};

rlWindowsCrash.onclick = function(){
    if (rlWindowsCrash.innerHTML == '<div class="raentlogo_red"></div>') {
        rlWindowsCrash.innerHTML = '<div class="raentlogo_grey"></div>';
    } else {
        rlWindowsCrash.innerHTML = '<div class="raentlogo_red"></div>';
    }
};

//#VOLGEND\\

//BUSPOST
var npBus = document.getElementById('npBus');
var uDHBus = document.getElementById('upDriehoekBus');
var dDHBus = document.getElementById('downDriehoekBus');
var rlBus = document.getElementById('raentlogoBus');

uDHBus.onclick = function(){
    if (uDHBus.innerHTML == '<div class="driehoekup_red"></div>') {
        uDHBus.innerHTML = '<div class="driehoekup_grey"></div>';
        npBus.innerHTML = '<div id="npBus"><p class="numberpost">12</p></div>';
    } else {
        uDHBus.innerHTML = '<div class="driehoekup_red"></div>';
        dDHBus.innerHTML = '<div class="driehoekdown_grey"></div>';
        npBus.innerHTML = '<div id="npBus"><p class="numberpost">13</p></div>';
    }
};


dDHBus.onclick = function(){
    if (dDHBus.innerHTML == '<div class="driehoekdown_fullgrey"></div>') {
        dDHBus.innerHTML = '<div class="driehoekdown_grey"></div>';
        npBus.innerHTML = '<div id="npBus"><p class="numberpost">12</p></div>';
    } else {
        uDHBus.innerHTML = '<div class="driehoekup_grey"></div>';
        dDHBus.innerHTML = '<div class="driehoekdown_fullgrey"></div>';
        npBus.innerHTML = '<div id="npBus"><p class="numberpost">12</p></div>';
    }
};

rlBus.onclick = function(){
    if (rlBus.innerHTML == '<div class="raentlogo_red"></div>') {
        rlBus.innerHTML = '<div class="raentlogo_grey"></div>';
    } else {
        rlBus.innerHTML = '<div class="raentlogo_red"></div>';
    }
};


//ROMMELPOST
var npRommel = document.getElementById('npRommel');
var uDHRommel = document.getElementById('upDriehoekRommel');
var dDHRommel = document.getElementById('downDriehoekRommel');
var rlRommel = document.getElementById('raentlogoRommel');

uDHRommel.onclick = function(){
    if (uDHRommel.innerHTML == '<div class="driehoekup_red"></div>') {
        uDHRommel.innerHTML = '<div class="driehoekup_grey"></div>';
        npRommel.innerHTML = '<div id="npRommel"><p class="numberpost">10</p></div>';
    } else {
        uDHRommel.innerHTML = '<div class="driehoekup_red"></div>';
        dDHRommel.innerHTML = '<div class="driehoekdown_grey"></div>';
        npRommel.innerHTML = '<div id="npRommel"><p class="numberpost">11</p></div>';
    }
};


dDHRommel.onclick = function(){
    if (dDHRommel.innerHTML == '<div class="driehoekdown_fullgrey"></div>') {
        dDHRommel.innerHTML = '<div class="driehoekdown_grey"></div>';
        npRommel.innerHTML = '<div id="npRommel"><p class="numberpost">10</p></div>';
    } else {
        uDHRommel.innerHTML = '<div class="driehoekup_grey"></div>';
        dDHRommel.innerHTML = '<div class="driehoekdown_fullgrey"></div>';
        npRommel.innerHTML = '<div id="npRommel"><p class="numberpost">10</p></div>';
    }
};

rlRommel.onclick = function(){
    if (rlRommel.innerHTML == '<div class="raentlogo_red"></div>') {
        rlRommel.innerHTML = '<div class="raentlogo_grey"></div>';
    } else {
        rlRommel.innerHTML = '<div class="raentlogo_red"></div>';
    }
};

//HALLYGALLYPOST
var npHallygally = document.getElementById('npHallygally');
var uDHHallygally = document.getElementById('upDriehoekHallygally');
var dDHHallygally = document.getElementById('downDriehoekHallygally');
var rlHallygally = document.getElementById('raentlogoHallygally');

uDHHallygally.onclick = function(){
    if (uDHHallygally.innerHTML == '<div class="driehoekup_red"></div>') {
        uDHHallygally.innerHTML = '<div class="driehoekup_grey"></div>';
    } else {
        uDHHallygally.innerHTML = '<div class="driehoekup_red"></div>';
        dDHHallygally.innerHTML = '<div class="driehoekdown_grey"></div>';
    }
};


dDHHallygally.onclick = function(){
    if (dDHHallygally.innerHTML == '<div class="driehoekdown_fullgrey"></div>') {
        dDHHallygally.innerHTML = '<div class="driehoekdown_grey"></div>';
    } else {
        uDHHallygally.innerHTML = '<div class="driehoekup_grey"></div>';
        dDHHallygally.innerHTML = '<div class="driehoekdown_fullgrey"></div>';
    }
};

rlHallygally.onclick = function(){
    if (rlHallygally.innerHTML == '<div class="raentlogo_red"></div>') {
        rlHallygally.innerHTML = '<div class="raentlogo_grey"></div>';
    } else {
        rlHallygally.innerHTML = '<div class="raentlogo_red"></div>';
    }
};

//FRUITELLAPOST
var npFruitella = document.getElementById('npFruitella');
var uDHFruitella = document.getElementById('upDriehoekFruitella');
var dDHFruitella = document.getElementById('downDriehoekFruitella');
var rlFruitella = document.getElementById('raentlogoFruitella');

uDHFruitella.onclick = function(){
    if (uDHFruitella.innerHTML == '<div class="driehoekup_red"></div>') {
        uDHFruitella.innerHTML = '<div class="driehoekup_grey"></div>';
    } else {
        uDHFruitella.innerHTML = '<div class="driehoekup_red"></div>';
        dDHFruitella.innerHTML = '<div class="driehoekdown_grey"></div>';
    }
};


dDHFruitella.onclick = function(){
    if (dDHFruitella.innerHTML == '<div class="driehoekdown_fullgrey"></div>') {
        dDHFruitella.innerHTML = '<div class="driehoekdown_grey"></div>';
    } else {
        uDHFruitella.innerHTML = '<div class="driehoekup_grey"></div>';
        dDHFruitella.innerHTML = '<div class="driehoekdown_fullgrey"></div>';
    }
};

rlFruitella.onclick = function(){
    if (rlFruitella.innerHTML == '<div class="raentlogo_red"></div>') {
        rlFruitella.innerHTML = '<div class="raentlogo_grey"></div>';
    } else {
        rlFruitella.innerHTML = '<div class="raentlogo_red"></div>';
    }
};

//#POPULAIR\\
//SHANGCHIPOST
var npShangchi = document.getElementById('npShangchi');
var uDHShangchi = document.getElementById('upDriehoekShangchi');
var dDHShangchi = document.getElementById('downDriehoekShangchi');
var rlShangchi = document.getElementById('raentlogoShangchi');

uDHShangchi.onclick = function(){
    if (uDHShangchi.innerHTML == '<div class="driehoekup_red"></div>') {
        uDHShangchi.innerHTML = '<div class="driehoekup_grey"></div>';
    } else {
        uDHShangchi.innerHTML = '<div class="driehoekup_red"></div>';
        dDHShangchi.innerHTML = '<div class="driehoekdown_grey"></div>';
    }
};


dDHShangchi.onclick = function(){
    if (dDHShangchi.innerHTML == '<div class="driehoekdown_fullgrey"></div>') {
        dDHShangchi.innerHTML = '<div class="driehoekdown_grey"></div>';
    } else {
        uDHShangchi.innerHTML = '<div class="driehoekup_grey"></div>';
        dDHShangchi.innerHTML = '<div class="driehoekdown_fullgrey"></div>';
    }
};

rlShangchi.onclick = function(){
    if (rlShangchi.innerHTML == '<div class="raentlogo_red"></div>') {
        rlShangchi.innerHTML = '<div class="raentlogo_grey"></div>';
    } else {
        rlShangchi.innerHTML = '<div class="raentlogo_red"></div>';
    }
};

//RUMORSPOST
var npRumors = document.getElementById('npRumors');
var uDHRumors = document.getElementById('upDriehoekRumors');
var dDHRumors = document.getElementById('downDriehoekRumors');
var rlRumors = document.getElementById('raentlogoRumors');

uDHRumors.onclick = function(){
    if (uDHRumors.innerHTML == '<div class="driehoekup_red"></div>') {
        uDHRumors.innerHTML = '<div class="driehoekup_grey"></div>';
    } else {
        uDHRumors.innerHTML = '<div class="driehoekup_red"></div>';
        dDHRumors.innerHTML = '<div class="driehoekdown_grey"></div>';
    }
};


dDHRumors.onclick = function(){
    if (dDHRumors.innerHTML == '<div class="driehoekdown_fullgrey"></div>') {
        dDHRumors.innerHTML = '<div class="driehoekdown_grey"></div>';
    } else {
        uDHRumors.innerHTML = '<div class="driehoekup_grey"></div>';
        dDHRumors.innerHTML = '<div class="driehoekdown_fullgrey"></div>';
    }
};

rlRumors.onclick = function(){
    if (rlRumors.innerHTML == '<div class="raentlogo_red"></div>') {
        rlRumors.innerHTML = '<div class="raentlogo_grey"></div>';
    } else {
        rlRumors.innerHTML = '<div class="raentlogo_red"></div>';
    }
};

//MAHNAPOST
var npMahna = document.getElementById('npMahna');
var uDHMahna = document.getElementById('upDriehoekMahna');
var dDHMahna = document.getElementById('downDriehoekMahna');
var rlMahna = document.getElementById('raentlogoMahna');

uDHMahna.onclick = function(){
    if (uDHMahna.innerHTML == '<div class="driehoekup_red"></div>') {
        uDHMahna.innerHTML = '<div class="driehoekup_grey"></div>';
    } else {
        uDHMahna.innerHTML = '<div class="driehoekup_red"></div>';
        dDHMahna.innerHTML = '<div class="driehoekdown_grey"></div>';
    }
};


dDHMahna.onclick = function(){
    if (dDHMahna.innerHTML == '<div class="driehoekdown_fullgrey"></div>') {
        dDHMahna.innerHTML = '<div class="driehoekdown_grey"></div>';
    } else {
        uDHMahna.innerHTML = '<div class="driehoekup_grey"></div>';
        dDHMahna.innerHTML = '<div class="driehoekdown_fullgrey"></div>';
    }
};

rlMahna.onclick = function(){
    if (rlMahna.innerHTML == '<div class="raentlogo_red"></div>') {
        rlMahna.innerHTML = '<div class="raentlogo_grey"></div>';
    } else {
        rlMahna.innerHTML = '<div class="raentlogo_red"></div>';
    }
};

//FIETSPOST
var npFiets = document.getElementById('npFiets');
var uDHFiets = document.getElementById('upDriehoekFiets');
var dDHFiets = document.getElementById('downDriehoekFiets');
var rlFiets = document.getElementById('raentlogoFiets');

uDHFiets.onclick = function(){
    if (uDHFiets.innerHTML == '<div class="driehoekup_red"></div>') {
        uDHFiets.innerHTML = '<div class="driehoekup_grey"></div>';
    } else {
        uDHFiets.innerHTML = '<div class="driehoekup_red"></div>';
        dDHFiets.innerHTML = '<div class="driehoekdown_grey"></div>';
    }
};

dDHFiets.onclick = function(){
    if (dDHFiets.innerHTML == '<div class="driehoekdown_fullgrey"></div>') {
        dDHFiets.innerHTML = '<div class="driehoekdown_grey"></div>';
    } else {
        uDHFiets.innerHTML = '<div class="driehoekup_grey"></div>';
        dDHFiets.innerHTML = '<div class="driehoekdown_fullgrey"></div>';
    }
};

rlFiets.onclick = function(){
    if (rlFiets.innerHTML == '<div class="raentlogo_red"></div>') {
        rlFiets.innerHTML = '<div class="raentlogo_grey"></div>';
    } else {
        rlFiets.innerHTML = '<div class="raentlogo_red"></div>';
    }
};

//STEENGELDPOST
var npSteengeld = document.getElementById('npSteengeld');
var uDHSteengeld = document.getElementById('upDriehoekSteengeld');
var dDHSteengeld = document.getElementById('downDriehoekSteengeld');
var rlSteengeld = document.getElementById('raentlogoSteengeld');

uDHSteengeld.onclick = function(){
    if (uDHSteengeld.innerHTML == '<div class="driehoekup_red"></div>') {
        uDHSteengeld.innerHTML = '<div class="driehoekup_grey"></div>';
    } else {
        uDHSteengeld.innerHTML = '<div class="driehoekup_red"></div>';
        dDHSteengeld.innerHTML = '<div class="driehoekdown_grey"></div>';
    }
};


dDHSteengeld.onclick = function(){
    if (dDHSteengeld.innerHTML == '<div class="driehoekdown_fullgrey"></div>') {
        dDHSteengeld.innerHTML = '<div class="driehoekdown_grey"></div>';
    } else {
        uDHSteengeld.innerHTML = '<div class="driehoekup_grey"></div>';
        dDHSteengeld.innerHTML = '<div class="driehoekdown_fullgrey"></div>';
    }
};

rlSteengeld.onclick = function(){
    if (rlSteengeld.innerHTML == '<div class="raentlogo_red"></div>') {
        rlSteengeld.innerHTML = '<div class="raentlogo_grey"></div>';
    } else {
        rlSteengeld.innerHTML = '<div class="raentlogo_red"></div>';
    }
};
