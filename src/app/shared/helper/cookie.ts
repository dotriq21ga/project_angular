import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
    providedIn: 'root'
})

export class Cookie {

    constructor(public cookieService: CookieService) { }

    setToken(accessToken: any, tokenExpireDate: any) {
        return this.cookieService.set('token', accessToken, { expires: tokenExpireDate, path: '/' });
    }

    getToken() {
        return this.cookieService.get('token');
    }
}