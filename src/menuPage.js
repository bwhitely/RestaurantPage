import './style.css'

export function menuComponent() {
    // menu div
    // header div
    //     header <h1>
    // subheading container div
    //     subheading div
    //          subheading <h3>
    // menu item container div
    //     menu item div
    //          menu item <h5> header
    //          menu item <p> descrip
    //          menu item <p> price

    // menu div
    const element = document.createElement('div')
    element.classList.add("menu")
    // header div
    const menuDiv = document.createElement('div');
    // header h1
    const menuHeader = document.createElement('h1')
    menuHeader.classList.add("menu-header")
    menuHeader.innerHTML = "Menu"
    menuDiv.appendChild(menuHeader)
    element.appendChild(menuDiv)
    // subheading container div
    const beveragesHeaderContainer = document.createElement('div')
    beveragesHeaderContainer.classList.add("subheading-container")
    // subheading div
    const beveragesHeaderDiv = document.createElement('div')
    beveragesHeaderDiv.classList.add("subheading")
    // subheading
    const beveragesHeader = document.createElement('h3')
    beveragesHeader.innerHTML = "Beverages"
    beveragesHeader.classList.add("subheading-header")
    // append beverages
    beveragesHeaderDiv.appendChild(beveragesHeader)
    beveragesHeaderContainer.appendChild(beveragesHeaderDiv)

    element.appendChild(beveragesHeaderContainer)

    element.appendChild(menuItem("Drink 1", "Cold Drink", "$2"))
    element.appendChild(menuItem("Drink 2", "Hot Drink", "$5"))

    const foodHeaderContainer = document.createElement('div')
    foodHeaderContainer.classList.add("subheading-container")

    const foodHeaderDiv = document.createElement('div')
    foodHeaderDiv.classList.add("subheading")

    const foodHeader = document.createElement('h3')
    foodHeader.innerHTML = "Food"
    foodHeader.classList.add("subheading-header")

    foodHeaderDiv.appendChild(foodHeader)
    foodHeaderContainer.appendChild(foodHeaderDiv)

    element.appendChild(foodHeaderContainer)

    element.appendChild(menuItem("Food 1", "Toast", "$10"))
    element.appendChild(menuItem("Food 2", "Eggs", "45"))

    return element;

}

export function menuItem(header, description, price) {
    const div = document.createElement('div');
    div.classList.add("menu-item-container")

    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item")
    const menuHeader = document.createElement('h5')
    menuHeader.classList.add("menu-item-header")
    menuHeader.innerHTML = header;
    const menuDescription = document.createElement('p')
    menuDescription.classList.add("menu-item-description")
    menuDescription.innerHTML = description;
    const menuPrice = document.createElement('p')
    menuPrice.classList.add("menu-item-price")
    menuPrice.innerHTML = price;

    menuItem.appendChild(menuHeader)
    menuItem.appendChild(menuDescription)
    menuItem.appendChild(menuPrice)
    div.appendChild(menuItem)

    return div;
}