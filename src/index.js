import loadHomePage from './home.js';
import loadMenu from './menu.js';
import loadContactInfo from './contact.js';

const tabs = document.querySelectorAll('.tab');
for (const tab of tabs) {
    tab.addEventListener('click', () => {
        resetPage();
        
        switch (tab.id) {
            case 'home':
                loadHomePage();
                break;
            case 'menu':
                loadMenu();
                break;
            case 'contact':
                loadContactInfo();
                break;
        }
    })
}

function resetPage() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

loadHomePage();