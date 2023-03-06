import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TiposDocumentosService } from 'src/app/services/tiposDocumentos.service';
import { AuthService } from 'src/app/services/auth.service';
import { SwitchService } from 'src/app/services/switch.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  
    registroForm!: FormGroup;
    tipoDocumento: any;
    user:any;
  
    constructor(
      public fb: FormBuilder,
      public userService: AuthService,
      public tipodocumentoservice: TiposDocumentosService,
      private _router:Router,
      private modalSS:SwitchService,
      private modal:NgbModal
  ){
  
  }
  
    ngOnInit(): void {


     
      
      this.registroForm = this.fb.group({
        tiposDocumentos: [null,Validators.required],
        numeroDocumento: [null,Validators.required],
          nombres: [null,Validators.required],
          apellidos: [null,Validators.required],
          correo:[null,Validators.required],
          contrasena:[null,Validators.required],
  
  
  
        });;
  
        this.tipodocumentoservice
        .getAllDocTypes()
        .subscribe(resp=>{
  
  
         this.tipoDocumento=resp;
  
        },
        error => {console.error(error);
        }
  
  
        )
  
    }
  
    guardar():void{
      this.userService.saveUser(this.registroForm.value).subscribe( resp=>{
  
        this.registroForm.reset();
        window.alert("registro exitoso")
              
        // this._router.navigate(['/login']);

      },
      error => {console.error(error)}
  
      )
    }

  closeModal(){

   // this.modalSS.$modal.emit(false)
  this._router.navigate(['/login']);
  }    


  openCentrado(contenido: any){
    this.modal.open(contenido,{centered:true});
  }

  }
