import '../scss/index.scss';

// TODO: there is an issue with babel. it wants to replace es2015 with 'env'. do something

const howManyYearsEl = document.getElementById('how-many-years');
const startDate = Date.parse('Feb 1, 2016');
const now = new Date().getTime();
const oneYear = 1000 * 60 * 60 * 24 * 365;
const years = (now - startDate) / oneYear;
howManyYearsEl.textContent = years.toFixed(1);

$(document).ready(() => {
  /* Animations on scroll */
  $('.js--wp-1').waypoint((direction) => {
    $('.js--wp-1').addClass('animated fadeInUp');
  }, {
    offset: '50%',
  });

  $('.js--wp-2').waypoint((direction) => {
    $('.js--wp-2').addClass('animated fadeIn');
  }, {
    offset: '50%',
  });

  $('.js--wp-3').waypoint((direction) => {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '50%',
  });

  $('.js--wp-4').waypoint((direction) => {
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '50%',
  });

      /* Navigation scroll */
      $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });
});

