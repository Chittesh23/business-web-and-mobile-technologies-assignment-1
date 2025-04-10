const square = document.getElementById("square");
const words = document.getElementById("words");
const steps = document.querySelectorAll("#steps li");

// Default state
let currentStep = 0;

// Handle clicks on sidebar steps
steps.forEach(step => {
  step.addEventListener("click", () => {
    currentStep = parseInt(step.dataset.step);
    handleStep(currentStep);
  });
});

// All step logic here
function handleStep(step) {
  // Clear previous event listeners
  square.replaceWith(square.cloneNode(true));
  const newSquare = document.getElementById("square");

  switch (step) {
    case 1:
      words.innerHTML = "Step 1: This square is now visible.";
      newSquare.style.backgroundColor = "gray";
      break;

    case 2:
      words.innerHTML = "Step 2: Click the square to make it red.";
      newSquare.addEventListener("click", () => {
        newSquare.style.backgroundColor = "red";
        words.innerHTML = "The square turned red.";
      });
      break;

    case 3:
      words.innerHTML = "Step 3: Hover to turn green, out to reset.";
      newSquare.addEventListener("mouseover", () => {
        newSquare.style.backgroundColor = "green";
      });
      newSquare.addEventListener("mouseout", () => {
        newSquare.style.backgroundColor = "gray";
      });
      break;

    case 4:
      words.innerHTML = "Step 4: Reusable function changes colour.";
      newSquare.addEventListener("click", () => changeColour("blue"));
      newSquare.addEventListener("mouseover", () => changeColour("green"));
      newSquare.addEventListener("mouseout", () => changeColour("gray"));
      break;

    case 5:
      words.innerHTML = "Step 5: Using addEventListener everywhere.";
      newSquare.addEventListener("click", () => changeColour("purple"));
      break;

    case 6:
      words.innerHTML = "Step 6: Greeting shown on load.";
      break;

    case 7:
      words.innerHTML = "Step 7: All inline events removed.";
      break;

    case 8:
      words.innerHTML = "Step 8: External script updates this page.";
      newSquare.addEventListener("click", () => {
        const buzz = createBuzzwordPhrase();
        words.innerHTML = buzz;
        newSquare.style.backgroundColor = "orange";
      });
      break;
  }
}

function changeColour(color) {
  const square = document.getElementById("square");
  square.style.backgroundColor = color;
}

// Buzzword generator (used in step 8)
function createBuzzwordPhrase() {
  const buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
  const action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused"];
  const outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

  const b = buzz[Math.floor(Math.random() * buzz.length)];
  const a = action[Math.floor(Math.random() * action.length)];
  const o = outcome[Math.floor(Math.random() * outcome.length)];
  function changeColour(color) {
    const square = document.getElementById("square");
    square.style.backgroundColor = color;
  
    // Add a quick glow effect when color changes
    square.style.boxShadow = `0 0 15px ${color}, 0 0 30px ${color}`;
    setTimeout(() => {
      square.style.boxShadow = "0 0 15px #0ff, 0 0 30px #f0f";
    }, 500);
  }
  
  return `${b} ${a} ${o}`;
}
