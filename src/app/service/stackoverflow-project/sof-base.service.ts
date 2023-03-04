import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SofBaseService {
  public baseUrl = 'http://localhost:3000';

  constructor(public httpClient: HttpClient) {}

  getReq(url: any) {
    return this.httpClient.get<any>(this.baseUrlUpdate(url), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.baseUrlUpdate(url),
      }),
    });
  }

  postReq(url: any, data: any) {
    return this.httpClient.post<any>(this.baseUrlUpdate(url), data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.baseUrlUpdate(url),
      }),
    });
  }

  putReq(url: any, data: any) {
    return this.httpClient.put<any>(this.baseUrlUpdate(url), data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.baseUrlUpdate(url),
      }),
    });
  }

  baseUrlUpdate(url: string): string {
    return url.startsWith('/') ? this.baseUrl + url : url;
  }
}
