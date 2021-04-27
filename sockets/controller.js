const socketController = socket => {
  console.log('Cliente conectado', socket.id)
  socket.on('disconnect', () => {
      console.log('Cliente desconectado', socket.id)
  });

  socket.on('cliente-mensaje', (payload, callback) => {
      const id = 123456;
      callback({id, fecha: new Date().getTime()});
      socket.broadcast.emit('propagar-cliente-mensaje', payload);
  });
}

module.exports = {
  socketController
}
