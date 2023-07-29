import { elementBuilder } from "./element-builder";
//elementBuilder(element, classList, textContent)

function buildContentContainer() {
    const contentContainer = elementBuilder('div', '', '');
    contentContainer.setAttribute('id', 'content');
    return contentContainer;
}


function buildHeader() {
    const header = elementBuilder('header', '', '');
    const title = elementBuilder('h1', '', 'Fancy Food.');
    header.appendChild(title);
    return header;
}

function buildNav() {
    const buttons = [
        {name: 'Home', cssClass: 'home'},
        {name: 'Menu', cssClass: 'menu'},
        {name: 'Contact', cssClass: 'contact'}
    ];
    const navBar = elementBuilder('div', 'nav', '');

    function buildButton(textContent, cssClass) {
        const button = elementBuilder('button', cssClass, textContent);
        return button;
    }

    buttons.forEach(button => {
        navBar.appendChild(buildButton(button.name, button.cssClass));
    });
    return navBar;
}

function buildFooter() {
    const footer = elementBuilder('footer', '', 'Created by Guy Foster.')
    return footer;
}

export function buildPage() {
    const mainContainer = document.querySelector('#mainContainer');
    mainContainer.append(buildHeader(), buildNav(), buildContentContainer(), buildFooter());
}