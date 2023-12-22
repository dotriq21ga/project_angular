import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse, CurrentLoginResult, IApplication, IUser } from 'src/app/shared/type/shared';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject({});

  constructor(public api: ApiService, public router: Router) { }

  getUser() {
    return this.user.asObservable();
  }

  getCurrentLoginInformations(): Observable<ApiResponse<CurrentLoginResult<IApplication, IUser>>> {
    const url = 'services/app/Session/GetCurrentLoginInformations';
    return this.api.get(url);
  }

  isLogin() {
    return this.getCurrentLoginInformations()
      .pipe(
        tap((json: any) => {
          if (json.result.user as IUser) {
            this.user.next(json.result.user);
            return true;
          } else {
            this.router.navigate(['/account/login']);
            return false;
          }
        }),
        catchError(() => {
          this.router.navigate(['/account/login']);
          return of(false);
        })
      );
  }
}
