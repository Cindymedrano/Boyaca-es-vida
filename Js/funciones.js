function buscar() {
   
    let busqueda = document.getElementById("busquedaPueblos").value;


    if (busqueda == "") {
        alert("el valor de busqueda no puede estar vacio");
    }

    else if (busqueda == "raquira") {
        window.location.href = "../Raquira.html";
    }

    else if (busqueda == "RAQUIRA") {
        window.location.href = "../Raquira.html";
    }
    else if (busqueda == "paipa") {
        window.location.href = "../Paipa.html";
    }
    else if (busqueda == "PAIPA") {
        window.location.href = "../Paipa.html";
    }

    else if (busqueda == "tunja") {
        window.location.href = "../Tunja.html";
    }

    else if (busqueda == "TUNJA") {
        window.location.href = "../Tunja.html";
    }
 
    else if (busqueda == "villa de leyva") {
        window.location.href = "../VillaDeLeyva.html";
    }

    else if (busqueda == "VILLA DE LEYVA") {
        window.location.href = "../VillaDeLeyva.html";
    }

    else if (busqueda == "mongui") {
        window.location.href = "../Mongui.html";
    }

    else if (busqueda == "MONGUI") {
        window.location.href = "../Mongui.html";
    }

    else if (busqueda == "cocuy") {
        window.location.href = "../Cocuy.html";
    }
    else if (busqueda == "COCUY") {
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
                    <p>Boyacá es vida nace de la admiración por la belleza natural, historia y rica cultura que posee
                        éste
                        departamento. </p>
                    <p>Nuestra misión es que descubras la esencia de Boyacá con nosotros. </p>
                </div>
                <div class="box">
                    <h2> SIGUENOS</h2>
                    <div class="red-social">
                        <a href="https://www.instagram.com/boyacaesvida/" class="fa fa-instagram" target="_blank"></a>
                        <a href="https://www.facebook.com/profile.php?id=61567079648836&mibextid=rS40aB7S9Ucbxw6v"
                            class="fa fa-facebook" target="_blank"></a>
                    </div>
                </div>
            </div>
            <div class="grupo-2">
                <small>&copy; 2024 <b>Boyacá es vida</b> - Todos los derechos reservados.</small>
            </div> `;


}   */
        let recomendadosTuristicos =
            [
                {
                    "nombre":"Villa de Leyva",
                    "imagen": "Imagenes/PaginaPrincipal/PlazaVilladeLeyva2.jpg",
                    "descripción": "Disfruta de los mejores paisajes y diferentes planes en Villa de Leyva.",
                    "urlPueblo":"VillaDeLeyva.html"
                   
                },
                {
                    "nombre":"Paipa",
                    "imagen": "Imagenes/Paipa/Paipa.jpg",
                    "descripción": "Te gustan los amasijos?...Ven y disfruta de los mejores en Paipa.",
                    "urlPueblo":"Paipa.html"
                    
                },
                {
                    "nombre":"Raquira",
                      "imagen":"Imagenes/PaginaPrincipal/raquirapaginaprincipal.jpg",
                      "descripción":"Reconocido por sus coloridas calles y artesanías en barro.",
                       "urlPueblo":"Raquira.html"
                      
                    
                },
                {
                    "nombre": "Tunja",
                    "imagen": "Imagenes/PaginaPrincipal/PlazaTunja.jpg",
                    "descripción":"También llamada la cuna de la independencia, ciudad con mucha historia y cultura.",
                     "urlPueblo":"Tunja.html"
                },
                {
                    "nombre": "Mongui",
                    "imagen": "Imagenes/PaginaPrincipal/monguiprin.jpg",
                    "descripción":"Considerado uno de los pueblos más lindos de Boyacá.",
                     "urlPueblo":"Mongui.html"
                },
                {
                     "nombre": "El cocuy",
                     "imagen": "Imagenes/PaginaPrincipal/cocuyprinc.jpg",
                     "descripción":"Si te gusta caminar y conocer lugares inolvidables, el Cocuy debes conocer.",
                     "urlPueblo":"Cocuy.html"
                }
];

                    console.log(recomendadosTuristicos [0].descripción);

                    console.log(recomendadosTuristicos [3].nombre);


                    //ciclos  forEach-nos sale en la consola la informacion del Json para poderlo recorrer//
                    recomendadosTuristicos.forEach(function(recomendados){
                    console.log(recomendados.descripción);

                    // o se puede usar asi cuando queremos toda la informacion  *console.log(recomendados);*//

                    });

                    //Ciclos for//
                    for(contador=0;contador<recomendadosTuristicos.length;contador++) {
                        console.log(recomendadosTuristicos[contador]);
                    }
                    /*   //cuando quiero buscar por algo detallado
                    for(contador=0;contador<recomendadosTuristicos.length;contador++) {
                        console.log(recomendadosTuristicos[contador]descripción); 
                    }*/

                    /* //cuando quiero una posicion especifica
                    for(contador=0;contador<2;contador++) {
                        console.log(recomendadosTuristicos[contador]);
                    } */