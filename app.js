document.addEventListener("DOMContentLoaded",function(){
    const pokeSelect = document.getElementById("pokeSelect"); //OPCIÓN
    const submitButton = document.getElementById("submitButton"); //BOTÓN
    const pokeDetails = document.getElementById("pokeDetails"); //DIV

    submitButton.addEventListener("click", ()=> {
        let pokeDato = pokeSelect.value ; // VALOR DE LA OPCION
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeDato}`; //API + VALOR DE LA OPCION
        fetch(url)
        .then(response => response.json()) //JSON
        .then(data => {                    //DATA    // SUMAR DATOS AL DIV
          pokeDetails.innerHTML = `        
            <h2 id="nombre">${data.name.toUpperCase()}</h2>
            <div class="img-container">
                <img src="${data.sprites.front_default}" alt="${data.name}" class="img">
                <img src="${data.sprites.back_default}" alt="${data.name}" class="img">
            </div>
            <div class="text-container">
                <p class="parrafo">Tipo: ${data.types[0].type.name}.</p>
                <p class="parrafo">Habilidades: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}.</p>
                <p class="parrafo">Altura: ${data.height} metros.</p>
                <p class="parrafo">Peso: ${data.weight} kg.</p>
                <p class="parrafo">Experiencia base: ${data.base_experience}.</p>
            </div>
          `;
        })
        .catch(error => {
          console.error("Hubo un error:", error); //CAPTAR ERROR
        });

        const seccionPoke = document.getElementById("seccion-poke");
        seccionPoke.scrollIntoView({ behavior: "smooth" });
    });
  });
