const markAllBtn = document.querySelector(".mark-all-button");
const counter = document.querySelector(".notifications-counter");
const notifications = document.querySelectorAll("ul li");
const privateMessages = document.querySelectorAll(".private-message");

markAllBtn.addEventListener("click", () => {
  notifications.forEach(n => {
    n.classList.remove("new-notification");
    const dot = n.querySelector(".notification-dot");
    if (dot) dot.style.display = "none";
  });

  counter.textContent = "0";
});

// PRIVATE MESSAGE TOGGLE
privateMessages.forEach(msg => {
  msg.addEventListener("click", () => {
    msg.classList.toggle("open");
  });
});
