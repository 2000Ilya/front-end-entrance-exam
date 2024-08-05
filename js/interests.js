import { cv } from "./constants/cv";

export function initInterests() {
    const interestsListElement = document.getElementById('interests-list')
    cv.interests.forEach(interest => {
        const interestsListItem = document.createElement("div");
        interestsListItem.className = "interests-info__list-item";
        interestsListItem.innerHTML = interest;

        interestsListElement.appendChild(interestsListItem);
    })
}