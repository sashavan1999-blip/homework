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
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
            },
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

    // 🔹 открыть первый таб при загрузке
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



})()