// ==== LOAD JSON DATA ====
let data = {};

fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    data = json;
    initDestination();
    initCrew();
    initTechnology();
  })
  .catch((err) => console.error("Failed to load data:", err));

// ===================== DESTINATION =====================
const planetImage = document.getElementById("planet-image");
const planetName = document.getElementById("planet-name");
const planetDescription = document.getElementById("planet-description");
const planetDistance = document.getElementById("planet-distance");
const planetTravel = document.getElementById("planet-travel");
const destinationTabs = document.querySelectorAll(".destination-section .tab");

function initDestination() {
  destinationTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      destinationTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const index = tab.getAttribute("data-index");
      const planet = data.destinations[index];

      planetImage.src = planet.images.png;
      planetName.textContent = planet.name;
      planetDescription.textContent = planet.description;
      planetDistance.textContent = planet.distance;
      planetTravel.textContent = planet.travel;
    });
  });
}

// ===================== CREW =====================
const crewImage = document.getElementById("crew-image");
const crewName = document.getElementById("crew-name");
const crewRole = document.getElementById("crew-role");
const crewBio = document.getElementById("crew-bio");
const crewTabs = document.querySelectorAll(".crew-tabs button");

function initCrew() {
  crewTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      crewTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const index = tab.getAttribute("data-index");
      const member = data.crew[index];

      crewImage.src = member.images.png;
      crewName.textContent = member.name;
      crewRole.textContent = member.role;
      crewBio.textContent = member.bio;
    });
  });
}

// ===================== TECHNOLOGY =====================
const techImage = document.getElementById("tech-image");
const techName = document.getElementById("tech-name");
const techDescription = document.getElementById("tech-description");
const techTabs = document.querySelectorAll(".tech-tabs button");

function initTechnology() {
  techTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      techTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const index = tab.getAttribute("data-index");
      const tech = data.technology[index];

      techName.textContent = tech.name;
      techDescription.textContent = tech.description;
      techImage.src = tech.images.portrait;
    });
  });
}
