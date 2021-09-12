import './style.css'

export function contactComponent() {
    const element = document.createElement('div')
    element.classList.add("contactHeader")

    const contactH1 = document.createElement('h1')
    contactH1.innerHTML = "Contact Us"
    element.appendChild(contactH1);

    return element;
}

export function contactsComponent(name, position, phone, email) {

    const element = document.createElement('div')
    element.classList.add("contact-content")

    const contact = document.createElement('div')
    contact.classList.add("contact")

    // div
    const contactElement = document.createElement('div');
    contactElement.classList.add('contact-item')
    // header
    const contacthHeader = document.createElement('h3')
    contacthHeader.innerHTML = name;
    // position
    const contactPosition = document.createElement('p')
    contactPosition.innerHTML = position;
    // phone number
    const contactPhone = document.createElement('p')
    contactPhone.innerHTML = phone;
    // email
    const contactEmail = document.createElement('p')
    contactEmail.innerHTML = email;
    // append
    contactElement.appendChild(contacthHeader)
    contactElement.appendChild(contactPosition)
    contactElement.appendChild(contactPhone)
    contactElement.appendChild(contactEmail)

    contact.append(contactElement)
    element.appendChild(contact)

    return element;
}