const tabsContentInner = document.querySelectorAll('.tabs__content-list--nojs');
tabsContentInner.forEach((contentInner) => {
  contentInner.classList.remove('tabs__content-list--nojs');
});

document.querySelectorAll('.tabs__item').forEach((item) =>
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    const id = evt.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.tabs__item').forEach(
        (child) => child.classList.remove('tabs__item--active')
    );
    document.querySelectorAll('.tabs__content-list').forEach(
        (child) => child.classList.remove('tabs__content-list--active')
    );

    item.classList.add('tabs__item--active');

    document.getElementById(id).classList.add('tabs__content-list--active');
  })
);

const tabs = () => {
  document.querySelector('.tabs__item').click();
};
