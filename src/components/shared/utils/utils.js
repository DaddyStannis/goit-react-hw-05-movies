const IMG_IS_MISSING =
  'https://inspe.ua/wp-content/themes/inspe/img/no_image.jpg';

function addLeadingZero(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

export { addLeadingZero, IMG_IS_MISSING };
