import { Productos } from "./Productos";
import { Tallas } from "./Tallas";
import { Usuario } from "./usuario";

export interface CarritoNuevo {
    
    cantidadPedida:number;
    tallaPedida:number;
    usuario:Usuario;
    productos:Productos;
            
    }