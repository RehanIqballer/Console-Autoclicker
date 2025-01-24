// Document where the item you want to click is located
const pieces = document.querySelectorAll('div.relative.overflow-hidden.group.flex-1');

// Text to click
const TARGET_TEXT = "YourTargetText"; 

// Function to click eligible divs
function clickEligibleDivs() {
  // Step 1: Find all divs containing the TARGET_TEXT within the pieces
  const targetDivs = Array.from(pieces).flatMap(piece => 
    Array.from(piece.querySelectorAll('div')).filter(div => div.textContent.includes(TARGET_TEXT))
  );

  if (targetDivs.length > 0) {
    // There are divs with TARGET_TEXT, click them if not clicked
    targetDivs.forEach(div => {
      if (!div.dataset.clicked) { // Check if the div hasn't been clicked yet
        div.click(); // Click the div
        div.dataset.clicked = 'true'; // Mark the div as clicked
        console.log(`Clicked div containing text: "${TARGET_TEXT}"`);
      }
    });
  } else {
    // No divs with TARGET_TEXT found, proceed to click all eligible divs
    let anyClicked = false;
    pieces.forEach(piece => {
      const bgDiv = piece.querySelector('div.absolute.inset-0.bg-cover.bg-center.transition-transform.duration-200.ease-in-out');
      if (bgDiv && !bgDiv.dataset.clicked) { // Check if bgDiv exists and hasn't been clicked
        bgDiv.click(); // Click the bgDiv
        bgDiv.dataset.clicked = 'true'; // Mark the bgDiv as clicked
        console.log('Clicked div without target text.');
        anyClicked = true;
      }
    });

    if (!anyClicked) {
      console.log(`No divs found containing "${TARGET_TEXT}" and no eligible divs to click.`);
    }
  }
}

// Execute the auto-clicker immediately
clickEligibleDivs();
