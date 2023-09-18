import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
datas:any
  constructor( private http: HttpClient) { }
  getData(): Observable<any>{
    return this.http.get('https://api.covidtracking.com/v1/us/daily.json')
  } 
}
