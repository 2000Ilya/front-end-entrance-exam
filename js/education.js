import { cv } from "./constants/cv";

export function initEducation() {
    const educationListElement = document.getElementById('education-list');
    cv.education.map(eduItem => {
        const educationListItem = document.createElement("div");
        educationListItem.className = eduItem.isMain ? "education-info__list-item selected" : "education-info__list-item";

        const startYear = new Date(eduItem.startTime).getFullYear();
        const endYear = new Date(eduItem.endTime).getFullYear();
        if (startYear === endYear) {
            educationListItem.innerHTML = `<span class="education-info__period">${startYear}</span>`;
        } else {
            educationListItem.innerHTML = `<span class="education-info__period">${startYear} - ${endYear}</span>`;
        }

        const centralBlock = document.createElement("div");
        centralBlock.className = "education-info__central-block";

        const specialtyElement = document.createElement("span");
        specialtyElement.className = "education-info__specialty-name";
        specialtyElement.innerHTML = eduItem.name;

        centralBlock.appendChild(specialtyElement);

        const tagsListElement = document.createElement("div");
        tagsListElement.className = "education-info__tags-list";

        eduItem.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'education-info__tags-list-item';
            tagElement.innerHTML = `#${tag}`;

            tagsListElement.appendChild(tagElement);
        });

        centralBlock.appendChild(tagsListElement);

        educationListItem.appendChild(centralBlock);

        const companyElement = document.createElement('span');
        companyElement.className = "education-info__company";
        companyElement.innerHTML = eduItem.institute;

        educationListItem.appendChild(companyElement);

        educationListElement.appendChild(educationListItem);
    })
}