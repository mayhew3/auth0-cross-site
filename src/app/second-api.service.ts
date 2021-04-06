import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecondApiService {
  result: any;

  constructor(private http: HttpClient) {
    this.ping$().subscribe(result => this.result = result);
  }

  ping$(): Observable<any> {
    return this.http.get(`/api/secondary`);
  }
}
