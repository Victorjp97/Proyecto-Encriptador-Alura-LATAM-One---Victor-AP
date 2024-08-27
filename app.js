    /*Requisitos:

    Debe funcionar solo con letras minúsculas
    No deben ser utilizados letras con acentos ni caracteres especiales
    Debe ser posible convertir una palabra para la versión encriptada 
    también devolver una palabra encriptada para su versión original.
    */

    const textoInput = document.getElementById("textoInput");
    const button_encriptar = document.getElementById("button_encriptar");
    const button_desencriptar = document.getElementById("button_desencriptar");
    const button_copiar = document.getElementById("button_copiar");
    const textoFinal = document.getElementById("textoFinal");
    const textoInfo = document.getElementById("textoInfo");
    const persona = document.getElementById("persona");
    const derecha = document.getElementById("derecha");
    const soloMinusculas = /^[a-z ]+$/
   /*La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat" */

    /*Añade un evento de clic al botón de desencriptar*/
    button_encriptar.addEventListener("click", () => {
        /*Obtiene el valor del campo de entrada y lo convierte a minúsculas*/ 
        let textoEntrante = textoInput.value.toLowerCase();
        /*Verificamos - No deben ser utilizados letras con acentos ni caracteres especiales*/
        if (!soloMinusculas.test(textoEntrante)) {
            /* textoFinal.textContent = "Solo se permiten letras minúsculas sin acentos ni caracteres especiales."; */
            console.log("Entrada no válida");
            alert("Entrada no valida, Solo se permiten letras minúsculas sin acentos ni caracteres especiales ");
            return;
        }
        /*Llama a la función desencriptar con el texto en minúsculas y guarda el resultado*/
        let codificado = encriptar(textoEntrante);
        /*Muestra el texto desencriptado en el textArea textoFinal*/
        textoFinal.textContent = codificado; 
        console.log(codificado);
        /*Saca al la persona y el texto, hoja de estilo*/
        persona.style.display = "none";
        textoInfo.style.display = "none";
        button_copiar.style.display = "block";
        textoFinal.classList.add("ajustar");
        derecha.style.justifyContent = "space-between";
        textoInput.value = ""
        textoFinal.classList.add("tamaño");
    });

    button_desencriptar.addEventListener("click", () => {

        let textoEntrante = textoInput.value.toLowerCase();
        if (!soloMinusculas.test(texto1)) {
           /* textoFinal.textContent = "Solo se permiten letras minúsculas sin acentos ni caracteres especiales."; */
            console.log("Entrada no válida");
            alert("Entrada no valida, Solo se permiten letras minúsculas sin acentos ni caracteres especiales");
            return;
        }
        let decodificado = desencriptar(textoEntrante);
        textoFinal.textContent = decodificado;
        console.log(decodificado);
        persona.style.display = "none";
        textoInfo.style.display = "none";
        button_copiar.style.display = "block";
        textoFinal.classList.add("ajustar");
        derecha.style.justifyContent = "space-between";
        textoInput.value = ""
        textoFinal.classList.add("tamaño");
    });

    button_copiar.addEventListener("click", () => {
        let texto = textoFinal;
        //navigator.clipboard.writeText(texto.value);
        
        texto.select();
        document.execCommand("copy")
        alert("El Texto ha sido copiado");
        /* textoFinal.innerHTML= "";
        persona.style.display = "block";
        derecha.style.textoInfo = "block";
        textoInfo.style.display = "block"; 
        button_copiar.style.display = "none"; 
        textoInput.focus(); */
        restablecerInterfaz();
        persona.classList.add("ocultar-permanente");
        textoFinal.classList.remove("tamaño");
        persona.classList.remove("ocultar") 
    
    }) 
    
    function restablecerInterfaz() {
        textoFinal.textContent = "";
        textoInput.value = "";
        persona.classList.add("ocultar") 
        persona.style.display = "block";
        textoInfo.style.display = "block";
        button_copiar.style.display = "none";
        textoFinal.classList.remove("ajustar");
        derecha.style.justifyContent = "center";
        textoInput.focus();
    }
    
   /*Funciones de encriptar y desencriptar*/ 

    function encriptar(texto) {
        let remplazar = [ 
            ["e","enter"],
            ["i","imes"],
            ["a","ai"],
            ["o","ober"],
            ["u","ufat"]
        ];
    
        for (let [letra, codigo] of remplazar) {
            texto = texto.split(letra).join(codigo);
        }
        return texto;
    }

    function desencriptar(texto) {
        let remplazar = [ 
            ["enter", "e"],
            ["imes", "i"],
            ["ai", "a"],
            ["ober", "o"],
            ["ufat", "u"]
        ];
    
        for (let [codigo, letra] of remplazar) {
            texto = texto.split(codigo).join(letra);
        }
        return texto;
    }


  
 