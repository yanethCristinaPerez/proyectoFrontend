import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/Login/login.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit{

  loginForm!: FormGroup;
  

constructor(
  public fb:FormBuilder,
  public loginService:LoginService,
  

){}

  ngOnInit(): void {

    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      

    })
    
  }

  
  consultar():void{

    

    this.loginService.login(this.loginForm?.value).subscribe( resp=>{
      this.loginForm?.reset;
    

    },
    error => {console.error(error)}
    
    )

    
  }

}
