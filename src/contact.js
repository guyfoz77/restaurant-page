import { elementBuilder } from "./element-builder";


export function buildContact() {
    const contactContent = elementBuilder('div', ['contact', 'info'], ''); 

    const location = elementBuilder('h2', '', 'Location.');

    const addressDiv = elementBuilder('div', 'address', '');
    const map = elementBuilder('img', 'map', '');
    map.src = '../src/img/map-gb56e65aa0_640.png';
    const address = elementBuilder('p', '', '');
    address.innerHTML = '123 Fake Street<br>Fake Town<br>Fakeshire<br>FA339NN';
    addressDiv.append(address, map);

    const contact = elementBuilder('h2', '', 'Contact.');
    const telLabel = elementBuilder('p', 'label', 'Tel: ');
    const phone = elementBuilder('a', 'phone', '01234 567899');
    phone.href = 'tel:01234567890';
    telLabel.append(phone);
    
    const emailLabel = elementBuilder('p', 'label', 'Email: ');
    const email = elementBuilder('a', 'email', 'fake@fakemail.com');
    email.href = 'mailto:fake@fakemail.com';
    emailLabel.append(email);
    


    contactContent.append(location, addressDiv, contact, telLabel, emailLabel);
    return contactContent;
  
}