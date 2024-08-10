    // Function to scroll to top
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // Show the button when the user scrolls down 20px
    window.onscroll = function () {
        var scrollTopBtn = document.getElementById("scrollTopBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    // Function for Elisabeth Cranert button
    function myFunction() {
        alert("Hello, Elisabeth Cranert! This message is just for you!");
    }