document.addEventListener('DOMContentLoaded',()=>{
const main=document.getElementById('mainContent');
const picker=document.getElementById('languagePicker');
const enBtn=document.getElementById('enBtn');
const arBtn=document.getElementById('arBtn');

function setLanguage(lang){
  localStorage.setItem('siteLang',lang);
  document.querySelectorAll('[data-en]').forEach(el=>{
    el.innerText=lang==='en'?el.dataset.en:el.dataset.ar;
  });
}

function showMain(){
  picker.classList.add('hidden');
  main.classList.remove('hidden');
}

const savedLang=localStorage.getItem('siteLang');
if(savedLang){ setLanguage(savedLang); showMain(); }

enBtn.addEventListener('click',()=>{ setLanguage('en'); showMain(); });
arBtn.addEventListener('click',()=>{ setLanguage('ar'); showMain(); }); });