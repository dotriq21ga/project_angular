import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material/material.module';
import { PrimengModule } from '../core/primeng/primeng.module';
import { ErrorValidationComponent } from './components/error-validation/error-validation.component';

@NgModule({
    declarations: [
        SidebarComponent,
        HeaderComponent,
        ErrorValidationComponent,
    ],
    imports: [
        MaterialModule,
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PrimengModule
    ],
    exports: [
        SidebarComponent,
        HeaderComponent,
        ErrorValidationComponent,
    ],
})

export class ShareModule { }