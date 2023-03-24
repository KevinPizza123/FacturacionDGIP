import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoconceptoService {

  private apiUrl = 'http://localhost:8080/tipoconcepto/listaTipoConcepto';

  constructor(private http: HttpClient) { }

  getTipoconcepto(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
