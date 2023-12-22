import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './candidate.component';
import { CandidateStaffComponent } from './candidate-staff/candidate-staff.component';
import { CandidateInternComponent } from './candidate-intern/candidate-intern.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateComponent,
    children: [
      {
        path: 'staff',
        component: CandidateStaffComponent,
      },
      {
        path: 'intern',
        component: CandidateInternComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
