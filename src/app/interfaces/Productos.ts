import { Color } from "./Color";
import { Genero } from "./Genero";
import { Marca } from "./Marca";
import { Tallas } from "./Tallas";

export interface Productos {
idProductos:number;
numeroDocumento:number;
nombre:string;
imagen:string;
cantidadDisponible:number;
descripcion:string;
precio:number;
contadorBusquedas:number;
color:Color;
genero:Genero;
marca:Marca;
tallas:Tallas;

}