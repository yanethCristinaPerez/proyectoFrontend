import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carrito } from 'src/app/interfaces/Carrito';
import { CarritoCompras } from 'src/app/interfaces/CarritoCompras';
import { Factura } from 'src/app/interfaces/Factura';
import { Productos } from 'src/app/interfaces/Productos';
import { Tallas } from 'src/app/interfaces/Tallas';
import { Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { FacturaService } from 'src/app/services/factura.service';
import Swal from'sweetalert2'
declare var $: any;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit{

  idUsuarioActual!: number;
  usuario!:Usuario;
  usuarioLogueado!: Usuario;
  alerta:string="";

  carrito:Carrito[] = [];

  productos!: Productos;

  tallaSeleccionada!:Tallas;
  factura!:Factura;

  id:number=0;
  

  total:number = 0;
  cantidad: number = 0;
  precio: number = 0;
  subtotal: number = 0;

  ciudad1:string="";
    direccion:string="";
    correo:string="";

  constructor(private route:ActivatedRoute,
    public carritoService:CarritoService,
    public authService:AuthService,
    public facturaService:FacturaService
    ){}




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

      console.log("estoy en el boton borrar")
      
      this.carrito.shift();

      const itemBorrado=this.carrito.shift();

      let id=itemBorrado?.idItems;

      console.log("este es el id",id)

      this.carritoService.eliminarItemPorId(id).subscribe(resp=>{
        
      })
      
      
      // console.log(itemBorrado);
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


          guardarFactura(){

            
            Swal({
             
                html: `<div>
                
                <form>
                <label for="uname">Ciudad de envio: </label>
                <input type="text" placeholder="ciudad" id="swal-input1" class="ciudad">
                <label for="uname">direccion de envio: </label>
                <input type="text" placeholder="direccion" id="swal-input2" >
                <label for="uname">Correo para envio de factura: </label>
                <input type="text" placeholder="correo para facturacion" id="swal-input3" >
                
                </form>
                
              </div>
              
                `,

                preConfirm: function () {

                  return new Promise(function (resolve) {
              
                    resolve([
              
                      $('#swal-input1').val(),             
          //     console.log($('#swal-input1').val()),       
                      //document.getElementById('#swal-input1');
                      $('#swal-input2').val(),
                      $('#swal-input3').val(),
              
                    ])
              
                    //console.log(resolve[0])
                  })
              
                },
              
                onOpen: function () {
              
                 $('#swal-input1').focus(),
                  $('#swal-input2').focus(),
                  $('#swal-input3').focus()
              
                }
              
              }).then( (result) => {

                let cadena=result;

                let ciudad=cadena.value[0];   
                let direccion=cadena.value[1] ;
                let correo= cadena.value[2];
                
                console.log("los tres===",ciudad,direccion,correo)
                Swal(JSON.stringify(result))
              
         
                this.ciudad1=ciudad;
                this.direccion=direccion;
                this.correo=correo;
            


                let usuario={usuario:this.usuarioLogueado};
            let detalles= {detalles:this.carrito};
            



             let nuevoObjeto: Factura = {
              
               ciudad:this.ciudad1,
               direccion:this.direccion,
               correo:this.correo,
               usuario:usuario.usuario,
               detalles:detalles.detalles,


           };

           console.log("esta es la factura===",nuevoObjeto)
             this.facturaService.guardarFactura(nuevoObjeto).subscribe(data=>{
               alert("Se almaceno correctamente!")
             },
             error=>{
               console.log(error);
               alert("Ocurrio un error");
             })
          }
          
                




              ).catch(Swal.noop)
            

          

          // let fecha={fecha: this.factura.fecha}
            }
            
}