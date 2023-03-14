import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Carrito } from 'src/app/interfaces/Carrito';
import { CarritoCompras } from 'src/app/interfaces/CarritoCompras';
import { switchMap, tap } from 'rxjs/operators';
import { Productos } from 'src/app/interfaces/Productos';
import { Tallas } from 'src/app/interfaces/Tallas';
import { Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';
import { TallasService } from 'src/app/services/tallas.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  productos!: Productos;
  tallas:any;
  id: number =0;
  usuario!:Usuario;

  disponible:string="";
  cantidad: number = 0;
  //tallaSeleccionada: number = 0;  
  tallaSeleccionada!:Tallas;
  usuarioLogueado!: Usuario;

  actualizar!: Productos;

constructor(private route:ActivatedRoute,
    public fb: FormBuilder,
    public productosService:ProductosService,
    public tallasService:TallasService,
    public carritoService:CarritoService,
    public authService:AuthService){}


  ngOnInit(): void {
    
    this.route.params
    .subscribe(parametros=>{

      this.productosService.getPorId(parametros['id'])
      .subscribe((productos:any) =>{

        this.id = parametros['id'];

        this.productos=productos
      })
      })

      this.tallasService.getAllTallas().subscribe(resp=>{
          this.tallas=resp;
          
      });



      const correoUsuarioActual = localStorage.getItem('correo');

      console.log("el correo actual es===",correoUsuarioActual)
    if (correoUsuarioActual !== null) {
       this.authService.obtenerUsuarioPorCorreo(correoUsuarioActual)
         .subscribe((item => {
           console.log(item);
           this.usuarioLogueado = item;
         }))
    }



  }


  agregarCarrito(): void {

    console.log("producto seleccionado",this.productos)

      let usuario = {usuario: this.usuarioLogueado}

      console.log("producto seleccionado",this.usuarioLogueado)

       let cantidad = { cantidad: this.cantidad }
       let tallaSeleccionada={tallaSeleccionada: this.tallaSeleccionada}



       
       let nuevoObjeto: CarritoCompras = {
         usuario: usuario.usuario,
         productos: this.productos,
         cantidadPedida: cantidad.cantidad,
         tallaPedida: tallaSeleccionada.tallaSeleccionada
     };

     console.log("objeto que me va a guardar",nuevoObjeto)


     console.log("id para el metodo disponiblidad==",this.id,"cantidad a guardar==",this.cantidad)

          this.productosService.disponible(this.id,this.cantidad).subscribe((resp:any)=>{

            const email = resp.disponible;
      
            console.log("la respuesta es====="+ email)

            window.alert(email);

            if(email=="es disponible"){

              

              
                this.carritoService.saveCarrito(nuevoObjeto)
                  .subscribe(result => {
                    console.log(result);

                    window.alert("producto guardado en el carrito")
                  });



            }else{
              window.alert("ingrese otra cantiad")
            }


          })







  }

}
