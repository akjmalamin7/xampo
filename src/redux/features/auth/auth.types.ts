export interface UserSchema {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}
export interface LoginData{
  email:string;
  password:string;
}
export interface AuthState {
  token: string | null;
  user: UserSchema | null;
}
export const AUTH_INITIAL_STATE: AuthState = {
  token: null,
  user: {} as UserSchema
};