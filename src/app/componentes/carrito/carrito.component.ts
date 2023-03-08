import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carrito } from 'src/app/interfaces/Carrito';
import { Productos } from 'src/app/interfaces/Productos';
import { Tallas } from 'src/app/interfaces/Tallas';
import { Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit{

  idUsuarioActual!: number;
  usuario!:Usuario;
  usuarioLogueado!: Usuario;

  carrito:Carrito[] = [];

  productos!: Productos;

  tallaSeleccionada!:Tallas;

  total:number = 0;
  cantidad: number = 0;
  precio: number = 0;
  subtotal: number = 0;

  constructor(private route:ActivatedRoute,
    public carritoService:CarritoService,
    public authService:AuthService){}




  ngOnInit(): void {

    
    const correoUsuarioActual = localStorage.getItem('correo');

    console.log("el correo actual es===",correoUsuarioActual)
  if (correoUsuarioActual !== null) {
     this.authService.obtenerUsuarioPorCorreo(correoUsuarioActual)
       .subscribe((item => {
 
         this.usuarioLogueado = item;

         this.idUsuarioActual = this.usuarioLogueado.idUsuarios;
          this.obtenerCarrito(this.idUsuarioActual);


          // this.calcularTotal()
       }))

       //this.calcularTotal()
       
  }

  }


      obtenerCarrito(id:number): void {
       console.log("estoy aqui en el metodo obtener carrito" + this.idUsuarioActual);

        this.carritoService.getCarrito(this.idUsuarioActual).subscribe(resp=>{
        this.carrito=resp;
        
      })

    }


    borrar(){
      this.carrito.shift();
    }


    calcularTotal(){

    
          let total1 = 0;
          if (Array.isArray(this.carrito)) {
            for (const item of this.carrito) {
              total1 += item.productos.precio * item.cantidadPedida;
            }
          }
          return total1;
          }

}