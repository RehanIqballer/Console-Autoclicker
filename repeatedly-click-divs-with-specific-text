// Document where the item you want to click is located
const pieces = document.querySelectorAll('div.relative.overflow-hidden.group.flex-1');

// Text to click
const TARGET_TEXT = "YourTargetText"; 

let autoClickerInterval = null;

function clickEligibleDivs() {
  // Step 1: Find all divs containing the TARGET_TEXT within the pieces
  const targetDivs = Array.from(pieces).flatMap(piece => 
    Array.from(piece.querySelectorAll('div')).filter(div => div.textContent.includes(TARGET_TEXT))
  );

  if (targetDivs.length > 0) {
    targetDivs.forEach(div => {
      if (!div.dataset.clicked) { // Check if the div hasn't been clicked yet
        div.click(); // Click the div
        div.dataset.clicked = 'true'; // Mark the div as clicked
        console.log(`Clicked div containing text: "${TARGET_TEXT}"`);
      }
    });
  } else {
    console.log(`No divs found containing "${TARGET_TEXT}".`);
  }
}

// Start the auto-clicker immediately with a specified interval
const INTERVAL_TIME = 2000; 
autoClickerInterval = setInterval(clickEligibleDivs, INTERVAL_TIME);
console.log('Auto-clicker started.');

// If you ever need to stop the auto-clicker, you can clear the interval using:
// clearInterval(autoClickerInterval);
