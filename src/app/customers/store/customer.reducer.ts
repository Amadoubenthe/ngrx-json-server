import { createReducer, on } from '@ngrx/store';
import { Customer } from '../models/customer.model';
import { CustomerActions } from './action.types';

export interface CustomerState {
  customers: Customer[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const initialState: CustomerState = {
  customers: [],
  loading: false,
  loaded: false,
  error: '',
};

export const customerReducer = createReducer(
  initialState,

  on(CustomerActions.loadCustomer, (state: CustomerState) => ({
    ...state,
    loaded: true,
  })),

  on(
    CustomerActions.loadCustomersSuccess,
    (state: CustomerState, { customers }) => ({
      ...state,
      customers: customers,
      loading: false,
      loaded: true,
    })
  ),

  on(
    CustomerActions.loadCustomersFailed,
    (state: CustomerState, { error }) => ({
      ...state,
      loading: false,
      error: error,
    })
  )
);
