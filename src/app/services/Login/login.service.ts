import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_SERVER = "http://localhost:8080/shop/users/login";

  constructor(private http: HttpClient) { }



 public login(login: any): Observable<any>{

    return this.http.get(this.API_SERVER);
  }
}
