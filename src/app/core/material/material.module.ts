import { NgModule } from "@angular/core";
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = [
    MatIconModule,
    MatTreeModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
]

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents],
})

export class MaterialModule { }