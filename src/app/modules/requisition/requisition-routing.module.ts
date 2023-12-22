import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequisitionComponent } from './requisition.component';
import { RequisitionStaffComponent } from './requisition-staff/requisition-staff.component';
import { RequisitionInternComponent } from './requisition-intern/requisition-intern.component';

const routes: Routes = [
  { path: '', redirectTo: 'staff', pathMatch: 'full' },
  {
    path: '',
    component: RequisitionComponent,
    children: [
      {
        path: 'staff',
        component: RequisitionStaffComponent
      },
      {
        path: 'intern',
        component: RequisitionInternComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RequisitionRoutingModule { }