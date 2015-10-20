
$(document).ready(function(){
  //escucha el evento del click en la flecha
  $(".Slider-arrow-right").on("click", handleRightArrow);
  $(".Slider-arrow-left").on("click", handleLeftArrow);

  function handleRightArrow(){
    var layers = $(".Slider-layer"); // la lista de imagenes

    for(var i=0; i < layers.length; i++){
      console.log(layers[i]);
      //se busca la activa y se le remueve la clase 
      if( layers[i].className.indexOf("Slider-layer--active") > -1 ){
        layers[i].className = "Slider-layer"; 

        //se le agrega la clase activa para la siguiente imagen en la lista
        if((i+1) >= layers.length ){ //si el actual en la lista es el ultimo, utiliza el primero (0)
          layers[0].className = "Slider-layer Slider-layer--active";
        }else {
          layers[i+1].className = "Slider-layer Slider-layer--active";
        }

        break;
      } 
    }
  }

  function handleLeftArrow(){
    console.log("...");
  }
});

