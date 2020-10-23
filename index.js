function getDogPics (numberOfDogPics) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogPics}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong, please try again later'));
}

function getDogPicsListener() {
  $('form').submit(event => {
    event.preventDefault();
    const numberOfDogPics = $('.js-number-of-dogs').val();
    getDogPics(numberOfDogPics);
  });
}

$(function() {
  getDogPicsListener();
});