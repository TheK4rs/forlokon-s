// Simple gallery modal (optional)
const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <img src="${img.src}" alt="${img.alt}">
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".close").addEventListener("click", () => modal.remove());
    modal.addEventListener("click", e => { if (e.target === modal) modal.remove(); });
  });
});

// Modal styling
const style = document.createElement("style");
style.innerHTML = `
.modal {
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex; justify-content: center; align-items: center;
  z-index: 9999;
}
.modal-content {
  position: relative;
  max-width: 80%; max-height: 80%;
}
.modal-content img {
  width: 100%; height: auto;
  border-radius: 10px;
}
.close {
  position: absolute;
  top: -10px; right: -10px;
  background: #fff; color: #000;
  border-radius: 50%;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1.2rem;
}
`;
document.head.appendChild(style);
