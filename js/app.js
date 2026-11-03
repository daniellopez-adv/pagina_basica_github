const numeroUno = document.getElementById("num1");
const numeroDos = document.getElementById("num2");
const imagenSeleccionada = document.querySelector("img");
const opcion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");
opcion.addEventListener("change", function () {
    const opcionSeleccionada = opcion.value;
    if (opcionSeleccionada === "suma") {
        imagenSeleccionada.src = "https://cdn-icons-png.flaticon.com/128/1828/1828921.png";
        imagenSeleccionada.alt = "Símbolo de suma";
    } else if (opcionSeleccionada === "resta") {
        imagenSeleccionada.src = "https://tse2.mm.bing.net/th/id/OIP.ZjSeGUIURaNeN8uoR9Zt1wAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
        imagenSeleccionada.alt = "Símbolo de resta";
    } else if (opcionSeleccionada === "multiplicacion") {
        imagenSeleccionada.src = "https://cdn-icons-png.flaticon.com/128/18/18157.png";
        imagenSeleccionada.alt = "Símbolo de multiplicación";
    } else if (opcionSeleccionada === "division") {
        imagenSeleccionada.src = "https://cdn-icons-png.flaticon.com/128/14090/14090560.png";
        imagenSeleccionada.alt = "Símbolo de división";
    } else {
        imagenSeleccionada.src = "https://cdn-icons-png.flaticon.com/128/3965/3965048.png";
        imagenSeleccionada.alt = "Imagen de símbolos matemáticos";
    }
    calcularResultado();
});
function calcularResultado() {
    if (!opcion.value || numeroUno.value.trim() === "" || numeroDos.value.trim() === "") {
        resultado.textContent = "";
        return;
    }
    const primerNumero = Number(numeroUno.value);
    const segundoNumero = Number(numeroDos.value);
    let valorResultado;
    if (opcion.value === "suma") {
        valorResultado = primerNumero + segundoNumero;
    } else if (opcion.value === "resta") {
        valorResultado = primerNumero - segundoNumero;
    } else if (opcion.value === "multiplicacion") {
        valorResultado = primerNumero * segundoNumero;
    } else if (opcion.value === "division") {
        if (segundoNumero === 0) {
            resultado.textContent = "No se puede dividir entre cero.";
            return;
        }
        valorResultado = primerNumero / segundoNumero;
    }
    resultado.textContent = "El resultado es: " + valorResultado;
}
numeroUno.addEventListener("input", calcularResultado);
numeroDos.addEventListener("input", calcularResultado);