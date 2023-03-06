import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Productos } from 'src/app/interfaces/Productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  constructor( public productosServicios:ProductosService,
    private router:Router){}

  ngOnInit(): void { }

  
  buscarProducto(termino:string){

    if(termino.length <1){
      return;
    }

    this.router.navigate(['/busqueda',termino]);
    
  }

}




