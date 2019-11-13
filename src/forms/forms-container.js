import truck from './truck-form';
import ship from './ship-form';

export default function() {
  const root = document.getElementById('root');
  const shipFormContainer = document.createElement('div');
  const truckFormContainer = document.createElement('div');
  shipFormContainer.className = 'shipFormContainer';
  truckFormContainer.className = 'truckFormContainer';

  const formsContainer = document.createElement('div');
  formsContainer.className = 'formsContainer';

  formsContainer.appendChild(ship());
  formsContainer.appendChild(truck());

  root.appendChild(formsContainer);

  return formsContainer;
}
