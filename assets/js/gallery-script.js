// JavaScript to control modal behavior
function openModal(serviceTitle) {
  const modal = document.getElementById("service-modal");
  const title = document.getElementById("service-title");
  title.textContent = serviceTitle;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("service-modal");
  modal.style.display = "none";
}

// Close modal when clicking outside the modal-content
window.onclick = function (event) {
  const modal = document.getElementById("service-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
