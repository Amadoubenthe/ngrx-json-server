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

  // on(UserActions.addUser, (state, { user }) => {
  //   return adapter.addOne(user, state)
  // }),

  on(CustomerActions.loadCustomer, (state: CustomerState) => ({
    ...state,
    loaded: true,
  })),

  // on(
  //   CustomerActions.loadCustomersSuccess,
  //   (state: CustomerState, { customers }) => ({
  //     ...state,
  //     customers: customers,
  //     loading: false,
  //     loaded: true,
  //   })
  // ),

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
  )
);
