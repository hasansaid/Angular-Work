import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CallResponse } from 'src/app/model/random-image/random-image';

@Injectable({
  providedIn: 'root',
})
export class RandomImageService {
  constructor(private http: HttpClient) {}

  getImages() {
    return this.http.get<CallResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID Wi6rH-5MQKNC9zwqQjhdTCR_FzXSDA_8RUMjbypmhTs',
        },
      }
    );
  }
}
