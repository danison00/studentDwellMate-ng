import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProfilesComponent } from './pages/all-profiles/all-profiles.component';
import { LoginComponent } from './pages/login/login.component';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { NewAccountComponent } from './pages/new-account/new-account.component';
import { Step1Component } from './pages/new-account/step-1/step-1.component';
import { Step2Component } from './pages/new-account/step-2/step-2.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutPageComponent,
    children: [
      {
        path: 'profiles',
        component: AllProfilesComponent,
      },
      {
        path: 'connections',
        component: ConnectionsComponent,
      },
      { path: '**', redirectTo: 'profiles' },
    ],
  },
  { path: 'login', component: LoginComponent },
  
  {
    path: 'new-account',
    component: NewAccountComponent,
    children: [
      { path: 'step-1', component: Step1Component },
      { path: 'step-2', component: Step2Component },
      {path: '**', redirectTo: 'step-1'}
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
