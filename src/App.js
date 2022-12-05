const MukjjippaGameController = require('./controller/MukjjippaGameController');

class App {
  play() {
    new MukjjippaGameController();
  }
}

module.exports = App;
const app = new App();
app.play();
