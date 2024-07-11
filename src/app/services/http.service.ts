import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ResponseApi } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'https://hitdigital.com.br/test.php'

  constructor(private http: HttpClient) { }

  getDados(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.url).pipe(take(1));
  }
}
