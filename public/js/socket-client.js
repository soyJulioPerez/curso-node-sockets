// referencias del HTML
const lblOnLine = document.querySelector('#lblOnLine');
const lblOffLine = document.querySelector('#lblOffLine');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
  // console.log('Conectado');
  lblOffLine.style.display = 'none';
  lblOnLine.style.display = '';
});

socket.on('disconnect', () => {
  // console.log('Desconectado');
  lblOnLine.style.display = 'none';
  lblOffLine.style.display = '';
});

socket.on('propagar-cliente-mensaje', (payload) => {
  console.log(payload);
});

btnEnviar.addEventListener('click', () => {
  const mensaje = txtMensaje.value;
  const payload = {
    mensaje,
    id: '001',
    fecha: new Date().getTime()
  }
  socket.emit('cliente-mensaje', payload, (id) => {
    console.log('ID recibido: ', id);
  });

});
