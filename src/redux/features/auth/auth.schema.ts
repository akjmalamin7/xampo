export interface UserSchema {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}
interface AuthState {
  token: string | null;
  user: UserSchema | null;
}
export const AUTH_INITIAL_STATE: AuthState = {
  token: null,
  user: null
};