import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private API_SERVER = "http://localhost:8080/shop/users/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllUsers(): Observable<any>{
    return this.httpClient.get(this.API_SERVER)
  }

  public saveUser(user:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,user)
  }

}
