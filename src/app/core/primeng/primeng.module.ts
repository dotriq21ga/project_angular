import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipModule } from 'primeng/chip';

const PrimengComponents = [
    ButtonModule,
    CalendarModule,
    DynamicDialogModule,
    TagModule,
    ButtonModule,
    TableModule,
    ConfirmDialogModule,
    PaginatorModule,
    InputTextModule,
    MultiSelectModule,
    SelectButtonModule,
    ToggleButtonModule,
    DropdownModule,
    ToastModule,
    MenuModule,
    DialogModule,
    InputTextareaModule,
    ChipModule,
]

@NgModule({
    imports: [PrimengComponents],
    exports: [PrimengComponents],
})

export class PrimengModule { }