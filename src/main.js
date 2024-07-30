document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const heightHero = heroSection.clientHeight;

        window.addEventListener('scroll', function(){
            const scrollPos = window.scrollY;

            if (scrollPos < heightHero){
                hideHeader();
            } else {
                showHeader();
            }
        });
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {
            const abaAlvo = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            hideAllTabs();

            if (tab) {
                tab.classList.add('shows__list--is-active');
            }

            removeBtnActive();
            btn.target.classList.add('shows__tabs__button--is-active');
        });
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openCloseAnswer);
    }
});

function openCloseAnswer(e) {
    const classe = 'faq__questions__item--is-open';
    const elementParent = e.target.parentNode;

    elementParent.classList.toggle(classe);
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function removeBtnActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideHeader() {
    const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
}

function showHeader() {
    const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
}
