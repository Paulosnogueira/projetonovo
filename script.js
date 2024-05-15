function toggleMode() {
    const html = document.documentElement;
  
    // Toggle the 'light' class on the html element
    html.classList.toggle('light');
  
    // Select the image inside the element with id 'profile'
    const image = document.querySelector("#profile img");
  
    // Check if the image element exists
    if (image) {
      if (html.classList.contains('light')) {
        image.setAttribute('src', '/avatar-light.png');
      } else {
        image.setAttribute('src', '/avatar.png');
      }
    } else {
      console.error("Image element not found");
    }
  }
  