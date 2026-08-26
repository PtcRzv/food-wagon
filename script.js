document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const tickets = document.querySelectorAll(".menu-ticket");
  const burgerBtn = document.getElementById("burgerBtn");
  const navLinks = document.getElementById("navLinks");

  // Filtrare Categori Meniu
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const category = tab.getAttribute("data-category");

      tickets.forEach(ticket => {
        if (ticket.getAttribute("data-category") === category) {
          ticket.classList.remove("hidden");
        } else {
          ticket.classList.add("hidden");
        }
      });
    });
  });

  // Inițializare: Arată doar prima categorie (Street Burgers)
  const defaultCategory = "burgeri";
  tickets.forEach(ticket => {
    if (ticket.getAttribute("data-category") !== defaultCategory) {
      ticket.classList.add("hidden");
    }
  });

  // Meniu mobil (Burger Button)
  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
});

// Modal Comandă
function openOrderModal() {
  document.getElementById("orderModal").classList.add("open");
}

function closeOrderModal() {
  document.getElementById("orderModal").classList.remove("open");
}
