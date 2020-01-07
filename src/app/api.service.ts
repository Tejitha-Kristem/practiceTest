import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://reqres.in/api/users?page=2"
  refreshdata = timer(0, 10000);

  constructor(private http: HttpClient) { }
  getData() {
    return this.refreshdata.pipe(switchMap(() => this.http.get(this.url)))
  }
}
