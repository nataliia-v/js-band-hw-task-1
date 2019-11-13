class Transport {
  constructor(id, type, producedYear, capacity, averageSpeed) {
    this.id = id;
    this.type = type;
    this.producedYear = producedYear;
    this.capacity = capacity;
    this.averageSpeed = averageSpeed;
  }

  saveInLocaleStorage() {
    localStorage.setItem('transport');
    // console.log('I can save in locale Storage');
  }
}

let track = new Transport(1, 'track');

export default function() {
  return track.saveInLocaleStorage();
}
