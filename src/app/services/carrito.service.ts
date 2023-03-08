import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrito } from '../interfaces/Carrito';
import { Factura } from '../interfaces/Factura';
import { Productos } from '../interfaces/Productos';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {


  carrito:Carrito[] = [];

  private urlRegister: string='http://localhost:8080/shop/carritos'
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) { }



  public saveCarrito(carrito:Carrito): Observable<Carrito>{
    return this.http.post<Carrito>(this.urlRegister,carrito,{headers:this.httpHeaders})
  }

  public getCarrito(id:number): Observable<Carrito[]>{
    console.log("estoy en el metodo de carritos");
    const url= `${this.urlRegister}/${id}`  
    return this.http.get<Carrito[]>(url);
  }

  
}
