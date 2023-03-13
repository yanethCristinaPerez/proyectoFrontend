import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { SwitchService } from 'src/app/services/switch.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation:ViewEncapsulation.None,
})


export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  modalSwitch:boolean | undefined;

constructor(
  public fb:FormBuilder,
  public loginService:AuthService,
  private router:Router,
  private modalSS:SwitchService,
  private modal:NgbModal  

){}

  ngOnInit(): void {

    this.loginForm=this.fb.group({
      correo:['',Validators.required],
      contrasena:['',Validators.required],
      

    })

    
    this.modalSS.$modal.subscribe((valor)=> {this.modalSwitch = valor})
  }

  
  consultar():void{

    console.log("estoy en el metodo consultar")
    this.loginService.login(this.loginForm?.value).subscribe( (resp:any)=>{
          //const emailRegex = /\S+@\S+\.\S+/;
          const email = resp.correo;

          

          console.log("este es el correo::::::",email)
          if (email !== null) {
          localStorage.setItem('correo', email);  
          
          this.router.navigate(['home']);
          }
        
    },
    error => {console.error(error)}
    
    )

    
  }


  openModal(){

    this.modalSwitch = true;

  }

  openCentrado(contenido: any){
    this.modal.open(contenido,{centered:true});
  }


}

