const eventCards = document.getElementById("eventCards");
const teamCards = document.getElementById("teamCards");

if (eventCards && CLUB_CONFIG.events) {
  CLUB_CONFIG.events.forEach(event => {
    const card = document.createElement("article");
    card.className = "event-card";

    card.innerHTML = `
      <div class="event-date">${event.date}</div>
      <h3>${event.title}</h3>
      <div class="event-meta">${event.time} · ${event.location}</div>
      <p>${event.description}</p>
    `;

    eventCards.appendChild(card);
  });
}

if (teamCards && CLUB_CONFIG.team) {
  CLUB_CONFIG.team.forEach(member => {
    const card = document.createElement("article");
    card.className = "team-card";

    card.innerHTML = `
      <div class="icon">👤</div>
      <h3>${member.name}</h3>
      <div class="team-role">${member.role}</div>
      <p>${member.description}</p>
    `;

    teamCards.appendChild(card);
  });
}

const instagramLink = document.getElementById("instagramLink");
if (instagramLink) {
  instagramLink.href = CLUB_CONFIG.instagram;
}

const emailLink = document.getElementById("emailLink");
if (emailLink) {
  emailLink.href = `mailto:${CLUB_CONFIG.email}`;
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}
