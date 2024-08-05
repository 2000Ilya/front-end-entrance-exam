import { cv } from "./constants/cv";

export function initContacts() {
    const contactsElement = document.getElementById('contacts');
    const email = document.createElement("p");
    email.className = "contacts-info__email";
    email.innerHTML = cv.contacts.email;

    contactsElement.appendChild(email);
}