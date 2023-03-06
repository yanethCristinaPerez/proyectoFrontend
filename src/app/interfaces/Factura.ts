import { DetalleFactura } from "./DetalleFactura";
import { Usuario } from "./usuario";

export interface Factura {
    idFactura:number;
    ciudad:string;
    direccion:string;
    correoEnvio:string;
    total:number;
    usuario:Usuario;
    precio:number;
    detalle:DetalleFactura[];
        
    }