const eventCards = document.getElementById("eventCards");
const teamCards = document.getElementById("teamCards");

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

document.getElementById("joinButton").href = CLUB_CONFIG.joinUrl;
document.getElementById("joinUrlText").textContent = CLUB_CONFIG.joinUrl;
document.getElementById("instagramLink").href = CLUB_CONFIG.instagram;
document.getElementById("emailLink").href = `mailto:${CLUB_CONFIG.email}`;
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("open");
});
