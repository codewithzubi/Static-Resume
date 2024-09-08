document.addEventListener('DOMContentLoaded', () => {
    const educationBtn = document.getElementById('education-btn') as HTMLButtonElement;
    const skillsBtn = document.getElementById('skills-btn') as HTMLButtonElement;
    const experienceBtn = document.getElementById('experience-btn') as HTMLButtonElement;

    const educationSection = document.getElementById('education') as HTMLElement;
    const skillsSection = document.getElementById('skills') as HTMLElement;
    const experienceSection = document.getElementById('experience') as HTMLElement;

    function showSection(section: HTMLElement) {
        educationSection.classList.remove('active');
        skillsSection.classList.remove('active');
        experienceSection.classList.remove('active');
        section.classList.add('active');
    }

    educationBtn.addEventListener('click', () => showSection(educationSection));
    skillsBtn.addEventListener('click', () => showSection(skillsSection));
    experienceBtn.addEventListener('click', () => showSection(experienceSection));
});
