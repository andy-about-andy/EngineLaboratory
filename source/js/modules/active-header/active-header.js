let valueScroll = 0;
const defaultOffset = 50;

const header = document.querySelector('.main-header');
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('is-active');

const activeHeader = () => {
  window.addEventListener('scroll', () => {
    if (scrollPosition() > valueScroll && !containHide()) {
      // scroll down
      header.classList.add('is-active');
    } else if(scrollPosition() < valueScroll && containHide() && scrollPosition() < defaultOffset) {
      // scroll up
      header.classList.remove('is-active');
    }

    valueScroll = scrollPosition();
  })
}

export {activeHeader};
