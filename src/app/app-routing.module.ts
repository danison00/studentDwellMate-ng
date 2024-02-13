import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProfilesComponent } from './home-contents/all-profiles/all-profiles.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ConnectionsComponent } from './home-contents/connections/connections.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';

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
      {path:'**', redirectTo: 'profiles'}
    ],
  },
  { path: 'login', component: LoginComponent },
  {path: 'create-account', component: CreateAccountComponent},
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
