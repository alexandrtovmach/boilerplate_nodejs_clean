const io = require("socket.io");
let server;

module.exports = {
  initialize: connection => {
    server = io.listen(connection);
    server.on("connection", socket => {
      socket.on("room", id => {
        socket.room = id;
        socket.join(id);
      });

      socket.on("disconnect", () => {
        if (socket.room) {
          socket.leave(socket.room);
        }
      });
    });
  },

  updatedMenu: menuId => {
    server.to(menuId).emit("updated");
  }
};
