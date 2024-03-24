//Author: USHOU, https://codepen.io/USHOU
$(function () {
  let currentPosition = 0;
  let photo = $(".photo");
  let photoNums = photo.length;

  let speed = 600;
  let timeout = 5000;
  $(".photo").eq(0).show();

  function move() {
    let nextPhoto = (currentPosition + 1) % photoNums;
    photo.eq(currentPosition).fadeOut(speed);
    photo.eq(nextPhoto).fadeIn(speed);
    currentPosition = nextPhoto;
  }
  setInterval(move, timeout);
});
