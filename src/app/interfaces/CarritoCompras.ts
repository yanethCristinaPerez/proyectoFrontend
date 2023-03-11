import { Productos } from "./Productos";
import { Tallas } from "./Tallas";
import { Usuario } from "./usuario";

export interface CarritoCompras {
    
    cantidadPedida:number;
    tallaPedida:Tallas;
    usuario:Usuario;
    productos:Productos;
            
    }