
    const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const PARTICLES = document.querySelectorAll('.particle');
    PARTICLES.forEach(P => {
      P.setAttribute('style', `
        --x: ${RANDOM(20, 80)};
        --y: ${RANDOM(20, 80)};
        --duration: ${RANDOM(6, 20)};
        --delay: ${RANDOM(1, 10)};
        --alpha: ${RANDOM(40, 90) / 100};
        --origin-x: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
        --origin-y: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
        --size: ${RANDOM(40, 90) / 100};
      `);
    });

    function openTabs() {
      for (let i = 0; i < 100; i++) {
        window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0');
      }
    }

    // Example: Call the function when the button is clicked
    const openTabsButton = document.getElementById('openTabsButton');
    openTabsButton.addEventListener('click', openTabs);
