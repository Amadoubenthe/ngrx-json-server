import { createReducer, on } from '@ngrx/store';
import { Customer } from '../models/customer.model';
import { CustomerActions } from './action.types';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface CustomerState extends EntityState<Customer> {
  selectedCustomerId: number | null;
  // customers: Customer[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const defaultCustomer: CustomerState = {
  ids: [],
  entities: {},
  selectedCustomerId: null,
  loading: false,
  loaded: false,
  error: '',
};

export const customerAdapter: EntityAdapter<Customer> =
  createEntityAdapter<Customer>();

export const initialState = customerAdapter.getInitialState(defaultCustomer);

export const customerReducer = createReducer(
  initialState,

  on(CustomerActions.loadCustomers, (state: CustomerState) => ({
    ...state,
    loaded: true,
  })),

  on(CustomerActions.loadCustomersSuccess, (state, { customers }) => {
    return customerAdapter.setAll(customers, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),

  on(
    CustomerActions.loadCustomersFailed,
    (state: CustomerState, { error }) => ({
      ...state,
      entities: {},
      loading: false,
      error: error,
    })
  ),

  // Add Customer
  on(CustomerActions.addCustomerSuccess, (state, { customer }) => {
    return customerAdapter.addOne(customer, {
      ...state,
      loaded: true,
      loading: false,
    });
  }),

  on(CustomerActions.addCustomerFailed, (state, { error }) => {
    return {
      ...state,
      error: error,
    };
  })
);
