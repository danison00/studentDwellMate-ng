import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProfilesComponent } from './home-contents/all-profiles/all-profiles.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ConnectionsComponent } from './home-contents/connections/connections.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { StepOneComponent } from './pages/create-account/step-one/step-one.component';
import { StepTwoComponent } from './pages/create-account/step-two/step-two.component';
import { NewAccountComponent } from './pages/new-account/new-account.component';
import { Step1Component } from './pages/new-account/step-1/step-1.component';
import { Step2Component } from './pages/new-account/step-2/step-2.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
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
    path: 'create-account',
    component: CreateAccountComponent,
    children: [
      { path: 'step-1', component: StepOneComponent },
      { path: 'step-2', component: StepTwoComponent },
      {path: '**', redirectTo: 'step-1'}
    ],
  },
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
