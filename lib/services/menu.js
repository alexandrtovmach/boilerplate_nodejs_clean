const webSocketsHandler = require("../units/webSocketsHandler");
const menuRepository = require("../repositories/menu");

module.exports = {
  getAll: (callback) => {
    menuRepository.findAll()
      .then(data => callback(null, data))
      .catch(err => callback(err))
  },

  getById: (id, callback) => {
    menuRepository.findById()
      .then(data => callback(null, data))
      .catch(err => callback(err))
  },

  addMenu: (menuObj, callback) => {
    menuRepository.add()
      .then(data => callback(null, data))
      .catch(err => callback(err))
  },

  updateMenu: (menuId, newMenuObj, callback) => {
    menuRepository.update()
      .then(data => callback(null, data))
      .catch(err => callback(err))
  }
};