const upvoteButton = document.querySelector("#upvote");
const downvoteButton = document.querySelector("#downvote");
const countDisplay = document.querySelector("#count");

function render(increment) {
  const oldCount = +countDisplay.textContent;
  countDisplay.textContent = oldCount + increment;
}

console.log(upvoteButton, downvoteButton, countDisplay);

upvoteButton.addEventListener("click", function() {
  render(1);
});
downvoteButton.addEventListener("click", function() {
  render(-1);
});
