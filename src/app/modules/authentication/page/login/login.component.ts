import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  formLogin: FormGroup = new FormGroup({
    userNameOrEmailAddress: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberClient: new FormControl(false),
  });

  constructor(public apiLogin: LoginService) { }

  login() {
    this.apiLogin.authenticate(this.formLogin.value)
  }
}