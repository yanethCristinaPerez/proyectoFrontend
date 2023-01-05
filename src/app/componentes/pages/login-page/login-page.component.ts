import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/Login/login.service';
import {Router} from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private loginService: LoginService,
    private router:Router,
  ){}

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],

    });;
    
    }

    iralRegistro():void{
    
      this.router.navigate(['register']);
    }  
  
    navegarAlHome():void{

      this.loginService.login(this.loginForm.value).subscribe(resp=>{

        return true;
        console.log(resp) ;
       
       },
       
       error => {console.error(error);
        return false;
       }
      )

  let respuesta= sessionStorage.getItem('resp');
      
  if(respuesta){

    this.router.navigate(['home']);
  }
}

  

}
