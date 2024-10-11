const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  simulateTouch: true,
  loop: false,

  breakpoints: {

    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 15
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    }

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});



document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.product-card__select-item').forEach(item => {
    const choices = new Choices(item, {
      searchEnabled: false,
      itemSelectText: '',
    });
  })

  document.querySelectorAll('.reasons__btn').forEach(function (TabsReasons) {
    const eventList = ['click', 'mouseover'];
    eventList.forEach(function (event) {
      TabsReasons.addEventListener(event, function (event) {
        let el = this;
        el.classList.add('reasons__btn-active');
        document.querySelectorAll('.reasons__desc-item').forEach(item => {
          if (item != el) {
            item.classList.remove('reasons__desc-active');
          };
        })
        document.querySelectorAll('.reasons__btn').forEach(item => {
          if (item != el) {
            item.classList.remove('reasons__btn-active');
          }
        })
        const path = event.currentTarget.dataset.path;
        document.querySelectorAll('.reasons__desc-item').forEach(function (TabsReasonsContent) {
          TabsReasonsContent.classList.remove('reasons__desc-active');
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('reasons__desc-active');
      })
    })
  })

  document.querySelectorAll('.swiper .swiper-wrapper .swiper-slide .product-card ').forEach(function (SliderOverflow) {
    SliderOverflow.addEventListener('mouseover', function () {
      let el = this;
      el.closest('.swiper-overflow').classList.add('swiper-overflow--hovered');
    })
    SliderOverflow.addEventListener('mouseout', function () {
      let el = this;
      el.closest('.swiper-overflow').classList.remove('swiper-overflow--hovered');
    })
  })

})
