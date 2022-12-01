const fs = require('fs')


class Container {
  constructor(path) {
    this.path = path;
  }

  getAll = async() => {
    try {
      const readProducts = await fs.promises.readFile(this.path, 'utf-8');
      return JSON.parse(readProducts)
    }catch(err) {
      console.log(err);
    }
  }

}

module.exports = Container;