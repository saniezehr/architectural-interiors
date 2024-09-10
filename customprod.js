function displayImage(event) {
    const image = document.getElementById('furnitureImage');
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        image.src = e.target.result;
        image.style.display = 'block'; // Show the image
    };

    reader.readAsDataURL(file);
}

