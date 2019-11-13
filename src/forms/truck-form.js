export default function() {
  const truckForm = document.createElement('form');
  const buttonOpenForm = document.createElement('button');
  const truckFormContainer = document.createElement('div');

  buttonOpenForm.className = 'buttonOpenForm';
  truckFormContainer.className = 'truckFormContainer';

  buttonOpenForm.textContent = 'Add a truck';

  // toggle
  // truckForm.style.display = 'none';
  //
  // buttonOpenForm.addEventListener("click", function() {
  //   truckForm.style.display = (truckForm.dataset.toggled ^= 1) ? "block" : "none";
  // });

  truckForm.innerHTML =
    '<label for="id">Id:</label>\n' +
    '    <input id="id" required class="name">\n' +
    '<br>' +
    '<label for="model">Model:</label>\n' +
    '    <input id="model" required class="name">\n' +
    '<br>' +
    '<label for="licensePlate">License plate:</label>\n' +
    '    <input id="licensePlate" required class="license">\n' +
    '<br>' +
    '<label for="producedYear">Produced Year:</label>\n' +
    '    <input id="producedYear" required class="produced-year">\n' +
    '<br>' +
    '<label for="capacity">Capacity (in kg)</label>\n' +
    '    <input id="capacity" required class="capacity">\n' +
    '<br>' +
    '<label for="averageSpeed">Average speed (in km)</label>\n' +
    '    <input id="averageSpeed" required class="capacity">\n' +
    '<br>' +
    '<label for="typeOfGas">Type of gas</label>\n' +
    '    <input id="typeOfGas" required class="capacity">\n' +
    '<br>' +
    '<button id="submitBtn">Save</button>\n';

  truckFormContainer.appendChild(buttonOpenForm);
  truckFormContainer.appendChild(truckForm);

  return truckFormContainer;
}
