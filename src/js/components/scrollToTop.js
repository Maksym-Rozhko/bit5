const btnScrollUp = document.querySelector('.scroll-top');
const topElem = document.querySelector('.main'); 

try {
  btnScrollUp.addEventListener('click', () => {
    topElem.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  //   jQuery("html, body").animate({
  //     scrollTop: "0"
  // }, 700);
  });
} catch (error) {}