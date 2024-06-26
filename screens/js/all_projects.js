/*==================== button function to navigate to backpage(header)  ====================*/


document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("backButton");
    backButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.history.back();
    });
});



/*==================== project info - project container list  ====================*/
/*====================  for href of case study button - String Concatinated = (../)+(project.link) as it is inside the folder  ====================*/

async function loadProjects() {
    const response = await fetch('../screens/json/project_container_info_list.json');
    const data = await response.json();
    return data.projects;
}

function displayProjects(projects, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('portfolio__content', 'grid');

        projectElement.innerHTML = `
                    <img src="${project.image}" alt="${project.title}" class="portfolio__img">
                    <div class="portfolio__data">
                        <h3 class="portfolio__title">${project.title}</h3>
                        <p class="portfolio__description">${project.description}</p>
                        <a href="../${project.link}" class="button button--flex button--small portfolio_-button">
                            Case Study
                            <i class="uil uil-arrow-right button__icon"></i>
                        </a>
                    </div>
                `;

        container.appendChild(projectElement);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const projects = await loadProjects();
    displayProjects(projects, 'portfolioContainer');
});