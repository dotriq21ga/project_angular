import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequisitionRoutingModule } from './requisition-routing.module';
import { RequisitionComponent } from './requisition.component';
import { RequisitionStaffComponent } from './requisition-staff/requisition-staff.component';
import { RequisitionInternComponent } from './requisition-intern/requisition-intern.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from 'src/app/shared/shared.module';
import { PrimengModule } from 'src/app/core/primeng/primeng.module';
import { FormDialogStaffComponent } from './requisition-staff/form-dialog-staff/form-dialog-staff.component';
import { FormDialogInternComponent } from './requisition-intern/form-dialog-intern/form-dialog-intern.component';

@NgModule({
  declarations: [
    RequisitionComponent,
    RequisitionStaffComponent,
    RequisitionInternComponent,
    FormDialogStaffComponent,
    FormDialogInternComponent,
  ],
  imports: [
    ShareModule,
    CommonModule,
    RequisitionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RequisitionModule { }