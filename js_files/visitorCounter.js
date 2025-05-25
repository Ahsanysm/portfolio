 // Visitor Counter (using localStorage)
 function updateVisitorCount() {
    console.log("Inline: Updating visitor count");
    let count = localStorage.getItem('visitorCount') || 0;
    count = parseInt(count) + 1;
    localStorage.setItem('visitorCount', count);
    document.getElementById('visitorCount').textContent = `Visitors: ${count}`;
  }

  updateVisitorCount();
