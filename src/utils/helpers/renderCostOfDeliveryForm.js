import getCostOfDeliveryFields from './getCostOfDeliveryFields';
import formBuilder from './formBuilder';
import { COSTS_OF_DELIVERY_STORAGE_KEY } from '../constants';
import CostDelivery from '../../models/CostDelivery';

export default () => {
  const root = document.getElementById('root');
  const costOfDeliveryFormContainer = document.createElement('div');
  root.appendChild(costOfDeliveryFormContainer);

  return () => {
    const costOfDeliveryForm = formBuilder(
      COSTS_OF_DELIVERY_STORAGE_KEY,
      CostDelivery,
      getCostOfDeliveryFields(),
    );

    costOfDeliveryFormContainer.innerHTML = '';

    costOfDeliveryFormContainer.appendChild(costOfDeliveryForm);
  };
};
