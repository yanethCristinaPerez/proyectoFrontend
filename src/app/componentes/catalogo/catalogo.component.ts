import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/interfaces/Productos';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{

  productos: Productos[]=[];

  constructor(public productosService: ProductosService, 
    public urlGenero:ActivatedRoute
    ){}

  genero:string = "";

  ngOnInit(): void {
  this.genero=this.urlGenero.snapshot.params['genero'];

  this.productosService.getPorGenero(this.genero)
  .subscribe(productos => {
    console.log(productos);
    this.productos = productos;

  }, (error) => {
    // this.hayError = true;
  });




  // this.productosService.getPorGenero(this.genero)
  // .subscribe(producto => {
  //   this.productos = producto;

   
    
  // });
  // .subscribe((respuesta:Productos[])=>{

  //   this.productos=respuesta;
  //   console.log(respuesta);
  //   console.log(this.productos);
  // })
  }

  
  

}
