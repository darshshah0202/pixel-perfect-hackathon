// GLOBAL STATE
let safetyScore = 85;
let rentPaid = false;
let cctvOn = true;

// PAGE SWITCH
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
  document.getElementById(id).style.display = "block";
}
function updateSafety() {
  let score = 50;

  if (cctvOn) score += 20;
  if (rentPaid) score += 5;

  safetyScore = score;

  document.querySelectorAll(".safety-score").forEach(el => {
    el.textContent = score + "% Safe";
  });
}
function toggleCCTV() {
  cctvOn = !cctvOn;
  updateSafety();
}

function toggleRent() {
  rentPaid = !rentPaid;

  const rentEl = document.getElementById("rentStatus");
  if (rentEl) {
    rentEl.textContent = rentPaid ? "Paid" : "Pending";
  }

  updateSafety();
}
function toggleBed(el) {
  el.classList.toggle("occupied");
}
function swipe(dir) {
  const card = document.getElementById("swipeCard");
  if (!card) return;

  card.style.transition = "0.4s";
  card.style.transform =
    dir === "right" ? "translateX(200px)" : "translateX(-200px)";
  card.style.opacity = "0";

  setTimeout(() => {
    card.style.transform = "translateX(0)";
    card.style.opacity = "1";
  }, 400);
}
// run once on load
updateSafety();