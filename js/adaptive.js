document.addEventListener('DOMContentLoaded', function () {
  const heroBtnGroup = document.querySelector('.hero__btn-group');
  const heroBtnSentence = document.querySelector('.hero__btn--sentence');
  const heroBtnPortfolio = document.querySelector('.hero__btn--portfolio');
  const heroPresent = document.querySelector('.hero__present');
  const screenWidth1070 = window.matchMedia('(max-width: 1070px)');

  screenWidth1070.addEventListener('change', function (e) {
    if(e.matches) {
      heroBtnGroup.after(heroBtnSentence);
      heroPresent.after(heroBtnPortfolio);
    } else {
      heroBtnGroup.append(heroBtnSentence);
      heroBtnGroup.append(heroBtnPortfolio);
    }
  });

  if (document.documentElement.clientWidth < 1310) {
    heroBtnGroup.after(heroBtnSentence);
      heroPresent.after(heroBtnPortfolio);
  } else {
    heroBtnGroup.append(heroBtnSentence);
      heroBtnGroup.append(heroBtnPortfolio);
  }
		
});