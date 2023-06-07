import { createAction, props } from '@ngrx/store';
import { Customer } from '../models/customer.model';
import { Update } from '@ngrx/entity';

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

export const addCustomer = createAction(
  '[AddCustomer Component] AddCustomer',
  props<{ customer: Customer }>()
);

export const addCustomerSuccess = createAction(
  '[AddCustomer Component] AddCustomerSuccess',
  props<{ customer: Customer }>()
);

export const addCustomerFailed = createAction(
  '[AddCustomer Component] AddCustomerFailed',
  props<{ error: string }>()
);

export const loadCustomer = createAction(
  '[EditCustomer Component] EditCustomer',
  props<{ customerId: number }>()
);

export const loadCustomerSuccess = createAction(
  '[EditCustomer Component] EditCustomerSuccess',
  props<{ customer: Customer }>()
);

export const loadCustomerFailed = createAction(
  '[EditCustomer Component] EditCustomerFailed',
  props<{ error: string }>()
);

export const updateCustomer = createAction(
  '[EditCustomer] Update Customer',
  props<{ customer: Customer }>()
);

export const updateCustomerSuccess = createAction(
  '[EditCustomer] Update Customer Success',
  props<{ changes: Update<Customer> }>()
);

export const updateCustomerFailed = createAction(
  '[EditCustomer] Update Customer Fail',
  props<{ error: string }>()
);

export const deleteCustomer = createAction(
  '[ListCustomer] Delete Customer',
  props<{ id: number }>()
);

export const deleteCustomerSuccess = createAction(
  '[ListCustomer] Delete Customer Success',
  props<{ id: number }>()
);

export const deleteCustomerFailed = createAction(
  '[ListCustomer] Delete Customer Fail',
  props<{ error: string }>()
);
