function buscar() {
    alert("entro a  mi funcion");

    let busqueda = document.getElementById("busquedaPueblos").value;


    if (busqueda == "") {
        alert("el valor de busqueda no puede estar vacio")
    }
    else if (busqueda == "paipa") {
        window.location.href = "../Paipa.html";
    }

    else if (busqueda == "raquira") {
        window.location.href = "../Raquira.html";
    }

    else if (busqueda == "tunja") {
        window.location.href = "../Tunja.html";
    }

    else if (busqueda == "villa de leyva") {
        window.location.href = "../VillaDeLeyva.html";
    }

    else if (busqueda == "mongui") {
        window.location.href = "../Mongui.html";
    }

    else if (busqueda == "el Cocuy") {
        window.location.href = "../El cocuy.html";
    }
}

