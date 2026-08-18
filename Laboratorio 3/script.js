let temaActual = 'claro'; 
let saludoActual = '';
const botonTema = document.querySelector('#boton-tema'); 
const saludoElemento = document.querySelector('#saludo'); 
const contenedor = document.getElementById("contenedor-tarjeta");

function cambiarTema() { 
    document.body.classList.toggle('dark-mode'); 
    temaActual = temaActual === 'claro' ? 'oscuro' : 'claro';
    botonTema.textContent = temaActual === 'claro' ? '🌙 Modo oscuro' : '☀Modo claro';
}  

function saludar() { 
    const horaActual = new Date().getHours(); 
    return horaActual < 12 ? 'Buenos Días' : (horaActual < 18 ? 'Tarde' : 'Noche');
}

contenedor.innerHTML = `
    <div class="row">
        <div class="column">
            <div class="card">
                 <h3>${saludar()}</h3>
            </div>
        </div>
    </div>
`;

