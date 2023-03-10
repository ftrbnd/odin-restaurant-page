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

    const form = document.createElement('form');
    form.classList.add('feedback');
    form.action = 'https://example.com';
    form.method = 'post';

    const feedbackHeader = document.createElement('h2');
    feedbackHeader.textContent = 'Feedback';

    const inputsDiv = document.createElement('div');
    inputsDiv.classList.add('inputs');

    const nameDiv = document.createElement('div');
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name';
    nameLabel.for = 'name';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.required = true;
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);

    const emailDiv = document.createElement('div');
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email';
    emailLabel.for = 'email';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.required = true;
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);

    const commentDiv = document.createElement('div');
    const commentLabel = document.createElement('label');
    commentLabel.textContent = 'Comment';
    commentLabel.for = 'comment';
    const commentInput = document.createElement('textarea');
    commentInput.rows = '25';
    commentInput.cols = '50';
    commentInput.style.resize = 'none';
    commentInput.id = 'comment';
    commentInput.required = true;
    commentDiv.appendChild(commentLabel);
    commentDiv.appendChild(commentInput);

    const formButtonSubmit = document.createElement('button');
    formButtonSubmit.type = 'submit';
    formButtonSubmit.textContent = 'Submit';
    formButtonSubmit.id = 'submit';

    inputsDiv.appendChild(nameDiv);
    inputsDiv.appendChild(emailDiv);
    inputsDiv.appendChild(commentDiv);
    inputsDiv.appendChild(formButtonSubmit);

    form.appendChild(feedbackHeader);
    form.appendChild(inputsDiv);
    feedback.appendChild(form);

    const cards = [hours, phoneEmail, address, feedback];
    for (const card of cards) {
        card.classList.add('card');
        cardContainer.appendChild(card);
    }

    content.appendChild(header);
    content.appendChild(cardContainer);
}