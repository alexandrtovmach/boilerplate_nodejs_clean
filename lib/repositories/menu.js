const generalRepository = require("./general");
const dbRef = 'database reference';

class MenuRepository extends generalRepository {
  constructor() {
    super(dbRef);
    this.dbRef = dbRef;
  }
}

module.exports = new MenuRepository();
