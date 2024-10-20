visualizarFooter(); // se llama la funciòn al cargar el archivo
function visualizarFooter(){
    let seccionFooter= document.getElementById("footer");
    seccionFooter.innerHTML= `
    <div class="grupo-1">
    <div class="box">
        <figure>
            <a href="#">
                <img src="Imagenes/PaginaPrincipal/Logo.png" alt="logo boyaca es vida">
            </a>
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
            <a href="https://www.instagram.com/boyacaesvida/" class="fa fa-instagram"></a>
            <a href="https://www.facebook.com/profile.php?id=61566829357721&locale=es_LA" class="fa fa-facebook"></a>
        </div>
    </div>
</div>
<div class="grupo-2">
    <small>&copy; 2024 <b>Boyacá es vida</b> - Todos los derechos reservados.</small>
</div>`;


}