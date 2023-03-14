import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/interfaces/Productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})

export class BusquedaComponent implements OnInit{

  productos: Productos[] = [];
  termino: string = '';
  seleccionGenero = 'hombre';

  constructor(private route:ActivatedRoute,
    public productosService:ProductosService
    ){}


    ngOnInit(): void {

      this.termino=this.route.snapshot.params['termino'];

      console.log(this.termino);
    
      this.productosService.getProductos(this.termino,this.seleccionGenero)
      .subscribe(productos => {
        console.log("dentro del primer metodo...luego el service")
        console.log(productos);
        this.productos = productos;

      }, (error) => {
        console.log("error")
        
      });

    }

    
  }

    