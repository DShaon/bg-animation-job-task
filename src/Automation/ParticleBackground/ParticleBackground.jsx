
// import { useEffect, useRef } from "react";

// const ParticleBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const createParticle = (specificSpeed) => ({
//       size: Math.random() * 2 + 1,
//       speed: specificSpeed || Math.random() * 2 + 1,
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       velocityX: 2,
//       velocityY: 0,
//     });

//     const pushAwayParticle = (particle, fromX, fromY) => {
//       const distance = Math.hypot(fromX - particle.x, fromY - particle.y);
//       const forceDirectionX = (particle.x - fromX) / distance;
//       const forceDirectionY = (particle.y - fromY) / distance;
//       const maxDistance = 200;
//       const force = (maxDistance - distance) / maxDistance;

//       if (distance < maxDistance) {
//         particle.velocityX = forceDirectionX * force * 50;
//         particle.velocityY = forceDirectionY * force * 50;
//       }
//     };

//     const controlledSpeed = 0.4;  // Choose the desired speed for specific particles

//     const particlesArray = [
//       ...Array.from({ length: 30 }, () => createParticle(controlledSpeed)), // 50 particles with controlled speed
//       ...Array.from({ length: 60 }, createParticle), // The rest with random speed
//     ];

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particlesArray.forEach(particle => {
//         particle.x -= particle.speed + particle.velocityX;
//         particle.y += particle.velocityY;
//         particle.velocityX *= 0.9;
//         particle.velocityY *= 0.9;

//         if (particle.x < 0) {
//           Object.assign(particle, createParticle(particle.speed === controlledSpeed ? controlledSpeed : undefined));
//           particle.x = window.innerWidth;
//         }

//         ctx.fillStyle = "white";
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//         ctx.fill();
//       });
//       requestAnimationFrame(animate);
//     }
//     animate();

//     const handleClick = (event) => {
//       const x = event.clientX;
//       const y = event.clientY;
//       particlesArray.forEach(particle => pushAwayParticle(particle, x, y));
//     };

//     canvas.addEventListener("click", handleClick);

//     // window.addEventListener("resize", () => {
//     //   canvas.width = window.innerWidth;
//     //   canvas.height = window.innerHeight;
//     // });

//     return () => {
//       canvas.removeEventListener("click", handleClick);
//     //   window.removeEventListener("resize", () => {
//     //     canvas.width = window.innerWidth;
//     //     canvas.height = window.innerHeight;
//     //   });
//     };
//   }, []);

//   return <canvas className="fixed overflow-hidden" ref={canvasRef} />;
// };

// export default ParticleBackground;

import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createParticle = (specificSpeed) => ({
      size: Math.random() * 2 + 1,
      speed: specificSpeed || Math.random() * 2 + 1,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      velocityX: 0,
      velocityY: 0,
    });

    const pushAwayParticle = (particle, fromX, fromY) => {
      const distance = Math.hypot(fromX - particle.x, fromY - particle.y);
      const forceDirectionX = (particle.x - fromX) / distance;
      const forceDirectionY = (particle.y - fromY) / distance;
      const maxDistance = 200;
      const force = (maxDistance - distance) / maxDistance;

      if (distance < maxDistance) {
        particle.velocityX += forceDirectionX * force * 5;
        particle.velocityY += forceDirectionY * force * 5;
      }
    };

    const controlledSpeed = 0.4;

    const particlesArray = [
      ...Array.from({ length: 30 }, () => createParticle(controlledSpeed)), 
      ...Array.from({ length: 60 }, createParticle),
    ];

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(particle => {
        particle.x -= particle.speed;
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        particle.velocityX *= 0.95;
        particle.velocityY *= 0.95;

        if (particle.x < 0) {
          Object.assign(particle, createParticle(particle.speed === controlledSpeed ? controlledSpeed : undefined));
          particle.x = window.innerWidth;
        }

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();

    const handleClick = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      particlesArray.forEach(particle => pushAwayParticle(particle, x, y));
    };

    canvas.addEventListener("click", handleClick);

    return () => {
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  return <canvas className="fixed overflow-hidden" ref={canvasRef} />;
};

export default ParticleBackground;
