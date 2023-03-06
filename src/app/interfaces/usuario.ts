import { TiposDocumentos } from "./TiposDocumentos";

export interface Usuario{


idUsuarios:number;
tiposDocumentos:TiposDocumentos;
numeroDocumento:number;
nombres:string;
apellidos:string;
correo:string;
contrasena:string;



}