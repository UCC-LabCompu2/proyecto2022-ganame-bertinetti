/**
 * Calculador de tiempo recorrido
 * @method CalcularDiv
 * @param planeta
 * @param aeronave
 * @return Valor que retorna respuesta
 */

function CalcularDiv() {
    var aeronaves;
    var planeta;
    var rta;

    if (document.getElementById("columbia")) {
        aeronaves = 28000;
    } else if (document.getElementById("dragon_v2")) {
        aeronaves = 80000;
    } else if (document.getElementById("apolo_11")) {
        aeronaves = 45000;
    } else if (document.getElementById("atlas_v")) {
        aeronaves = 58000;
    }

    if (document.getElementsByName("mercurio")) {
        planeta = 222000000;
    } else if (document.getElementById("venus")) {
        planeta = 40000000;
    } else if (document.getElementById("marte")) {
        planeta = 102000000;
    } else if (document.getElementById("urano")) {
        planeta = 4300000000;
    } else if (document.getElementById("jupiter")) {
        planeta = 660000000;
    } else if (document.getElementsByName("saturno")) {
        planeta = 1200000000;
    } else if (document.getElementsByName("neptuno")) {
        planeta = 4500000000;
    }

    rta = planeta / aeronaves;

    rta = (rta*100)/100

    return rta;

}

