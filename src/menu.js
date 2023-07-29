import { elementBuilder } from "./element-builder";
//elementBuilder(element, classList, textContent)

const menuBuilder = (name, price, description) => {
    return {name, price, description};
}
const starters = [
    menuBuilder('Soup of the day', 7, 'Probably tomato soup.'),
    menuBuilder('Spicy wings', 8, 'Chicken wings, buffalo sauce.'),
    menuBuilder('Garlic bread', 7, 'Garlic, bread.')
]
const mains = [
    menuBuilder('Pizza', 15, 'Tomato, mozzarella, spicy chicken.'),
    menuBuilder('Vegan lasagna', 16, 'Tasty lasagna with some vegan filling.'),
    menuBuilder('Calzone', 22, 'Basically the pizza but folded.')
]
const desserts = [
    menuBuilder('Chocolate cake', 9, 'Served with ice cream or cream.'),
    menuBuilder('Cheesecake', 8, 'Served with a caramel sauce.')
]

function menuItemDivBuilder(item) {
    const menuItem = elementBuilder('div', 'menuItem', '');
    const topRow = elementBuilder('div', 'topRow', '');
    const bottomRow = elementBuilder('div', 'bottomRow', item.description);
    
    // build topRow:
    const itemName = elementBuilder('h3', 'itemName', item.name);
    const spacer = document.createElement('span');
    const price = elementBuilder('h3', 'price', item.price);
    topRow.append(itemName, spacer, price);
    //
    menuItem.append(topRow, bottomRow);
    return menuItem;
}

export function buildMenu() {
    const menuContent = elementBuilder('div', ['menu', 'info'], '');
    const starterTitle = elementBuilder('h2', '', 'Starters');

    menuContent.appendChild(starterTitle);

    starters.forEach(starter => {
        const div = menuItemDivBuilder(starter);
        menuContent.appendChild(div);
    });
    
    const mainTitle = elementBuilder('h2', '', 'Mains');
    menuContent.appendChild(mainTitle);

    mains.forEach(main => {
        const div = menuItemDivBuilder(main);
        menuContent.appendChild(div);
    });

    const dessertTitle = elementBuilder('h2', '', 'Desserts');
    menuContent.appendChild(dessertTitle);

    desserts.forEach(dessert => {
        const div = menuItemDivBuilder(dessert);
        menuContent.appendChild(div);
    });

    return menuContent;
}
