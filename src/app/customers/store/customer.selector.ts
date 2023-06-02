import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CustomerState } from './customer.reducer';

export const featureKey = 'customers';

export const selectFeature = createFeatureSelector<CustomerState>(featureKey);

export const selectFeatureCustomers = createSelector(
  selectFeature,
  (state) => state.customers
);

export const selectFeatureLoading = createSelector(
  selectFeature,
  (state) => state.loading
);

export const selectFeatureLoaded = createSelector(
  selectFeature,
  (state) => state.loaded
);

export const selectFeatureError = createSelector(
  selectFeature,
  (state) => state.error
);
