import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TallasService {

  private urlTallas: string='http://localhost:8080/shop/tallas'
  constructor(
    private httpClient: HttpClient
  ) { }


  public getAllTallas(): Observable<any>{
    return this.httpClient.get(this.urlTallas)
  }
  

}
