"use strict";
  var _slayt = document.getElementsByClassName("slayt");
  var slaytSayisi = _slayt.length;
  var slaytNo = 0;
  var i = 0;

  slaytGoster(slaytNo);

  function sonrakiSlayt() {
    slaytNo++;
    slaytGoster(slaytNo);
  }

  function oncekiSlayt() {
    slaytNo--;
    slaytGoster(slaytNo);
  }

  function slaytGoster(slaytNumarasi) {
    slaytNo = slaytNumarasi;

    if (slaytNumarasi >= slaytSayisi) slaytNo = 0;

    if (slaytNumarasi < 0) slaytNo = slaytSayisi - 1;

    for (i = 0; i < slaytSayisi; i++) {
      _slayt[i].style.display = "none";
    }

    _slayt[slaytNo].style.display = "block";

  }
  const sliderContainer = document.getElementById('slider-container');



  ////////////////////////////////////////////////////////////////////////

  let currentScrollPosition=0;
  let scrollAmount=320;

  const sCont=document.querySelector(".storys-container");
  const hScroll=document.querySelector(".horizontal-scroll");
  const btnScrollLeft=document.querySelector("#btn-scrool-left");
  const btnScrollRight=document.querySelector("#btn-scrool-right");
  
  btnScrollLeft.style.opacity="0";

  let maxScroll=-sCont.offsetWidth + hScroll.offsetWidth;

  function scrollHorizontally(val){
    currentScrollPosition += (val * scrollAmount);
if(currentScrollPosition>=0){
  currentScrollPosition=0;
  btnScrollLeft.style.opacity="0";
}
else{
  btnScrollLeft.style.opacity="1";
}

if(currentScrollPosition <= maxScroll){
  currentScrollPosition=maxScroll;
  btnScrollRight.style.opacity="0";
}
else{
  btnScrollRight.style.opacity="1";
}
sCont.style.left=currentScrollPosition +"px";
  }