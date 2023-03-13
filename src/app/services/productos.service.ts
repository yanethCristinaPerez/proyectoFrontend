import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/Productos';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class ProductosService {

  productos:Productos[] = [];
  productosFiltrado:Productos[]=[];

  private API_SERVER = "http://localhost:8080/shop/catalogo";
  private API_SERVER_ = "http://localhost:8080/shop/catalogo/buscarPorGenero"
  

  private httpHeaders = new HttpHeaders({
    'Content-type': 'aplication/json'
  })


  constructor(private http:HttpClient) {
  
   }

   public getPorGenero(genero:string): Observable<Productos[]>{
    const url= `${this.API_SERVER_}${"?genero="}${genero}`  
    return this.http.get<Productos[]>(url);
  }


  public getProductos(termino:string,genero:string): Observable<Productos[]>{
    console.log("estoy en el metodo de productos");
    const url= `${this.API_SERVER}/${genero}/${termino}`  
    return this.http.get<Productos[]>(url);
  }

 
  public getMasBuscados(): Observable<any>{
    return this.http.get(this.API_SERVER)
  }

  public getPorId(id:number): Observable<Productos[]>{
    const url= `${this.API_SERVER}/${id}`  
    return this.http.get<Productos[]>(url);
  }

 
}
