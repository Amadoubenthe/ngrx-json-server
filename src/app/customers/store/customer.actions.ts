import { createAction, props } from '@ngrx/store';
import { Customer } from '../models/customer.model';

export const loadCustomer = createAction(
  '[LoadCustomer Component] loadCustomer'
);

export const loadCustomersSuccess = createAction(
  '[ListCustomer Component] loadCustomersSuccess',
  props<{ customers: Customer[] }>()
);

export const loadCustomersFailed = createAction(
  '[ListCustomer Component] loadCustomersFailed',
  props<{ error: string }>()
);
