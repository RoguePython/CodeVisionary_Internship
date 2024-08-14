document.addEventListener('DOMContentLoaded', function() { 
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (scrollanimation) {
            scrollanimation.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Get the ID of the target section
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = 100; // Adjust this value to set how much higher you want to scroll
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.navbar a').forEach(anchor => {
//         anchor.addEventListener('click', function(event) {
//             event.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);
            
//             if (targetElement) {
//                 window.scroll({
//                     top: targetElement.offsetTop,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// });

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         document.querySelectorAll('a[href^="#"]').forEach(link => {
//             link.classList.remove('active');
//         });

//         // this.classList.add('active');

//         const targetElement = document.querySelector(this.getAttribute('href'));
//         const offset = 75; // Number of pixels to adjust above the target

//         window.scrollTo({
//             top: targetElement.offsetTop - offset,
//             behavior: 'smooth'
//         });
//     });
// });