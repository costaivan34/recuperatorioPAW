function addForm() {
    var nodoForm = document.querySelector('fieldset');
    var nuevoNodo = document.createElement('div');
    var contador = contador+1;
nuevoNodo.innerHTML ="<fieldset id='form0'> "+
"<legend>Datos del alumno</legend> <label for='nombre' >Nombre</label>"+
"<input type='text' name='nombre' placeholder='Nombre del Alumno' required>" +
"<label for='apellido'>Apellido</label><input type='text' name='apellido' placeholder='Apellido del Alumno' "+
"required><label for='apellido' >Nota 1</label>"+
"<input type='number' name='nota1' placeholder='Nota 1 Trimestre' min='1' max='10' required>"+
"<label for='apellido' >Nota 2</label><input type='number' name='nota2' placeholder='Nota 2 Trimestre' min='1' max='10' required>"+
"<label for='apellido' >Nota 3</label>"+
"<input type='number' name='nota3' placeholder='Nota 3 Trimestre' min='1' max='10' required></fieldset>"
    
    nodoForm.insertBefore(nuevoNodo, nodoForm.querySelector('#referenciaVacia1'));
    
    }