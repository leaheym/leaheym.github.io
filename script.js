// Check if a count exists in local storage
let count = localStorage.getItem('visitorCount');

// If no count exists, set it to 0
if (count === null) {
    count = 0;
} else {
    // If a count exists, increment it
    count = parseInt(count) + 1;
}

// Update the count in local storage
localStorage.setItem('visitorCount', count);

// Display the count on the page
document.getElementById('visitor-count').textContent = count;
