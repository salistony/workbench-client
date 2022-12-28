import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Credentials, SignUpModel } from '../../_models/login.model';
import { Response } from '../../_models/response/response';
import { AccountInfo } from '../../_models/account/account-info';
import { AccountSettingsModel } from '../../_models/account-settings';

@Injectable()

export class AuthService {
	apiEndpoint = 'api/auth';

	jwtHelperService = new JwtHelperService();

	constructor(private http: HttpClient) {
	}

  public checkToken(): boolean {
		const token = this.getTokenProfile();
		if (token) {
			return true;
		}
		return false;
	}

  getTokenProfile() {
		const token = localStorage.getItem('jwt');
		if (token) {
			return this.jwtHelperService.decodeToken(token);
		}
		return null;
	}

	public login(credentials: Credentials): Observable<Response<AccountInfo>> {
		return this.http.post<Response<AccountInfo>>(`${this.apiEndpoint}/login`, credentials);
	}

  public verifyEmail(email: string): Observable<Response<boolean>> {
    return this.http.post<Response<boolean>>(`${this.apiEndpoint}/verify-email?email=${email}`, email);
  }

  public createAccount(account: SignUpModel): Observable<Response<AccountInfo>> {
    return this.http.post<Response<AccountInfo>>(`${this.apiEndpoint}/create-account`, account)
  }

  public editAccount(account: AccountSettingsModel): Observable<Response<AccountInfo>> {
    return this.http.post<Response<AccountInfo>>(`${this.apiEndpoint}/account-settings`, account)
  }
}
