export interface LoginModel {
  accountName: string;
  password: string;
  applicationTokenId: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface SignUpModel{
  name: string;
  email: string;
  password: string;
  defaultTheme: string;
}
