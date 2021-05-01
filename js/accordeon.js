document.addEventListener('DOMContentLoaded', function () {

  let accordeonSectionAll = document.querySelectorAll('.js-section'),
						accordeonTitleAll = document.querySelectorAll('.accordeon__title'),
            accordeonFasAll = document.querySelectorAll('.accordeon__title>i');

  const accordeonActiveit = function () {
    [].forEach.call(accordeonSectionAll, function (item, index) {
      if (!index == 0) {
        item.querySelector('.js-content').style.maxHeight = '0px'
      } else if (index == 0) {
        item.querySelector('.js-content').style.maxHeight = item.querySelector('.js-content >*').clientHeight + 'px'
        item.classList.add('active');
      }

      item.addEventListener('click', function (event) {
        accordeonTitleAll.forEach((elem) => {
          if (event.target == elem) {
            let activeItem = item.classList.contains('active'),
              fas = item.querySelector('.accordeon__title>i');

            accordeonFasAll.forEach( (elem) => {
              if(elem.classList.contains('fa-chevron-down')) {
                elem.classList.remove('fa-chevron-down');
                elem.classList.add('fa-chevron-up');
              }
            });

            accordeonSectionAll.forEach(function (section) {
              section.querySelector('.js-content').style.maxHeight = '0px'
              if (section.classList.contains('active')) {
                section.classList.remove('active');
              }
            });

            if (activeItem) {
              this.classList.remove('active');
              this.querySelector('.js-content').style.maxHeight = '0px';
            } else {
              this.classList.add('active');
              this.querySelector('.js-content').style.maxHeight = item.querySelector('.js-content >*').clientHeight + 'px';
              fas.classList.remove('fa-chevron-up');
              fas.classList.add('fa-chevron-down');
            }
          }
          event.stopPropagation();
        })
      })
    })
  };
  accordeonActiveit();
})