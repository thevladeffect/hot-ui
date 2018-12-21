import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CowsService {
  private serverUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<string[]> {
    return this.http.get<string[]>(`${this.serverUrl}/cows`);
  }
}
