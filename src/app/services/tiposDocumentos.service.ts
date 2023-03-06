import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TiposDocumentosService {

  private urlTipoDocumento: string='http://localhost:8080/shop/documents/'
  constructor(

    private httpClient: HttpClient

  ) { }

public getAllDocTypes(): Observable<any>{
  return this.httpClient.get(this.urlTipoDocumento)
}

}