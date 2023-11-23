// script.js

document.addEventListener('DOMContentLoaded', function () {
    console.log('Welcome to My Simple Static Webpage!');
  
    // Get the image element by its ID
    var image = document.getElementById('myImage');
  
    // Add a click event listener to the image
    image.addEventListener('click', function () {
      // Toggle between two different styles when the image is clicked
      if (image.classList.contains('rotate')) {
        // If the 'rotate' class is present, remove it and add the 'zoom' class
        image.classList.remove('rotate');
        image.classList.add('zoom');
      } else {
        // If the 'rotate' class is not present, remove the 'zoom' class and add the 'rotate' class
        image.classList.remove('zoom');
        image.classList.add('rotate');
      }
    });
  });
  