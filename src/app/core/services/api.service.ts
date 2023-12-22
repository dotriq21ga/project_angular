import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/shared/type/shared';
import { Cookie } from 'src/app/shared/helper/cookie';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  rootUrl: string;

  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });

  constructor(public httpClient: HttpClient, public cookie: Cookie) {
    this.rootUrl = "http://dev-api-talent.nccsoft.vn/api/";
  }

  get(url: string): Observable<ApiResponse<any>> {
    return this.httpClient.get(
      this.rootUrl + url,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${this.cookie.getToken()}`
        })
      });
  }

  post(url: string, body: any): Observable<ApiResponse<any>> {
    return this.httpClient.post(
      this.rootUrl + url,
      JSON.stringify(body),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${this.cookie.getToken()}`
        })
      })
  }

  put(url: string, body: any): Observable<ApiResponse<any>> {
    return this.httpClient.put(
      this.rootUrl + url,
      JSON.stringify(body),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${this.cookie.getToken()}`
        })
      })
  }

  delete(url: string): Observable<ApiResponse<any>> {
    return this.httpClient.delete(
      this.rootUrl + url,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${this.cookie.getToken()}`
        })
      })
  }

  authenticate(url: string, body: any): Observable<ApiResponse<Token>> {
    return this.httpClient.post(
      this.rootUrl + url,
      JSON.stringify(body),
      {
        headers: this.header
      })
  }
}