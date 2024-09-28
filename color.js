//Funcion que aplica el estilo a la opcion seleccionada en el menu quita la previamente seleccionado
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se haya seleccionado una opcion en el modo responsive

    var x = document.getElementById("nav");
    x.className = "";

}
//Funcion que muestre el menu reponsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive"
    } else{
        x.className = "";
    }
}
//Dedecto el scrolling para aplicar la animacion de las barras habilidades

window.onscroll = function(){
    efectoHabilidades()
};

//Funcion que aplica la animacion de la barra de habilidades 
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progres4");
    } 
}