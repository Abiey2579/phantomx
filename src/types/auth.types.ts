export interface TUser {
  id: string;
  email: string;
  phone: string;
}

export interface TSession {
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}
