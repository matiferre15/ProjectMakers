import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm!: FormGroup; 

  userLogueado: User;

  constructor(private fb: FormBuilder, private loginPrd: AuthService) { }

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

    this.loginPrd.getUsuarioLogueado(user, password).subscribe((res: User) => {
      console.log(res);
      this.userLogueado = res
      console.log(this.userLogueado)
    })

    if(!this.userLogueado){
      alert("Usuario o contraseña incorrecto")
    }
    else{
      alert("Logueo exitoso!")
    }

    console.log(this.myForm.value);
  }

  public get f(){
    return this.myForm.controls;
  }

}
