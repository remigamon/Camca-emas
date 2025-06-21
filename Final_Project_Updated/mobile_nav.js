    document.getElementById('menuToggle').addEventListener('click', function() {
      const navMenu = document.getElementById('navMenu');
      navMenu.classList.toggle('show');
    });
  const images = [
    'url("pictures/images1.jpg")',
    'url("pictures/images2.jpg")',
      'url("pictures/images3.jpg")',
      'url("pictures/images4.jpg")',
      'url("pictures/images5.jpg")',
      'url("pictures/images6.jpg")',
      'url("pictures/images7.jpg")',
      'url("pictures/images8.jpg")',
      'url("pictures/images9.jpg")',
    'url("pictures/images10.jpg")'
  ];

    let index = 0;

    function changeBackground() {
      const sections = document.querySelectorAll('.gift-card-section');
      sections.forEach(section => {
        section.style.backgroundImage = images[index];
      });
      index = (index + 1) % images.length;
    }

    setInterval(changeBackground, 3000); // every 5 seconds
    changeBackground(); // initial set
