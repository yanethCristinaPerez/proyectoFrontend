import { Productos } from "./Productos";
import { Tallas } from "./Tallas";
import { Usuario } from "./usuario";

export interface DetalleFactura {
    cantidadPedida:number;
    tallaPedida:Tallas;
    usuario:Usuario;
    productos:Productos;
            
    }