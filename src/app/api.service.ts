import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SecondApiService} from './second-api.service';
import {FishApiService} from './fish-api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  result: any;

  constructor(private http: HttpClient,
              public secondApiService: SecondApiService) {
    this.ping$().subscribe(result => this.result = result);
  }

  ping$(): Observable<any> {
    return this.http.get(`/api/external`);
  }
}
