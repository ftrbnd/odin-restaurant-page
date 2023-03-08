export default function loadMenu() {
    const content = document.querySelector('div#content');

    const header = document.createElement('div');
    header.classList.add('header');

    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    header.appendChild(h1);



    content.appendChild(header);
}