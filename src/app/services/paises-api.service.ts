import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesApiService {
  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  getPaises(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((paises: any[]) => paises.slice(0, 50))
    );
  }

  getPais(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

}
