let noCount = 0;
let yesPressed = false;

function updateUI() {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Clear the current content

  if (yesPressed) {
    app.innerHTML = '<img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />' +
                    '<div class="text-4xl font-bold my-4">Ok yay!!!</div>';
  } else {
    const yesButtonSize = noCount * 20 + 16;
    app.innerHTML = '<img class="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />' +
                    '<h1 class="text-4xl my-4">Will you be my Valentine?</h1>' +
                    '<div>' +
                    `<button class="button yes-button" style="font-size: ${yesButtonSize}px" onclick="setYesPressed()">Yes</button>` +
                    `<button class="button no-button" onclick="handleNoClick()">${getNoButtonText()}</button>` +
                    '</div>';
  }
}

function handleNoClick() {
  noCount += 1;
  updateUI();
}

function setYesPressed() {
  yesPressed = true;
  updateUI();
}

function getNoButtonText() {
  const phrases = [
    "No", "Are you sure?", "Really sure?", "Think again!", "Last chance!",
    "Surely not?", "You might regret this!", "Give it another thought!",
    "Are you absolutely certain?", "This could be a mistake!", "Have a heart!",
    "Don't be so cold!", "Change of heart?", "Wouldn't you reconsider?",
    "Is that your final answer?", "You're breaking my heart ;(",
  ];
  return phrases[Math.min(noCount, phrases.length - 1)];
}

// Initial UI setup
updateUI();
