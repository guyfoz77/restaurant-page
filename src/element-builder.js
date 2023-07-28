export function elementBuilder(element, classList, textContent) {
    const xelement = document.createElement(element);
    if (classList != '') xelement.classList.add(...classList);
    if (textContent != '') xelement.textContent = textContent;
    return xelement;
}