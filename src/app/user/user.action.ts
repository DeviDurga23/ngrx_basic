import { createAction, props } from "@ngrx/store";
import { User } from "../Models/user.model";

// Load user Actions
export const loadUsers = createAction('[User Component] Load Users');
export const loadUsersSuccess = createAction('[User Component] Load Users Success', props<{ users: readonly User[] }>());
export const loadUsersFailure = createAction('[User Component] Load Users Failure', props<{ error: any }>());

// Add user Actions
export const addUsers = createAction('[User Component] Add User', props<{ user: User }>());
export const addUsersSuccess = createAction('[User Component] Add User Success', props<{ user: User }>());
export const addUsersFailure = createAction('[User Component] Add User Failure', props<{ error: any }>());

// Remove user Actions
export const removeUsers = createAction('[User Component] Remove User', props<{ id: number }>());
export const removeUsersSuccess = createAction('[User Component] Remove User Success', props<{ id: number }>());
export const removeUsersFailure = createAction('[User Component] Remove User Failure', props<{ error: any }>());


