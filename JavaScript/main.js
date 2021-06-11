
// Menu Hamburguesa //
const menu = document.querySelector('.hamburger');

function toggleMenu (event) {
  this.classList.toggle("active");
  document.querySelector( ".menu" ).classList.toggle("active");
  event.preventDefault();
}

 menu.addEventListener('click', toggleMenu, false);





 /* Validacion de Formulario */
 const formulario =  document.getElementById("formulario");
 
  function validarFormulario(event) {

    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el Nombre*');
      return;
    }

    let apellido = document.getElementById('apellido').value;
    if (apellido.length == 0) {
      alert('No has escrito nada en el Apellido*');
      return;
    }

    let telefono = document.getElementById('telefono').value;
    if( telefono == null || telefono.length == 0 || isNaN(telefono)){
        alert('ERROR: Debe ingresar un Telefono*');
        return false;
    }

    let correo = document.getElementById('correo').value;
    if(!(/\S+@\S+\.\S+/.test(correo))){
        alert('ERROR: Debe escribir un correo* válido');
        return false;
      }

    let mensaje = document.getElementById('mensaje').value;
    if(mensaje.length == 0) {
      alert('No has escrito nada en el Mensaje*');
      return;
    }

    let  sendFormulario = document.getElementById('enviar');
    if (sendFormulario = true) {
        alert('Tu mensaje fue enviado , Nos contactaremos contigo en el transcurso del dia');
        return;
    }

  }

   formulario.addEventListener('submit' , validarFormulario);

  
