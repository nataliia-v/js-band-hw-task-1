// import model from './transport-model';

import container from './forms/forms-container';
import addTransport from './transportItem/save-transport-item-ship';

import './index.css';
import 'normalize.css';

container();
// console.log(model());
// addTransport();
// console.log(localStorage);
// localStorage.clear();
//
// // alert('Hello');
document.getElementById('submitBtnShip').addEventListener('click', () => addTransport());
console.log(localStorage);
