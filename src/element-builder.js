export function elementBuilder(element, xclass, textContent) {
    const element = document.createElement(element);
    if (xclass != '') element.classList.add(xclass);
    if (textContent != '') element.textContent = textContent;
    return element;
}