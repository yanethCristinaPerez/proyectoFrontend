import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/interfaces/Productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-mas-buscados',
  templateUrl: './mas-buscados.component.html',
  styleUrls: ['./mas-buscados.component.css']
})
export class MasBuscadosComponent implements OnInit{
 
  productos: Productos[]=[];
 
 constructor(public productosService: ProductosService, 
  public urlGenero:ActivatedRoute){}
 
  ngOnInit(): void {
    
    this.productosService.getMasBuscados()
    .subscribe(productos =>{

      this.productos=productos;

    })
  }

 

}
