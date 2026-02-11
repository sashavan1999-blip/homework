(function () {
    // БУРГЕР===================
    document.addEventListener('click', burgerInit)
    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 1100) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    };



    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
            },
        },

        breakpoints: {
            900: {
                direction: 'vertical',
                slidesPerView: 1,
            }
        },

        on: {
            init: function () {
                updatePagination(this);
            },
            slideChange: function () {
                updatePagination(this);
            },
        },
    });

    function updatePagination(swiper) {
        const bullets = swiper.pagination.bullets;

        bullets.forEach((bullet, index) => {
            bullet.textContent =
                index === swiper.activeIndex ? index + 1 : '';
        });
    }









    document.addEventListener('DOMContentLoaded', () => {
        const tabLinks = document.querySelectorAll('.tab-controls__link');
        const tabContents = document.querySelectorAll('.tab-content');

        function hideAllTabs() {
            tabContents.forEach(tab => tab.classList.remove('tab-content__item--active'));
            tabLinks.forEach(link => link.classList.remove('tab-content__item--active'));
        }

        function showTab(id, activeLink) {
            const tab = document.querySelector(id);
            if (tab) tab.classList.add('tab-content__item--active');
            activeLink.classList.add('tab-content__item--active');
        }



        hideAllTabs();
        showTab(tabLinks[0].getAttribute('href'), tabLinks[0]);

        tabLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                hideAllTabs();
                showTab(link.getAttribute('href'), link);
            });
        });
    });

    const pop = document.querySelector(".get-start")
    const overlay = document.querySelector('.get-start__overlay')
    const form = document.querySelector('.get-start__form')
    document.addEventListener("click", getPopUp)
    function getPopUp(e) {
        const getClose = e.target.closest('.close')
        const control = e.target.closest('.header__title-control')



        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }

        if (control) {
            pop.classList.add('get-start--is-open');
        }

        if (getClose) {
            pop.classList.remove('get-start--is-open');
        }
        if (e.target === overlay) {
            pop.classList.remove('get-start--is-open');
        }

    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const inputName = document.querySelector('.name-input').value.trim()
        const inputPhone = document.querySelector('.contact-input').value.trim()

        const user = {
            name: inputName,
            phone: inputPhone
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        users.push(user);

        localStorage.setItem('users', JSON.stringify(users))

        form.reset()
        pop.classList.remove('get-start--is-open')

    }
    )



})()