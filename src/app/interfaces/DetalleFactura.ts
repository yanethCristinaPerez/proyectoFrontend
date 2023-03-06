import { Productos } from "./Productos";

export interface DetalleFactura {
    idDetalles:number;
    tallaEscogida:string;
    cantidadEscogida:number;
    precioTotal:number;
    total:number;
    producto:Productos;
            
    }