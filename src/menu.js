const menuItemBuilder = (name, price, description) => {
    return {name, price, description};
}

const menuItem = menuItemBuilder('cheese on toast', 22, 'melted cheese on toast');

export function buildMenu() {
    console.log(menuItem);
}
