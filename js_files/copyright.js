console.log
const stamp = document.getElementById("stampImage");

  stamp.addEventListener("click", () => {
    // Remove old class if any
    stamp.classList.remove("spin-once");

    // Force reflow to restart animation
    void stamp.offsetWidth;

    // Add spin class
    stamp.classList.add("spin-once");

    // Optional: Reset after animation
    setTimeout(() => {
      stamp.classList.remove("spin-once");
    }, 5000); // same as animation duration
  });

