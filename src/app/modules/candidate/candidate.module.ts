import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate.component';
import { CandidateStaffComponent } from './candidate-staff/candidate-staff.component';
import { CandidateInternComponent } from './candidate-intern/candidate-intern.component';
import { ShareModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CandidateComponent,
    CandidateStaffComponent,
    CandidateInternComponent
  ],
  imports: [
    ShareModule,
    CommonModule,
    CandidateRoutingModule
  ]
})

export class CandidateModule { }
