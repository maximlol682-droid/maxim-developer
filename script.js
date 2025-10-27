document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('mainContent');
  const picker = document.getElementById('languagePicker');
  const enBtn = document.getElementById('enBtn');
  const arBtn = document.getElementById('arBtn');

  function setLanguage(lang) {
    localStorage.setItem('siteLang', lang);
    document.querySelectorAll('[data-en]').forEach(el => {
      el.innerText = lang === 'en' ? el.dataset.en : el.dataset.ar;
    });
    main.classList.remove('hidden');
    picker.style.display = 'none'; // هذا يضمن إخفاء نافذة اختيار اللغة
  }

  // تحقق إذا سبق اختيار لغة
  const savedLang = localStorage.getItem('siteLang');
  if (savedLang) {
    setLanguage(savedLang);
  }

  enBtn.addEventListener('click', () => setLanguage('en'));
  arBtn.addEventListener('click', () => setLanguage('ar'));
});
