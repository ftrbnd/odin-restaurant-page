export default function loadPage() {
  console.log('Loading page...');

  const content = document.querySelector('div#content');

  const header = document.createElement('div');
  header.classList.add('header');

  const foodImage = document.createElement('img');
  foodImage.src = '../assets/food.jpeg';
  foodImage.alt = 'chicken tenders and fries';
  foodImage.id = 'food';

  const h1 = document.createElement('h1');
  h1.textContent = "Raising Cane's";

  header.appendChild(foodImage);
  header.appendChild(h1);

  const bio = document.createElement('p');
  bio.id = 'bio';
  bio.textContent = "A Restaurant that only serves Chicken Fingers? The business plan received the lowest grade in a college class because the professor said it wouldn’t work. When he tried to get loans, the banks said no, but Todd wasn’t giving up."

  content.appendChild(header);
  content.appendChild(bio);
}