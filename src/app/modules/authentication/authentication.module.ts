import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './page/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/material/material.module';
import { PrimengModule } from 'src/app/core/primeng/primeng.module';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    PrimengModule
  ]
})

export class AuthenticationModule { }