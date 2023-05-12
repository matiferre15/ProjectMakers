import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm!: FormGroup;
  message: string; 

  userLogueado: User;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      usuario: ['', [Validators.required, ]],
      password: ['', [Validators.required,]]
    })
  }

  public submitFormulario(){
    
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=> {
        control.markAllAsTouched();
      })
      return;
    }

    const user = this.myForm.value.usuario;
    const password = this.myForm.value.password;
    const userData = {"username": user, "password": password};

    this.authService.getUsuarioLogueado(userData).subscribe((response: any) => {
      if (response && response.length) {
        console.log(response)
        const userId = response[0].id;
        this.authService.setUserId(userId);
        this.message = "Valid credentials"
        alert(this.message)
        console.log(this.authService.getUserId())
        this.authService.setLoginSuccess(true);
        console.log(this.authService.getLoginSuccess())
        this.router.navigate(['/home'])
      } else {
        this.message = 'Invalid credentials';
        alert(this.message)
        this.authService.setLoginSuccess(false);
        console.log(this.authService.getLoginSuccess())
      }
    },
    error => {
      console.error(error);
      this.message = 'An error occurred. Please try again later.';
      this.authService.setLoginSuccess(false);
    }
  );

    // this.loginPrd.getUsuarioLogueado(user, password).subscribe((res: User) => {
    //   console.log(res);
    //   this.userLogueado = res
    //   console.log(this.userLogueado)
    // })

    // if(!this.userLogueado){
    //   alert("Usuario o contraseña incorrecto")
    // }
    // else{
    //   alert("Logueo exitoso!")
    // }

    console.log(this.myForm.value);
  }

  public get f(){
    return this.myForm.controls;
  }

}
