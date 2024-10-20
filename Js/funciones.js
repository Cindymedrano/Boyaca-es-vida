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

