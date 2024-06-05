function limpiar() {
    document.frmformulario.txtnombres.value = "";
    document.frmformulario.txtappaterno.value = "";
    document.frmformulario.txtapmaterno.value = "";
    document.frmformulario.txtdireccion.value = "";
    document.frmformulario.txtndoc.value = "";
    document.frmformulario.txtnombres.focus();

    document.frmformulario.inputAddress.value="";
    document.frmformulario.inputAddress.focus();

}
function solonumeros() {
    var codigo = (e.which) ? e.which : e.keycode;
    if (codigo == 8)//techa de retroceso
    {
        return true;
    } else if (codigo >= 48 && codigo <= 57)// teclas del 0 al 9
    {
        return true;
    } else {
        return false;
    }
}

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }

}

