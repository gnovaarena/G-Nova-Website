function scrollCards(direction) {
  const container = document.getElementById("team-cards");
  const card = container.querySelector(".team-card");
  const gap = 16; // total horizontal margin between cards
  const cardWidth = card.offsetWidth + gap;

  if (direction === "left") {
    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }
}





 const cursor = document.querySelector('.neon-cursor');
  let mouseX = 0, mouseY = 0;

 document.addEventListener("mousemove", (e) => {
  requestAnimationFrame(() => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
});


  window.addEventListener('load', () => {
  if (window.innerWidth <= 768) {
    const container = document.getElementById("team-cards");
    const card = container.querySelector(".team-card");
    const gap = 16;
    const cardWidth = card.offsetWidth + gap;
    container.scrollLeft = 0;
  }
});

  

document.addEventListener("DOMContentLoaded", () => {
  const sourceRows = document.querySelectorAll("#leaderboard-data tr");
  const desktopBody = document.querySelector("#desktop-leaderboard-body");
  const mobileBody = document.querySelector("#mobile-leaderboard-body");

  sourceRows.forEach(row => {
    const rowCloneForDesktop = row.cloneNode(true);
    const rowCloneForMobile = row.cloneNode(true);
    desktopBody.appendChild(rowCloneForDesktop);
    mobileBody.appendChild(rowCloneForMobile);
  });
});





