window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav'),
    menuItem = document.querySelectorAll('.header__item'),
    burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('header__nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('burger_active');
            menu.classList.toggle('header__nav_active');
        })
    })
})