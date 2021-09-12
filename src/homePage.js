import './style.css'
import Icon from './logo.png'

export function titleComponent() {
    const element = document.createElement('div')
    element.classList.add("title");

    const title = document.createElement('h1');
    title.id = "title"
    title.innerHTML = "Benny's Greek"
    element.appendChild(title);

    return element;
}

export function iconComponent() {
    const element = document.createElement('div');
    element.classList.add("image")

    const imgElement = document.createElement('img');
    imgElement.classList.add('logo')
    imgElement.setAttribute('aria-placeholder', 'Restaurant Logo Image')

    const logo = new Image();
    imgElement.src = Icon;

    element.appendChild(imgElement);

    return element;
}

export function blurbComponent() {
    const element = document.createElement('div');
    element.classList.add('blurb')

    const paragraph = document.createElement('h3')
    paragraph.id = "blurb"
    paragraph.innerHTML = "Benny's Greek is the premier Greek restaurant in Adelaide.<br>Suitable for all ages."

    element.appendChild(paragraph)

    return element;
}

export function navComponent() {
    const element = document.createElement('div');
    element.classList.add("navbar");
    element.id = "navbar"

    const nav = document.createElement("ul")

    // nav elements
    const home = document.createElement("li")
    home.classList.add("navbar-item")
    const homeLink = document.createElement('a')
    home.id = "home"
    homeLink.innerHTML = "Home"
    home.appendChild(homeLink)

    const contact = document.createElement('li')
    contact.classList.add("navbar-item")
    const contactLink = document.createElement('a')
    contact.id = "contact"
    contactLink.innerHTML = "Contact"
    contact.appendChild(contactLink)

    const menu = document.createElement('li')
    menu.classList.add("navbar-item")
    const menuLink = document.createElement('a')
    menu.id = "menu"
    menuLink.innerHTML = "Menu"
    menu.appendChild(menuLink)

    nav.appendChild(home)
    nav.appendChild(contact)
    nav.append(menu)
    element.appendChild(nav)

    return element
}

export function hoursComponent() {
    const element = document.createElement('div')
    element.classList.add("hours-container")

    const hoursHeader = document.createElement('h3')
    hoursHeader.innerHTML = "Hours"
    hoursHeader.style.textAlign = 'center'

    const hoursList = document.createElement('ul')
    hoursList.classList.add("hours-list")

    const sunday = document.createElement("li")
    sunday.innerHTML = "Sunday : 8am - 8pm"
    const monday = document.createElement('li')
    monday.innerHTML = "Monday : 8am - 8pm"
    const tuesday = document.createElement('li')
    tuesday.innerHTML = "Tuesday : 8am - 8pm"
    const wednesday = document.createElement('li')
    wednesday.innerHTML = "Wednesday : 8am - 8pm"
    const thursday = document.createElement('li')
    thursday.innerHTML = "Thursday : 8am - 8pm"
    const friday = document.createElement('li')
    friday.innerHTML = "Friday : 8am - 8pm"
    const saturday = document.createElement('li')
    saturday.innerHTML = "Saturday : 8am - 8pm"

    hoursList.appendChild(sunday)
    hoursList.appendChild(monday)
    hoursList.appendChild(tuesday)
    hoursList.appendChild(wednesday)
    hoursList.appendChild(thursday)
    hoursList.appendChild(friday)
    hoursList.appendChild(saturday)

    element.appendChild(hoursHeader)
    element.appendChild(hoursList)

    return element;
}

export function locationComponent() {
    const element = document.createElement('div')
    element.classList.add("location-container")

    const header = document.createElement('h3')
    header.innerHTML = "Location"

    const location = document.createElement('p')
    location.innerHTML = "123 Real Street, Adelaide, 5069"

    element.appendChild(header)
    element.appendChild(location)

    return element;
}