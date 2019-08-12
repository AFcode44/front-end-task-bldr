import { createSelector } from '@ngrx/store';

export const selectAuthState = (state) => state.auth;


export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => { console.error(auth);
    return auth.loggedIn}
);


export const isLoggedOut = createSelector(
  isLoggedIn,
  (loggedIn) => !loggedIn
);
