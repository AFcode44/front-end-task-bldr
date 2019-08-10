import { Action } from '@ngrx/store';
import { User } from 'src/app/shared/services/user/user.interface';

export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action'
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;

  public constructor(public payload: {user: User}) {}

}

export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutAction;

  public constructor() {}

}


export type AuthActions = Login | Logout;
