//Toggle mobile menu
document.addEventListener('DOMContentLoaded' ,function () {
    const toggleButton = document.querySelector('.navbar .navbar-mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .navbar-mobile-menu-items');

    if (toggleButton && mobileMenu) {
        toggleButton.addEventListener('click' ,function(){
            mobileMenu.classList.toggle('active');
        });
    }

    //Video Modal
    const modal = document.getElementById('VideoModal');
    const videoButton = document.querySelector('.preview__video-button');
    const closeButton = document.querySelector('.modal__close-button');
    const videoPlayer = document.getElementById('videoPlayer');

    if (videoButton && modal && videoPlayer) {
        videoButton.addEventListener('click', function(){
            modal.style.display = 'block';

            // FIX: YouTube embed link (important)
            videoPlayer.src = 'https://www.youtube.com/watch?v=9He4UBLyk8Y&list=PLWKjhJtqVAbmMuZ3saqRIBimAKIMYkt0E';
        });
    }

    if (closeButton && modal && videoPlayer) {
        closeButton.addEventListener('click', function(){
            modal.style.display = 'none';
            videoPlayer.src = '';
        });
    }

    // Click outside modal to close
    if (modal) {
        window.addEventListener('click', function(event){
            if (event.target === modal) {
                modal.style.display = 'none';
                videoPlayer.src = '';
            }
        });
    }
});


// change navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    if (window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');
    } else {
        navbar.classList.remove('navbar--scroll');
    }
});