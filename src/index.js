import './style.css'
import Icon from './logo.png'
import { titleComponent, iconComponent, blurbComponent, navComponent } from './homePage.js'
import { contactComponent, contactsComponent } from './contactPage.js'

window.onload = function () {
    const content = document.getElementById("content");
    content.appendChild(navComponent())
    loadHomePage();

    const home = document.getElementById("home").addEventListener('click', function () {
        changePage("home")
    })
    const contact = document.getElementById("contact").addEventListener('click', function () {
        changePage("contact")
    })
    const menu = document.getElementById("menu").addEventListener('click', function () {
        changePage("menu")
    })
}

function changePage(page) {
    while (document.getElementById("content").childNodes.length > 2) {
        document.getElementById("content").removeChild(document.getElementById("content").lastChild)
    }
    console.log(document.getElementById("content").childNodes.length)
    if (page === "home") {
        loadHomePage()
    }
    else if (page === "contact") {
        loadContactPage()
    }
    else if (page === "menu") {
        console.log(page)
    }
}

function loadHomePage() {
    const content = document.getElementById("content");

    content.appendChild(titleComponent())
    content.appendChild(iconComponent())
    content.appendChild(blurbComponent())
}

function loadContactPage() {
    const content = document.getElementById("content")

    content.appendChild(contactComponent())
    content.appendChild(contactsComponent("Real Name 1", "Head Chef", "0444 444 440", "realemail1@gmail.com"))
    content.appendChild(contactsComponent("Real Name 2", "Manager", "0444 444 441", "realemail2@gmail.com"))
    content.appendChild(contactsComponent("Real Name 3", "Front Of House", "0444 444 442", "realemail3@gmail.com"))
}

function loadMenuPage() {

}