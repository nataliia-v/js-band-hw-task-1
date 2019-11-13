export default function() {
  const shipFormContainer = document.createElement('div');
  const shipForm = document.createElement('form');
  const buttonOpenForm = document.createElement('button');

  buttonOpenForm.className = 'buttonOpenForm';
  shipFormContainer.className = 'shipFormContainer';

  buttonOpenForm.textContent = 'Add a ship';

  // toggle
  // shipForm.style.display = 'none';
  //
  // buttonOpenForm.addEventListener("click", function() {
  //   shipForm.style.display = (shipForm.dataset.toggled ^= 1) ? "block" : "none";
  // });

  shipForm.innerHTML =
    '<label for="id">Id:</label>\n' +
    '    <input id="id" required class="name">\n' +
    '<br>' +
    '<label for="model">Model:</label>\n' +
    '    <input id="model" required class="name">\n' +
    '<br>' +
    '<label for="name">Serial number/Name:</label>\n' +
    '    <input id="name" required class="name">\n' +
    '<br>' +
    '<label for="producedYear">Produced Year:</label>\n' +
    '    <input id="producedYear" required class="produced-year">\n' +
    '<br>' +
    '<label for="capacity">Capacity (in kg)</label>\n' +
    '    <input id="capacity" required class="capacity">\n' +
    '<br>' +
    '<label for="averageSpeed">Average speed (in nm):</label>\n' +
    '    <input id="averageSpeed" required class="capacity">\n' +
    '<br>' +
    '<label for="countOfTeam">Count of team: </label>\n' +
    '    <input id="countOfTeam" required class="countOfTeam">\n' +
    '<br>' +
    '<button id="submitBtnShip">Save</button>\n';

  shipFormContainer.appendChild(buttonOpenForm);
  shipFormContainer.appendChild(shipForm);

  return shipFormContainer;
}
