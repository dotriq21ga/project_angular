import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'requisition',
        loadChildren: () => import('../requisition/requisition.module').then(m => m.RequisitionModule)
      },
      { path: 'candidate', loadChildren: () => import('../candidate/candidate.module').then(m => m.CandidateModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
