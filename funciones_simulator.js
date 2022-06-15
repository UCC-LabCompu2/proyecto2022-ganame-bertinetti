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

    if (document.getElementsByName("aeronaves") === "columbia") {
        aeronaves = 28000;
    } else if (document.getElementsByName("aeronaves") === "dragon_v2") {
        aeronaves = 80000;
    } else if (document.getElementsByName("aeronaves") === "apolo_11") {
        aeronaves = 45000;
    } else if (document.getElementsByName("aeronaves") === "atlas_v") {
        aeronaves = 58000;
    }

    if (document.getElementsByName("planeta") == "mercurio") {
        planeta = 222000000;
    } else if (document.getElementsByName("planeta") == "venus") {
        planeta = 40000000;
    } else if (document.getElementsByName("planeta") == "marte") {
        planeta = 102000000;
    } else if (document.getElementsByName("planeta") == "urano") {
        planeta = 4300000000;
    } else if (document.getElementsByName("planeta") == "jupiter") {
        planeta = 660000000;
    } else if (document.getElementsByName("planeta") == "saturno") {
        planeta = 1200000000;
    } else if (document.getElementsByName("planeta") == "neptuno") {
        planeta = 4500000000;
    }

    rta = planeta / aeronaves;

    return (alert('El teimpo estimado en el que la aeronave llegaria a su destino es: ', rta));

}

