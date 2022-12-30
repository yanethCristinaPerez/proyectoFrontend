import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypesService {

  private API_SERVER = "http://localhost:8080/shop/documents/";

  constructor(

    private httpClient: HttpClient
    
  ) { }

public getAllDocTypes(): Observable<any>{
  return this.httpClient.get(this.API_SERVER)
}

}
