import { Carrito } from "./Carrito";
import { DetalleFactura } from "./DetalleFactura";
import { Usuario } from "./usuario";

export interface Factura {
    
    
    ciudad:string;
    direccion:string;
    correo:string;
    usuario:Usuario;
    detalles:Carrito[];
  //  detalles:DetalleFactura[]
        
    }