function buscar() {
    alert("Escribe el nombre de un municipio");

    let busqueda = document.getElementById("busquedaPueblos").value;


    if (busqueda == "") {
        alert("el valor de busqueda no puede estar vacio")
    }
    else if (busqueda == "paipa" || "PAIPA") {
        window.location.href = "../Paipa.html";
    }

    else if (busqueda == "raquira" || "RAQUIRA") {
        window.location.href = "../Raquira.html";
    }

    else if (busqueda == "tunja" || "TUNJA") {
        window.location.href = "../Tunja.html";
    }

    else if (busqueda == "villa de leyva"|| "VILLA DE LEYVA") {
        window.location.href = "../VillaDeLeyva.html";
    }

    else if (busqueda == "mongui" || "MONGUI") {
        window.location.href = "../Mongui.html";
    }

    else if (busqueda == "el Cocuy" || "EL COCUY") {
        window.location.href = "../Cocuy.html";
    }
}



/* //visualizarFooter();//se llama la funciòn al cargar el archivo
function visualizarFooter(){
    let seccionFooter= document.getElementById("footer");
    seccionFooter.innerHTML= `
     <div class="grupo-1">
        <div class="box">
            <figure>
                    <img src="Imagenes/PaginaPrincipal/Logo.png" alt="logo boyaca es vida">   
            </figure>
        </div>
        <div class="box">
            <h2> SOBRE NOSOTROS</h2>
            <p>Boyacá es vida nace de la admiración por la belleza natural, historia y rica cultura que posee éste
                departamento. </p>
            <p>Nuestra misión es que descubras la esencia de Boyacá con nosotros. </p>
        </div>
        <div class="box">
            <h2> SIGUENOS</h2>
            <div class="red-social">
                <a href="https://www.instagram.com/boyacaesvida/" class="fa fa-instagram"  target="_blank"></a>
                <a href="https://www.facebook.com/profile.php?id=61567079648836"class="fa fa-facebook"  target="_blank"></a>
            </div>
        </div>
    </div>
    <div class="grupo-2">
        <small>&copy; 2024 <b>Boyacá es vida</b> - Todos los derechos reservados.</small>
    </div>`;


} */