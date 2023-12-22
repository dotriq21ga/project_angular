import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate } from './core/guard/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: 'app/home', pathMatch: 'full' },
  {
    path: 'account',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: 'app',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [canActivate]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }