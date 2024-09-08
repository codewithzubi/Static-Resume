document.addEventListener('DOMContentLoaded', function () {
    var educationBtn = document.getElementById('education-btn');
    var skillsBtn = document.getElementById('skills-btn');
    var experienceBtn = document.getElementById('experience-btn');
    var educationSection = document.getElementById('education');
    var skillsSection = document.getElementById('skills');
    var experienceSection = document.getElementById('experience');
    function showSection(section) {
        educationSection.classList.remove('active');
        skillsSection.classList.remove('active');
        experienceSection.classList.remove('active');
        section.classList.add('active');
    }
    educationBtn.addEventListener('click', function () { return showSection(educationSection); });
    skillsBtn.addEventListener('click', function () { return showSection(skillsSection); });
    experienceBtn.addEventListener('click', function () { return showSection(experienceSection); });
});
