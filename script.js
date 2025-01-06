// JavaScript to manage the upvote/downvote functionality
let likeCounterElement = document.getElementById("likes-counter");
const buttonIncrementer = document.getElementById("incrementer");

buttonIncrementer.addEventListener("click", function () {
  const currentLikes = Number(likeCounterElement.innerHTML);
  likeCounterElement.innerHTML = currentLikes + 1;
});

document.getElementById("decrementer").addEventListener("click", () => {
  const currentLikes = Number(likeCounterElement.innerHTML);
  likeCounterElement.innerHTML = currentLikes - 1;
  if (  likeCounterElement.innerHTML < 0)
  {
    likeCounterElement.innerHTML = 0;
  }
});
