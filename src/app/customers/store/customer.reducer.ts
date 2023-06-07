import { createReducer, on } from '@ngrx/store';
import { Customer } from '../models/customer.model';
import { CustomerActions } from './action.types';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromRoot from '../../reducers';

export interface CustomerState extends EntityState<Customer> {
  selectedCustomerId: number | string;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  customers: CustomerState;
}

export const defaultCustomer: CustomerState = {
  ids: [],
  entities: {},
  selectedCustomerId: 0,
  loading: false,
  loaded: false,
  error: '',
};

export const customerAdapter: EntityAdapter<Customer> =
  createEntityAdapter<Customer>();

export const initialState = customerAdapter.getInitialState(defaultCustomer);

export const customerReducer = createReducer(
  initialState,
  on(CustomerActions.loadCustomersSuccess, (state, { customers }) => {
    return customerAdapter.setAll(customers, {
      ...state,
      loaded: true,
      loading: false,
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

  on(CustomerActions.addCustomerSuccess, (state, { customer }) => {
    return customerAdapter.addOne(customer, {
      ...state,
      loaded: true,
      loading: false,
      selectedCustomerId: customer.id,
    });
  }),
  on(CustomerActions.addCustomerFailed, (state, { error }) => {
    return {
      ...state,
      error: error,
    };
  }),

  on(CustomerActions.loadCustomerSuccess, (state, { customer }) => {
    return customerAdapter.setOne(customer, {
      ...state,
      selectedCustomerId: customer.id,
      loaded: true,
      loading: false,
    });
  }),
  on(CustomerActions.loadCustomerFailed, (state, { error }) => {
    return {
      ...state,
      error: error,
    };
  }),

  on(CustomerActions.updateCustomerSuccess, (state, { changes }) => {
    return customerAdapter.updateOne(changes, {
      ...state,
      loaded: true,
      loading: false,
    });
  }),
  on(CustomerActions.updateCustomerFailed, (state, { error }) => {
    return { ...state, error: error };
  }),

  on(CustomerActions.deleteCustomerSuccess, (state, { id }) => {
    return customerAdapter.removeOne(id, {
      ...state,
      loaded: true,
      loading: false,
    });
  }),
  on(CustomerActions.deleteCustomerFailed, (state, { error }) => {
    return { ...state, error: error };
  })
);
