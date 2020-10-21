function getDogPics () {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(responseJson => console.log(responseJson))
//  .catch(error => alert('Something went wrong, please try again later'));
}

function gotDogPicsListener() {
  $('#button').submit(event => {
    event.preventDefault();
//    const numberOfDogPics = $('#dogs').val();
//    numberBetweenOneAndFifty();
    getDogPics();
  });
}

// function numberBetweenOneAndFifty() {
//   if (numberOfDogPics > 50) {
//     alert('Please pick a number between 1 and 50');
//   }
// }

$(function() {
  gotDogPicsListener();
});