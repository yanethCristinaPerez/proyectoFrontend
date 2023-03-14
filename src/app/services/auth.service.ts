import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../interfaces/Factura';
import { Usuario } from '../interfaces/usuario';
import { Carrito } from '../interfaces/Carrito';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlEndPointLogin: string='http://localhost:8080/shop/users/login';
  private urlRegister: string='http://localhost:8080/shop/users'
  private urlEmail: string='http://localhost:8080/shop/users/sendMail'
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) {

   }

   login(usuario:Usuario):Observable<Usuario>{
    console.log("estoy en el metodo login")
    return this.http.post<Usuario>(this.urlEndPointLogin,usuario,{headers:this.httpHeaders})
   }


   public saveUser(user:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.urlRegister,user,{headers:this.httpHeaders})
  }

  obtenerUsuarioPorCorreo(correo: string): Observable<Usuario> {
    const url = `${this.urlRegister}/${correo}`;
    return this.http.get<Usuario>(url);
  }

  

  public envioCorreo(correo:string,factura:Factura): Observable<any>{
    console.log("estoy en el metodo enviar correo")
    const data={correo,factura};
    const url= `${this.urlEmail}${"?correo="}${correo}${"&?factura="}${factura}` 
    return this.http.post<Factura>(url,data,{headers:this.httpHeaders});
  }

}