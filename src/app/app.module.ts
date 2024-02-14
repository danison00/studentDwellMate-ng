import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLeftComponent } from './components/menu-left/menu-left.component';
import { AllProfilesComponent } from './home-contents/all-profiles/all-profiles.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ConnectionsComponent } from './home-contents/connections/connections.component';
import { ButtonComponent } from './components/button/button.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepOneComponent } from './pages/create-account/step-one/step-one.component';
import { StepTwoComponent } from './pages/create-account/step-two/step-two.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLeftComponent,
    AllProfilesComponent,
    HomeComponent,
    LoginComponent,
    ConnectionsComponent,
    ButtonComponent,
    CreateAccountComponent,
    StepOneComponent,
    StepTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
