export default function loadMenu() {
    const content = document.querySelector('div#content');

    const header = document.createElement('div');
    header.classList.add('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    header.appendChild(h1);

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu');

    const combos = [
        'The Box Combo',
        'The Caniac Combo',
        'The 3-Finger Combo',
        'The Sandwich Combo',
        'The Kids Combo'
    ];
    for (let i = 0; i < combos.length; i++) {
        const comboName = combos[i];

        const comboCard = document.createElement('div');
        comboCard.classList.add('menu-item');
        comboCard.id = i;

        const textCard = document.createElement('div');

        const h2 = document.createElement('h2');
        h2.textContent = comboName;
        textCard.appendChild(h2);

        let desc, calories;
        switch (i) {
            case 0:
                desc = "4 Chicken Fingers, Crinkle-Cut Fries, One Cane's Sauce, Texas Toast, Coleslaw, Regular Fountain Drink/Tea (22 oz.)";
                calories = '1250 - 1440'; 
                break;
            case 1:
                desc = "6 Chicken Fingers, Crinkle-Cut Fries, 2 Cane's Sauce, Texas Toast, Coleslaw, Large Fountain Drink/Tea (32 oz.)";
                calories = '1790 - 2040';
                break;
            case 2:
                desc = "3 Chicken Fingers, Crinkle-Cut Fries, One Cane's Sauce, Texas Toast, Coleslaw, Regular Fountain Drink/Tea (22 oz.)";
                calories = '1020 - 1210';
                break;
            case 3:
                desc = "3 Chicken Fingers, Cane's Sauce, Lettuce, Toasted Bun, Crinkle-Cut Fries, Regular Fountain Drink/Tea (22 oz.)";
                calories = '1020 - 1210';
                break;
            case 4:
                desc = "2 Chicken Fingers, Crinkle-Cut Fries, One Cane's Sauce, Kids Size Drink (12 oz.)";
                calories = '630 - 740';
                comboCard.style.gridRow = '3';
                comboCard.style.gridColumn = '1 / -1'
                break;
        }

        const descParagraph = document.createElement('p');
        descParagraph.textContent = desc;
        const calParagraph = document.createElement('p');
        calParagraph.textContent = `${calories} calories`;
        const menuImage = document.createElement('img');
        menuImage.alt = 'picture of menu item';
        menuImage.src = `../assets/${i}.avif`;

        textCard.appendChild(descParagraph);
        textCard.appendChild(calParagraph);

        comboCard.appendChild(textCard);
        comboCard.appendChild(menuImage);

        menuItems.appendChild(comboCard);
    }

    content.appendChild(header);
    content.appendChild(menuItems);
}