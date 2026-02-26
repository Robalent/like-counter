document.addEventListener('DOMContentLoaded', function() { 
    
    //inicializamos el contador en 0
    let likeCounter=0;

    //Selectores 
    let button = document.getElementById("likeButton")
    let likeCount = document.getElementById("likeCount")
    let restar = document.getElementById("restar")
    let borrar = document.getElementById("borrar")
    
    //Función para cargar los "me gusta"
    function loadLikes() {
        const likes = localStorage.getItem('myLikeCount')

        if (likes !== null && !isNaN(likes)) {
            
            likeCounter = parseInt(likes); // convierte el valor en número entero
        }

        //debemos usar el elemento que muestra el contador
        likeCount.textContent = likeCounter

    }

    //Función para guardar los "me gusta"
    function saveLikes() {
                                            //pasamos el contador a string
        localStorage.setItem('myLikeCount', likeCounter.toString());

    }

    // Creamos la animación al tocar el corazón
    function createHeart() {
        const container = document.querySelector(".like-container")

        for (let i = 0; i < 8; i++) {
            const heart = document.createElement("span")
            heart.textContent = "❤️"
            heart.classList.add("mini-heart")

            heart.style.left = "50%"
            heart.style.top = "50%"

            const x = (Math.random() - 0.5) * 150 + "px"
            const y = (Math.random() - 0.5) * 150 + "px"

            heart.style.setProperty("--x", x)
            heart.style.setProperty("--y", y)

            container.appendChild(heart)

            setTimeout(() => {
                heart.remove()
            }, 800)
        }
    }


    button.addEventListener("click", function() {
        likeCounter += 1 //incrementa el valor
        likeCount.textContent = likeCounter // actualiza la pantalla
        saveLikes()
        createHeart()

        // likeCount.classList.add("pop")
        // setTimeout(() => {
        //     likeCount.classList.remove("pop")
        // },200)
    })

   restar.addEventListener("click", function(){
    if (likeCounter > 0) {
        likeCounter -= 1 //resta el valor
        likeCount.textContent= likeCounter
        saveLikes()
    }
   })

    loadLikes()
    console.log(likeCounter)

    borrar.addEventListener("click", function(){
        localStorage.clear()
        likeCounter=0
        likeCount.textContent = likeCounter // actualiza la pantalla
    })
});