import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { User } from './models/User';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  userLogueado: User;

  constructor(private loginComponent: LoginComponent, public authService: AuthService){

  }

  public visualizarMenu(): boolean{
    console.log(this.authService.getLoginSuccess());
    return this.authService.getLoginSuccess();
  }
}
