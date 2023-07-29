import { elementBuilder } from "./element-builder";
import salmon from './img/salmon.jpeg';

export function buildHome() {
    const homeContent = elementBuilder('div', ['home', 'info'], '');

    const heading = elementBuilder('h2', '', 'Our food.');

    const foodQuality = elementBuilder('p', '', 'This is some copy about the quality of the food, and from where it is sourced. Literally the best food in the world.')

    const salmonImage = elementBuilder('img', 'salmon', '');
    salmonImage.src = salmon;

    const aboutResaurant = elementBuilder('p', '', 'This is some copy about the restaurant itself. Something about the vibe maybe.');

    const openingHours = document.createElement('div');
    const openingHoursPElements = []
    const openingHoursContent = 
    ['Opening hours:',
     'Monday-Friday: 13:00 - 21:00',
     'Saturday-Sunday: 11:00 - 22:00'];
    for (let i = 0; i<openingHoursContent.length; i++) {
        openingHoursPElements[i] = elementBuilder('p', '', openingHoursContent[i])
        openingHours.appendChild(openingHoursPElements[i]);
    }
    homeContent.append(heading, foodQuality, salmonImage, aboutResaurant, openingHours);

    return homeContent;
}