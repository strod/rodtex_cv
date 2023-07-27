const container = document.querySelector('.portfolio-container');
const projects = document.querySelectorAll('.project-card');

// Clone and append project cards to the left and right
for (const project of projects) {
    const cloneLeft = project.cloneNode(true);
    cloneLeft.classList.add('clone', 'left-clone');
    const cloneRight = project.cloneNode(true);
    cloneRight.classList.add('clone', 'right-clone');
    container.appendChild(cloneLeft);
    container.appendChild(cloneRight);
}

const cardWidth = projects[0].offsetWidth + 30; // Add margin for better spacing
const totalWidth = (projects.length + 2) * cardWidth;

container.style.width = `${totalWidth}px`;

// Initialize scroll position to center card
let scrollPosition = cardWidth;
container.scrollLeft = scrollPosition;

// Function to handle paddles (arrows) click event
function scrollCarousel(direction) {
    container.scrollLeft += direction * cardWidth;

    // Handle infinite scroll to the left
    if (container.scrollLeft <= 0) {
        container.scrollLeft = totalWidth - 2 * cardWidth;
    }

    // Handle infinite scroll to the right
    if (container.scrollLeft >= totalWidth - cardWidth) {
        container.scrollLeft = cardWidth;
    }
}

container.addEventListener('scroll', () => {
    scrollPosition = container.scrollLeft;

    // Update styles of project cards based on their position
    projects.forEach((project) => {
        const distanceFromCenter = Math.abs(
            project.getBoundingClientRect().left +
            project.offsetWidth / 2 -
            container.offsetWidth / 2
        );
        const scale = Math.max(1 - distanceFromCenter / container.offsetWidth, 0.8);
        const opacity = Math.max(1 - distanceFromCenter / container.offsetWidth, 0.5);

        project.style.transform = `scale(${scale})`;
        project.style.opacity = opacity;
    });
});