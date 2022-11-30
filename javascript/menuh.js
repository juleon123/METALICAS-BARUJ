// MENU HAMBURGUESA

function menuopen(){
 var lista=document.getElementById("lista")

 lista.classList.toggle("open")
 lista.classList.toggle("close")
}


// SELECCIÓN BOTONES

function bt_select(id) {
    var btn_txt = document.getElementsByClassName("btn_txt");

    for (var i = 0; i < btn_txt.length; i++) {
        btn_txt[i].getElementsByTagName("a")[0].classList.remove("select");
    }

    // aplicar select al boton

    document.getElementById(id).classList.add("select");
}