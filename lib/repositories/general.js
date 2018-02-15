class generalRepository {
  constructor(dbRef) {
    this.dbRef = dbRef;
  }

  findAll() {
    return new Promise((resolve, reject) => {
      resolve([{id: 1}, {id: 2}])
    })
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      resolve({id: 1})
    })
  }

  add(data) {
    return new Promise((resolve, reject) => {
      resolve(true)
    })
  }

  update(id, data) {
    return new Promise((resolve, reject) => {
      resolve(true)
    })
  }
}

module.exports = generalRepository;
