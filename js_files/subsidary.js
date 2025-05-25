 // Initialize
        updateVisitorCount();
        updateClock();
        setInterval(updateClock, 1000);
        
        // Hero section should be visible immediately
        document.querySelector('#hero').classList.add('visible');


console.log("subsidary.js loaded");

updateVisitorCount(); // This should log if the function exists


  function showHearts(e) {
      for (let i = 0; i < 2; i++) {
        const heart = document.createElement('span');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        
        heart.style.left = `${e.clientX + (Math.random() * 10 - 20)}px`;
        heart.style.top = `${e.clientY + (Math.random() * 20 - 10)}px`;

        document.body.appendChild(heart);

        setTimeout(() => {
          heart.remove();
        }, 1000);
      }
    }
