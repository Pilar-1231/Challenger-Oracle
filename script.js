// Selecciona los elementos del DOM
const textInput = document.getElementById('text-input');
const outputMessage = document.getElementById('output-message');
const illustration = document.querySelector('.output-section img');
const copyBtn = document.getElementById('copy-btn');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const safeMode = document.getElementById('safe-mode');

// Función para encriptar el texto usando las claves especificadas
function encryptText(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Función para desencriptar el texto usando las claves especificadas
function decryptText(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Función para mostrar el texto encriptado/desencriptado y ocultar la imagen
function showOutput(message) {
    illustration.style.display = 'none'; // Oculta la ilustración
    outputMessage.textContent = message; // Muestra el mensaje encriptado/desencriptado
    copyBtn.style.display = 'block'; // Muestra el botón de copiar
}

// Función para manejar el clic en el botón de encriptar
encryptBtn.addEventListener('click', () => {
    let text = textInput.value.trim();
    if (text !== '') {
        if (safeMode.checked) {
            // Si el modo seguro está activado, filtra el texto para permitir solo letras minúsculas y espacios
            text = text.toLowerCase().replace(/[^a-z\s]/g, '');
        }
        const encryptedText = encryptText(text);
        showOutput(encryptedText);
    }
});

// Función para manejar el clic en el botón de desencriptar
decryptBtn.addEventListener('click', () => {
    let text = textInput.value.trim();
    if (text !== '') {
        const decryptedText = decryptText(text);
        showOutput(decryptedText);
    }
});

// Función para copiar el texto encriptado/desencriptado al portapapeles
copyBtn.addEventListener('click', () => {
    const textToCopy = outputMessage.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto:', err);
    });
});

// Función para manejar el evento de entrada de texto en el textarea
textInput.addEventListener('input', () => {
    if (textInput.value.trim() === '') {
        illustration.style.display = 'block'; // Muestra la ilustración si el textarea está vacío
        outputMessage.textContent = 'Ningún mensaje fue encontrado';
        copyBtn.style.display = 'none'; // Oculta el botón de copiar si no hay texto
    }
});
