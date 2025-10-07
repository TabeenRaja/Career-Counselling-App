function searchCareers() {
    const searchInput = document.getElementById("searchInput");
    const items = document.querySelectorAll(".careerbox");
    const noResults = document.getElementById("noResults");
    const searchValue = (searchInput.value || "").trim().toLowerCase();

    let found = false;

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (searchValue === "" || text.includes(searchValue)) {
            item.style.display = "block";
            found = true;
        } else {
            item.style.display = "none";
        }
    });

    // Show "No results" if nothing found
    if (!found && searchValue !== "") {
        noResults.style.display = "block";
        noResults.textContent = "No results found.";
    } else {
        noResults.style.display = "none";
    }
}

document.getElementById("searchInput").addEventListener("input", searchCareers);
document.getElementById("exploreBtn").addEventListener("click", searchCareers);

document.getElementById("searchInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        searchCareers();
    }
});

        
let currentFilter = 'all';

const careers = Array.from(document.querySelectorAll('.careerbox')).map(box => {
    // grab the category text inside <p> (2nd child of .careertext)
    const category = box.querySelector('.careertext p').textContent.trim().toLowerCase();
    return { element: box, category };
});

function filterCareers(category, event) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    currentFilter = category;

    careers.forEach(career => {
        if (category === 'all' || career.category === category) {
            career.element.style.display = 'block';
        } else {
            career.element.style.display = 'none';
        }
    });
}


// ===== Modal Handling =====
const modal = document.getElementById('careerModal');
const closeBtn = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content');
const modalBody = document.getElementById('modalBody');

// Open modal on box click
document.querySelectorAll('.careerbox').forEach(box => {
    box.addEventListener('click', () => {
        const icon = box.querySelector('.careericon').textContent;
        const title = box.querySelector('h2').textContent;
        const category = box.querySelector('.careertext p').textContent;
        const description = box.querySelectorAll('.careertext p')[1].textContent;
        const salary = box.querySelector('.row b').textContent;
        const growth = box.querySelector('.row h5').textContent;

        // New fields from data attributes
        const skills = box.getAttribute('data-skills') || "Not specified";
        modalSkills.innerHTML = ""; // clear old skills
        if (skills !== "Not specified") {
            skills.split(",").forEach(skill => {
                const skillTag = document.createElement("span");
                skillTag.classList.add("skills"); // use your CSS class
                skillTag.textContent = skill.trim();
                modalSkills.appendChild(skillTag);
            });
        } else {
            modalSkills.textContent = "Not specified";
        }

        const education = box.getAttribute('data-education') || "Not specified";
        const outlook = box.getAttribute('data-outlook') || "Not specified";

        modalIcon.textContent = icon;
        modalTitle.textContent = title;
        modalCategory.textContent = category;
        modalDescription.textContent = description;
        modalSalary.textContent = salary;
        modalGrowth.textContent = growth;
        modalEducation.textContent = education;
        modalOutlook.textContent = outlook;

        // Re-bind close button
        modalContent.querySelector('.close').onclick = () => modal.style.display = "none";

        modal.style.display = "block";
    });
});

// Close modal when clicking outside
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


