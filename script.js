// ----------search and user box functionality--------------

document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('search-icon');
    const searchBox = document.getElementById('search-box');
    const searchInput = document.getElementById('search-input');
    const userIcon = document.getElementById('user-icon');
    const userBox = document.getElementById('user-box');

    searchIcon.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Close the user box if it's open
        if (userBox.classList.contains('active')) {
            userBox.classList.remove('active');
        }

        // Toggle the display of the search box
        if (searchBox.style.display === 'block') {
            searchBox.style.display = 'none';
        } else {
            searchBox.style.display = 'block';
        }
    });

    userIcon.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Close the search box if it's open
        if (searchBox.style.display === 'block') {
            searchBox.style.display = 'none';
        }

        userBox.classList.toggle('active');
    });

    // Close both search and user boxes when clicking outside of them
    document.addEventListener('click', function (e) {
        if (!searchIcon.contains(e.target) && !searchBox.contains(e.target)) {
            searchBox.style.display = 'none';
        }
        if (!userIcon.contains(e.target) && !userBox.contains(e.target)) {
            userBox.classList.remove('active');
        }
    });
});


// --------------------------------pop up and thanku message --------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.getElementById("submitButton");
    var nameInput = document.getElementById("name");
    var mobileInput = document.getElementById("mobile");
    var messageOverlay = document.getElementById("messageOverlay");
    var closeButton = document.getElementById("closeButton");

    submitButton.addEventListener("click", function (event) {
        if (nameInput.value === "" || mobileInput.value === "") {
            event.preventDefault(); // Prevent the form from submitting
            alert("Please fill all the details.");
        } else {
            // Show the message overlay when the form is valid
            messageOverlay.style.display = "flex";
        }
    });

    closeButton.addEventListener("click", function () {
        // Close the message overlay when the close button is clicked
        messageOverlay.style.display = "none";
    });
});


// -----------------------------------------------------------------------------------------------------------