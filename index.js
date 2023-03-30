
function getBackgroundColour(pos) {
  let colour = '#282828'; // Starting colour - Almost black

  // console.log(pos)
  // To view scrollPosition remove "//" before the log - press shift /


  // Checks what section scroll is between
  // Returns colour of given section
  if (pos > 450 && pos < 1100) {
    return "#fab500" // Yellow
  } else if (pos > 1100 && pos < 2000) {
    return "#ffffff" // White
  } else if (pos > 2000) {
    return colour = "#0c64b1" // blue
  }
  return colour
}

// Notes on adjusting:
// starting with if (pos > 450 && pos < 1100).
// Adjust the first parameter of the if statement to change the starting position of the section where the colour change takes effect.
// Adjust the second parameter of the if statement to change the ending position of the section where the colour change takes effect.
// Repeat previous two steps for each if statement in the function to adjust the colour change positions for each section.
// Save the changes to the script.
// ensure the second parameter of one section is always the same as the first parameter as the next section

// To view current pos
// Uncomment above console log by remove the two // infront of it and save changes
// open your browers dev tools - right click -> inspect or cmd + option + i
// select console and as you scroll youll see the current pos being logged out

// To add more colours we just need to add more if blocks
// example:
// else if (pos > n && pos < n){
//      return colour = '#HEXCODE' 
// }


window.addEventListener("scroll", function () {
  // Get section with classname panel
  let panel1 = document.querySelector(".panel1");
  let panel2 = document.querySelector(".panel2");
  let panel3 = document.querySelector(".panel3");
  let panel4 = document.querySelector(".panel4");
  let panel5 = document.querySelector(".panel5");

  // Get menu icon
  let menuIcon = document.querySelector(".menu");

  // Get current scrollPosition
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  // Pass current scrollPosition to above function
  // Returning colour based off rules set above
  let backgroundColour = getBackgroundColour(scrollPosition);

  // If current bgColour is white
  // Change menu colour to black
  if (backgroundColour === '#ffffff') {
    menuIcon.style.color = '#282828'
  } else {
    menuIcon.style.color = "#ffffff"
  }

  // Update section with returned colour
  panel1.style.backgroundColor = backgroundColour
  panel2.style.backgroundColor = backgroundColour
  panel3.style.backgroundColor = backgroundColour
  panel4.style.backgroundColor = backgroundColour
  // panel5.style.backgroundColor = backgroundColour
});
