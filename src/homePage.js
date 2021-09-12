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

    const paragraph = document.createElement('p')
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
    const homeLink = document.createElement('a')
    home.id = "home"
    homeLink.innerHTML = "Home"
    home.appendChild(homeLink)

    const contact = document.createElement('li')
    const contactLink = document.createElement('a')
    contact.id = "contact"
    contactLink.innerHTML = "Contact"
    contact.appendChild(contactLink)

    const menu = document.createElement('li')
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