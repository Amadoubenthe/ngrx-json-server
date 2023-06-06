import { createAction, props } from '@ngrx/store';
import { Customer } from '../models/customer.model';

export const loadCustomers = createAction(
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

// Add custommer
export const addCustomer = createAction(
  '[AddCustomer Component] AddCustomer',
  props<{ customer: Customer }>()
);

export const addCustomerSuccess = createAction(
  '[AddCustomer Component] AddCustomersSuccess',
  props<{ customer: Customer }>()
);

export const addCustomerFailed = createAction(
  '[AddCustomer Component] AddCustomerFailed',
  props<{ error: string }>()
);
