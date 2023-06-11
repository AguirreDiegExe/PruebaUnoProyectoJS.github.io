function mostrarInformacion() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;

    var informacionUsuario = "Nombre: " + nombre + "<br>"
                           + "Apellido: " + apellido + "<br>"
                           + "Correo electrónico: " + correo;

    var elemento = document.getElementById("informacionMostrada");
    if (elemento) {
      elemento.innerHTML = informacionUsuario;
    } else {
      console.error("No se econtro los datos del comprador");
    }
}

function sumarNumeros() {
  
  var numero = parseInt(document.getElementById("CantidadCantidadDeBoletos").value);

  if (isNaN(numero)) {
    alert("Che ingresa un número válido en cantidad");
    return;
  }

  if (typeof numeros === 'undefined') {
    var numeros = [];
  }

  numeros.push(numero);

  var sumaValoresCorrespondientes = 0;
  for (var i = 0; i < numeros.length; i++) {
    sumaValoresCorrespondientes += numeros[i];
  }

  document.getElementById("resultado").innerHTML = "La cantidad de tickets es: " + sumaValoresCorrespondientes;

  var CategoriaDeLosBoletosSeleccionado = document.getElementById("CategoriaDeLosBoletosSeleccionada").value; 

  Mensaje = "Categoria seleccionada: "; 

  var Estudiante_UNO = document.getElementById("Estudiante-Uno").value; 
  var Trainee_UNO = document.getElementById("Trainee-Uno").value;
  var Junior_UNO = document.getElementById("Junior-Uno").value; 

  var MontoFijado = 200; 
 
  //variables de descuento: 
 
  var RESULATADO;
  var MontoFijoParaEstudiante ; 
  var descuentoParaEstudiante; 
  var MontoFijoParaTrainee; 
  var descuentoParaTrainee;
  var MontoFijoParaJunior;
  var descuentoParaJunior; 

  //

  var MensajeUsuario = "Paga Total $: "; 

  if(CategoriaDeLosBoletosSeleccionado == Estudiante_UNO){
    RESULATADO = (MontoFijado * sumaValoresCorrespondientes);
    descuentoParaEstudiante = RESULATADO * 0.80; 
    MontoFijoParaEstudiante = RESULATADO - descuentoParaEstudiante; 
    document.getElementById("CategoriaDeLaCategoriaSeleccionada").innerHTML = MensajeUsuario + MontoFijoParaEstudiante;
  }else{
    if(CategoriaDeLosBoletosSeleccionado == Trainee_UNO){
      RESULATADO = (MontoFijado*sumaValoresCorrespondientes); 
      descuentoParaTrainee = RESULATADO * 0.50;
      MontoFijoParaTrainee = RESULATADO - descuentoParaTrainee
      document.getElementById("CategoriaDeLaCategoriaSeleccionada").innerHTML = MensajeUsuario + MontoFijoParaTrainee;
    }else{
      if(CategoriaDeLosBoletosSeleccionado == Junior_UNO){
        RESULATADO = (MontoFijado*sumaValoresCorrespondientes);
        descuentoParaJunior = RESULATADO * 0.15;
        MontoFijoParaJunior = RESULATADO - descuentoParaJunior; 
        document.getElementById("CategoriaDeLaCategoriaSeleccionada").innerHTML = MensajeUsuario + MontoFijoParaJunior;
      }
    }
  }
}

function ReseteoDeDatos(){

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = ""; 
    document.getElementById("correo").value = ""; 
    document.getElementById("CantidadCantidadDeBoletos").value = "";
    document.getElementById("CategoriaDeLosBoletosSeleccionada").value = "Estudiante-Uno" ; 
    document.getElementById("informacionMostrada").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("CategoriaDeLaCategoriaSeleccionada").innerHTML = ""; 
}

