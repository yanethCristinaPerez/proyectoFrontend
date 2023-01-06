import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { DocumentTypesService } from 'src/app/services/documentTypes/document-types.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{

  usuarioForm!: FormGroup;
  documentTypes: any;
  user:any;

  constructor(
    public fb: FormBuilder,
    public userService: UsersService,
    public documentTypeService: DocumentTypesService
){

}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
        documentType: ['',Validators.required],
        documentNumber: ['',Validators.required],
        name: ['',Validators.required],
        lastName: ['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        
        

      });;

      this.documentTypeService.getAllDocTypes().subscribe(resp=>{

       this.documentTypes=resp;
      
      },
      error => {console.error(error);
      }
      
      
      )
    
  }

  guardar():void{
    this.userService.saveUser(this.usuarioForm.value).subscribe( resp=>{
      this.usuarioForm.reset();

    },
    error => {console.error(error)}
    
    )
  }

}

