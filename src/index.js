import loadHomePage from './home.js';
import loadContactInfo from './contact.js';
import loadMenu from './menu.js';

const tabs = document.querySelectorAll('.tab');
for (const tab of tabs) {
    tab.addEventListener('click', () => {
        resetPage();
        
        switch (tab.id) {
            case 'home':
                loadHomePage();
                break;
            case 'contact':
                loadContactInfo();
                break;
            case 'menu':
                loadMenu();
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