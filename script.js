// Check if a count exists in local storage
let count = localStorage.getItem('visitorCount');

// If not, initialize it to 0
if (count === null) {
  count = 0;
} else {
  // Otherwise, parse the stored value (which is a string) into a number
  count = parseInt(count);
}

// Increment the count
count++;

// Store the updated count
localStorage.setItem('visitorCount', count);

// Display the count on the page
document.getElementById('visitor-count').textContent = count;
 
