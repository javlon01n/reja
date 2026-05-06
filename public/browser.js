


console.log(" FrontEnd JS ishga tushdi");

function itemTemplate(item) {
  return ` <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between" 
        >
          <span class="item-text">${item.reja}</span>
          <div>
            <button data-id="${item._id}" class="edit-me btn bn btn-secondary btn-sm mr-1" style="
              background: linear-gradient(90deg,#0202a9, #3184ff );
            color: white;
            font-weight: 600;
            font-size: 20px;
            padding: 0.8rem 2rem;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 4px 20px rgba(255, 58, 130, 0.3);">
              O'zgartirish
            </button>
            <button  data-id="${item._id}" class="delete-me bb btn-danger btn-sm" style=" font-size: 20px;  border: 2px solid red;  color: white; 
              background: linear-gradient(90deg,#730101, #f83939dc );
            color: white;
            font-weight: 600;
            font-size: 20px;
            padding: 0.8rem 2rem;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 4px 20px rgba(255, 58, 130, 0.3);
              " >O'chirish</button>
          </div>
        </li>`;
}



document.getElementById("create-form").addEventListener("submit", function (e) {
  let createField = document.getElementById("create-field");
  e.preventDefault();
console.log("2")
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Iltmos qaytadanxarakat qilib koring"); 
    });
});

document.addEventListener("click", function(e) {
    //delete oper
    console.log(e.target);
    if(e.target.classList.contains("delete-me")) {
        if(confirm("Aniq ochirmoqchimisiz?")) {
          axios.post("/delete-item", {id: e.target.getAttribute("data-id")})
          .then((respose) => {
            console.log(respose.data);
            e.target.parentElement.parentElement.remove();
          }) 
          .catch((err) => {
            console.log("Iltmos qaytadanxarakat qilib koring"); 
          });
        }
    
    }
    //edit oper
    if(e.target.classList.contains("edit-me")){
        let userInput = prompt("O'zgartirish kiriting", 
          e.target.parentElement.parentElement.querySelector(".item-text").innerHTML); 
          if (userInput) {
            axios
            .post("/edit-item", {
              id: e.target.getAttribute("data-id"),
              new_input: userInput,
            }) .then((response) => {
              console.log(response.data);
              e.target.parentElement.parentElement.querySelector(   //frontendga o'zgarishni kiritish
                ".item-text"
              ).innerHTML = userInput;
            })
              .catch(err => {
                console.log("Iltmos qaytadanxarakat qilib koring"); 
              }); 
          }
    }
});

document.getElementById("clean-all").addEventListener("click", function() {
  axios.post("/delete-all", { delete_all: true})
  .then(response => {
    alert(response.data.state);
    document.location.reload();
  })
}) 











// Create particle effect
        const particlesContainer = document.getElementById('particles-container');
        const particleCount = 80;
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }
        
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random size (small)
            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Initial position
            resetParticle(particle);
            
            particlesContainer.appendChild(particle);
            
            // Animate
            animateParticle(particle);
        }
        
        function resetParticle(particle) {
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.opacity = '0';
            
            return {
                x: posX,
                y: posY
            };
        }
        
        function animateParticle(particle) {
            // Initial position
            const pos = resetParticle(particle);
            
            // Random animation properties
            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;
            
            // Animate with GSAP-like timing
            setTimeout(() => {
                particle.style.transition = `all ${duration}s linear`;
                particle.style.opacity = Math.random() * 0.3 + 0.1;
                
                // Move in a slight direction
                const moveX = pos.x + (Math.random() * 20 - 10);
                const moveY = pos.y - Math.random() * 30; // Move upwards
                
                particle.style.left = `${moveX}%`;
                particle.style.top = `${moveY}%`;
                
                // Reset after animation completes
                setTimeout(() => {
                    animateParticle(particle);
                }, duration * 1000);
            }, delay * 1000);
        }
        
        // Mouse interaction
        document.addEventListener('mousemove', (e) => {
            // Create particles at mouse position
            const mouseX = (e.clientX / window.innerWidth) * 100;
            const mouseY = (e.clientY / window.innerHeight) * 100;
            
            // Create temporary particle
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Small size
            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Position at mouse
            particle.style.left = `${mouseX}%`;
            particle.style.top = `${mouseY}%`;
            particle.style.opacity = '0.6';
            
            particlesContainer.appendChild(particle);
            
            // Animate outward
            setTimeout(() => {
                particle.style.transition = 'all 2s ease-out';
                particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
                particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
                particle.style.opacity = '0';
                
                // Remove after animation
                setTimeout(() => {
                    particle.remove();
                }, 2000);
            }, 10);
            
            // Subtle movement of gradient spheres
            const spheres = document.querySelectorAll('.gradient-sphere');
            const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
            const moveY = (e.clientY / window.innerHeight - 0.5) * 5;
            
            spheres.forEach(sphere => {
                const currentTransform = getComputedStyle(sphere).transform;
                sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });

