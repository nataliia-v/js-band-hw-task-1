// const itemId = document.getElementById('id').value;
// const model = document.getElementById('model').value;
// const producedYear = document.getElementById('producedYear').value;
// const capacity = document.getElementById('capacity').value;
//
// class Transport {
//   constructor(id, model, producedYear, capacity) {
//     this.id = id;
//     this.model = model;
//     this.producedYear = producedYear;
//     this.capacity = capacity;
//   }
//
//   showCapacityInPounds() {
//
//   }
//
//
// }
//
// class Ship extends Transport {
//   constructor(id, model, producedYear, capacity, name, countOfTeam, averageSpeed) {
//
//     super(id, model, producedYear, capacity, name);
//     this.countOfTeam = countOfTeam;
//     this.averageSpeed = averageSpeed;
//   }
//
//   showAverageSpeed() {
//
//   }
//
// }
//
//
// class Truck extends Transport {
//   constructor(id, model, producedYear, capacity, name, countOfTeam, averageSpeed) {
//
//     super(id, model, producedYear, capacity, name);
//     this.countOfTeam = countOfTeam;
//     this.averageSpeed = averageSpeed;
//   }
//
//   showAverageSpeed() {
//
//   }
//
// }

// Использование:
// let transport = new Transport(itemId, model, producedYear, capacity);
// transport.saveInLocalStorage(item);

export default function() {
  // Get form values
  const name = document.getElementById('name').value;
  const producedYear = document.getElementById('producedYear').value;
  const capacity = document.getElementById('capacity').value;
  const averageSpeed = document.getElementById('averageSpeed').value;
  const countOfTeam = document.getElementById('countOfTeam').value;
  const itemId = document.getElementById('id').value;
  const model = document.getElementById('model').value;

  const transportItem = {
    id: itemId,
    model,
    name,
    producedYear,
    capacity,
    averageSpeed,
    countOfTeam,
  };

  if (localStorage.getItem('all-transport') === null) {
    const transportItems = [];
    transportItems.push(transportItem);
    localStorage.setItem('all-transport', JSON.stringify(transportItems));
  } else {
    const todoItems = JSON.parse(localStorage.getItem('all-transport'));
    todoItems.push(transportItem);
    localStorage.setItem('all-transport', JSON.stringify(todoItems));
  }
  ///////
}
