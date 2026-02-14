<<<<<<< HEAD
// GLOBAL STATE
let safetyScore = 85;
let rentPaid = false;
let cctvOn = true;

// PAGE SWITCH
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// UPDATE SAFETY SCORE
function updateSafety() {
  let score = 50;

  if (cctvOn) score += 30;
  if (rentPaid) score += 5;

  safetyScore = score;

  const meter = document.getElementById("safety-meter");
  if (meter) meter.textContent = score + "% Safe";
}

// TOGGLE RENT (Warden action)
function toggleRent() {
  rentPaid = !rentPaid;

  const rent = document.getElementById("rentStatus");
  if (rent) {
    rent.textContent = rentPaid ? "Paid" : "Pending";
  }

  updateSafety();
}

// TOGGLE CCTV (Warden action)
function toggleCCTV() {
  cctvOn = !cctvOn;
  updateSafety();
}

// SWIPE CARD
// SWIPE CARD WITH PROFILE CHANGE
let profiles = ["Rahul – Clean", "Aman – Gamer", "Jay – Quiet"];
let currentProfile = 0;

function swipe(dir) {
  const card = document.getElementById("swipeCard");
  if (!card) return;

  // slide animation
  card.style.transform =
    dir === "right" ? "translateX(200px)" : "translateX(-200px)";
  card.style.opacity = "0";

  // after slide → change profile → reset
  setTimeout(() => {
    currentProfile = (currentProfile + 1) % profiles.length;
    card.innerText = profiles[currentProfile];

    card.style.transform = "translateX(0)";
    card.style.opacity = "1";
  }, 300);
}


// RUN ON LOAD
updateSafety();
function runDemo() {
  showPage("student");

  setTimeout(() => {
    toggleCCTV();
  }, 1500);

  setTimeout(() => {
    toggleRent();
  }, 3000);
}
function toggleBed(bed) {
  if (bed.classList.contains("occupied")) {
    bed.classList.remove("occupied");
    bed.style.background = "green";
  } else {
    bed.classList.add("occupied");
    bed.style.background = "red";
  }
}
function toggleBed(bed) {
  if (bed.classList.contains("occupied")) {
    bed.classList.remove("occupied");
    bed.style.background = "green";
  } else {
    bed.classList.add("occupied");
    bed.style.background = "red";
  }
}
let swipeIndex = 0;

function swipe(direction) {
  const card = document.getElementById("swipeCard");

  card.style.transform =
    direction === "left" ? "translateX(-200px)" : "translateX(200px)";
  card.style.opacity = "0";

  setTimeout(() => {
    swipeIndex++;

    const names = ["Rahul – Clean", "Aman – Gamer", "Jay – Quiet"];
    card.innerText = names[swipeIndex % names.length];

    card.style.transform = "translateX(0)";
    card.style.opacity = "1";
  }, 300);
}
// set first profile when page loads
window.onload = function () {
  document.getElementById("swipeCard").innerText = profiles[0];
};
=======
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
>>>>>>> 32c04ed7a1ca61d7d10950ed31473e5bea07988a
