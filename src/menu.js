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
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const topRow = document.createElement('div');
    topRow.classList.add('topRow');

    const bottomRow = document.createElement('div');
    bottomRow.classList.add('bottomRow');
    bottomRow.textContent = item.description;

    // build topRow:
    const itemName = document.createElement('h3');
    itemName.classList.add('itemName')
    itemName.textContent = item.name;
    const spacer = document.createElement('span');
    const price = document.createElement('h3');
    price.classList.add('price');
    price.textContent = item.price;
    topRow.append(itemName, spacer, price);
    //
    
    menuItem.append(topRow, bottomRow);
    return menuItem;
}

export function buildMenu() {
    const menuContent = document.createElement('div');
    homeContent.classList.add('menu', 'info'); 
}
