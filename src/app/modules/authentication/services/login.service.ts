import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { FormLogin, Token } from '../type/authentication';
import { ApiResponse } from 'src/app/shared/type/shared';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rememberMe!: boolean;

  constructor(public api: ApiService, public router: Router) { }

  authenticate(body: FormLogin) {
    const url = "TokenAuth/Authenticate";
    this.api.authenticate(url, body)
      .subscribe((json: any) => {
        this.rememberMe = body.rememberClient;
        this.resultAuthenticate(json.result);
        this.router.navigate(['']);
      });
  }

  private resultAuthenticate(token?: Token) {
    if (token) {
      this.login(token.accessToken, token.expireInSeconds);
    };
  }

  private login(accessToken: string, expireInSeconds: number) {
    const tokenExpireDate = this.rememberMe ? new Date(new Date().getTime() + 1000 * expireInSeconds) : undefined;
    this.api.cookie.setToken(accessToken, tokenExpireDate);
  }
}