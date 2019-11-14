import Transport from './Transport';

class Ship extends Transport {
  constructor({ model, producedYear, capacity, averageSpeed, name, countOfTeam }) {
    super({ model, producedYear, capacity, averageSpeed });

    this.name = name;
    this.countOfTeam = countOfTeam;
  }

  showAverageSpeed() {
    // eslint-disable-next-line no-alert
    alert(`${this.averageSpeed}nm`);
  }
}

export default Ship;
