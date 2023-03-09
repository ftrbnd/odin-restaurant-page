export default function loadContactInfo() {
    const content = document.querySelector('div#content');

    const header = document.createElement('div');
    header.classList.add('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    header.appendChild(h1);

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cards');

    const hours = document.createElement('div');
    hours.id = 'hours';
    const supportHeader = document.createElement('h2');
    supportHeader.textContent = 'Support Hours';
    const supportContentWeekdays = document.createElement('p');
    supportContentWeekdays.textContent = "Monday - Friday: 8:30 AM - 9:00 PM CT";
    const supportContentWeekends = document.createElement('p');
    supportContentWeekends.textContent = "Saturday - Sunday: 10:00 AM - 7:00 PM CT";
    hours.appendChild(supportHeader);
    hours.appendChild(supportContentWeekdays);
    hours.appendChild(supportContentWeekends);

    const phoneEmail = document.createElement('div');
    phoneEmail.id = 'phone-email';
    const phoneEmailHeader = document.createElement('h2');
    phoneEmailHeader.textContent = 'Phone & Email';
    const phone = document.createElement('p');
    phone.textContent = "1-833-HICANES (442-2637)";
    const email = document.createElement('p');
    email.textContent = "CustomerFeedback@raisingcanes.com";
    phoneEmail.appendChild(phoneEmailHeader);
    phoneEmail.appendChild(phone);
    phoneEmail.appendChild(email);

    const address = document.createElement('div');
    address.id = 'address';
    const addressHeader = document.createElement('h2');
    addressHeader.textContent = 'Customer Relations';
    const addressContent = document.createElement('p');
    addressContent.textContent = "6800 Bishop Road Plano, TX 75024";
    address.appendChild(addressHeader);
    address.appendChild(addressContent);

    const feedback = document.createElement('div');
    feedback.id = 'feedback';
    const feedbackHeader = document.createElement('h2');
    feedbackHeader.textContent = 'Feedback';
    const form = document.createElement('form');
    form.classList.add('feedback');
    
    feedback.appendChild(feedbackHeader);
    feedback.appendChild(form);

    const cards = [hours, phoneEmail, address, feedback];
    for (const card of cards) {
        card.classList.add('card');
        cardContainer.appendChild(card);
    }

    content.appendChild(header);
    content.appendChild(cardContainer);
}