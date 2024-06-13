const initCanvas = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const stars = [];
    const FPS = 60;
    const numberOfStars = 100;
    const mouse = {
      x: 0,
      y: 0
    };
  
    // Increase the velocity of the stars
    for (let i = 0; i < numberOfStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.floor(Math.random() * 50) - 25) * 2, // Change 1: Increase velocity
        vy: (Math.floor(Math.random() * 50) - 25) * 2  // Change 1: Increase velocity
      });
    }
  
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "#333333";
  
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        ctx.fillStyle = "#222222";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = '#333333';
        ctx.stroke();
      }
  
      ctx.beginPath();
      for (let i = 0; i < stars.length; i++) {
        const starI = stars[i];
        ctx.moveTo(starI.x, starI.y);
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
        for (let j = 0; j < stars.length; j++) {
          const starII = stars[j];
          if (distance(starI, starII) < 150) {
            ctx.lineTo(starII.x, starII.y);
          }
        }
      }
      ctx.lineWidth = 0.5; // Change 2: Make lines bolder
      ctx.strokeStyle = '#333333';
      ctx.stroke();
    };
  
    const distance = (point1, point2) => {
      const xs = (point2.x - point1.x) ** 2;
      const ys = (point2.y - point1.y) ** 2;
      return Math.sqrt(xs + ys);
    };
  
    const update = () => {
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx / FPS;
        s.y += s.vy / FPS;
  
        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      }
    };
  
    canvas.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
  
    const tick = () => {
      draw();
      update();
      requestAnimationFrame(tick);
    };
  
    tick();
  };
  
  export default initCanvas;
  