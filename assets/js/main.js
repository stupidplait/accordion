'use strict';

const faq = document.querySelector('.faq');

faq.addEventListener('click', function (event) {
    const button = event.target.closest('.faq__button');
    if (!button) return;

    event.preventDefault();

    const item = button.closest('.faq__item');
    item.classList.toggle('active');
    const text = item.lastElementChild;

    if (item.classList.contains('active')) {
        text.style.height = `${text.scrollHeight}px`;
    } else {
        text.style.height = '';
    }
});