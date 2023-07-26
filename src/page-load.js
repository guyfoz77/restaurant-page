function buildHeader() {
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = 'This Cool Restaurant';
    header.appendChild(title);
    return header;
}

function buildNav() {
    const buttons = [
        {name: 'Home', cssClass: 'home'},
        {name: 'Menu', cssClass: 'menu'},
        {name: 'Contact', cssClass: 'contact'}
    ];
    const navBar = document.createElement('div');
    navBar.classList.add('nav');

    function buildButton(textContent, cssClass) {
        const button = document.createElement('button');
        button.classList.add(cssClass);
        button.textContent = textContent;
        return button;
    }

    buttons.forEach(button => {
        navBar.appendChild(buildButton(button.name, button.cssClass));
    });
    return navBar;
}

function buildContentContainer() {
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'content');
    return contentContainer;
}

function buildFooter() {
    const footer = document.createElement('footer');
    footer.textContent = 'Created by Guy Foster';
    return footer;
}

const buildPage = () => {
    const mainContainer = document.querySelector('#mainContainer');
    const pageArray = 
    [buildHeader(),
     buildNav(),
     buildContentContainer(),
     buildFooter()
    ];
    pageArray.forEach(element => {
        mainContainer.appendChild(element);
    });
    console.log('yes');
}

export { buildPage };