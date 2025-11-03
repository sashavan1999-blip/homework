const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const clsBtn = document.querySelector('.modal__close-btn')
btn.addEventListener('click', () => {
    modal.classList.add('modal--open')
})
clsBtn.addEventListener('click', () => {
    modal.classList.remove('modal--open')
})
// дальше я прросил ии обьяснить как можно закрыть на крестик и на подложку. Да, она все написала, но я сидела, читал и вникал.(По другому я бы не справился  или потратил супер много времени)
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('modal--open');
    }
});
// Ескейп я добавил после того как посмотрел версию учителя
document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        modal.classList.remove('modal--open')
    }
})