import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../interfaces/Factura';

@Injectable({
  providedIn: 'root'
})


export class FacturaService {

  private url: string='http://localhost:8080/shop/factura'
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})
  constructor(

    private httpClient: HttpClient

  ) { }


  public guardarFactura(factura:Factura): Observable<any>{
    console.log("estoy en el metodo guardar factura")
    return this.httpClient.post<Factura>(this.url,factura,{headers:this.httpHeaders})
  }

  
  
}
